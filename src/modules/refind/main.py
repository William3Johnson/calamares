#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
# === This file is part of Calamares - <https://calamares.io> ===
#
#   SPDX-FileCopyrightText: 2021 Anke Boersma <demm@kaosx.us>
#   SPDX-License-Identifier: GPL-3.0-or-later
#
#   Calamares is Free Software: see the License-Identifier above.
#

import libcalamares

import os
import subprocess

from libcalamares.utils import check_target_env_call

import gettext
_ = gettext.translation("calamares-python",
                        localedir=libcalamares.utils.gettext_path(),
                        languages=libcalamares.utils.gettext_languages(),
                        fallback=True).gettext


def pretty_name():
    return _("Install rEFInd.")

def get_uuid():
    root_mount_point = libcalamares.globalstorage.value("rootMountPoint")
    print(root_mount_point)
    partitions = libcalamares.globalstorage.value("partitions")
    print(partitions)
    for partition in partitions:
        if partition["mountPoint"] == "/":
            libcalamares.utils.debug(partition["uuid"])
            return partition["uuid"]
    return None

def update_conf(uuid, conf_path):
    """
    Updates the created rEFInd configuration file based on given parameters.
    """
    partitions = libcalamares.globalstorage.value("partitions")

    kernel_params = ["quiet systemd.show_status=0"]
    swap = ""
    swap_luks = ""
    cryptdevice_params = []
    btrfs_params = ""

    for partition in partitions:
        if partition["fs"] == "linuxswap" and not "luksMapperName" in partition:
            swap = partition["uuid"]

        if partition["fs"] == "linuxswap" and "luksMapperName" in partition:
            swap_luks = partition["luksMapperName"]

        if partition["mountPoint"] == "/" and "luksMapperName" in partition:
            cryptdevice_params = [
                "cryptdevice=UUID={!s}:{!s}".format(partition["luksUuid"],
                                                    partition["luksMapperName"]),
                "root=/dev/mapper/{!s}".format(partition["luksMapperName"]),
                "resume=/dev/mapper/{!s}".format(partition["luksMapperName"])
            ]

        # rEFInd with a BTRFS root filesystem needs to be told
        # about the root subvolume.
        if partition["mountPoint"] == "/" and partition["fs"] == "btrfs":
            btrfs_params = "rootflags=subvol=@"

    if cryptdevice_params:
        kernel_params.extend(cryptdevice_params)
    else:
        kernel_params.append("root=UUID={!s}".format(uuid))

    if swap:
        kernel_params.append("resume=UUID={!s}".format(swap))
    if swap_luks:
        kernel_params.append("resume=/dev/mapper/{!s}".format(swap_luks))
    if btrfs_params:
        print('BTRFS')
        kernel_params.append(btrfs_params)

    with open(conf_path, "r") as refind_file:
        filedata = [x.strip() for x in refind_file.readlines()]

    with open(conf_path, 'w') as refind_file:
        for line in filedata:
            if line.startswith('"Boot with standard options"'):
                line = '"Boot with standard options"    "rw {!s}"'.format(" ".join(kernel_params))
            refind_file.write(line + "\n")
    refind_file.close()


def install_refind():
    install_path = libcalamares.globalstorage.value("rootMountPoint")
    uuid = get_uuid()
    conf_path = os.path.join(install_path, "boot/refind_linux.conf")
    partitions = libcalamares.globalstorage.value("partitions")
    device = ""

    for partition in partitions:
        if partition["mountPoint"] == "/boot":
            libcalamares.utils.debug(partition["device"])
            boot_device = partition["device"]
            boot_p = boot_device[-1:]
            device = boot_device[:-1]
            if boot_device.startswith('/dev/nvme'):
                device = boot_device[:-2]

            if not boot_p or not device:
                return ("EFI directory /boot not found!",
                        "Boot partition: \"{!s}\"",
                        "Boot device: \"{!s}\"".format(boot_p, device))
            else:
                print("EFI directory: /boot")
                print("Boot partition: \"{!s}\"".format(boot_p))
                print("Boot device: \"{!s}\"".format(device))

    if not device:
        print("WARNING: no EFI system partition or EFI system partition mount point not set.")
        print("         >>> no EFI bootloader will be installed <<<")
        return None
    print("Set 'EF00' flag")
    subprocess.call(
        ["sgdisk", "--typecode={!s}:EF00".format(boot_p), "{!s}".format(device)])
    subprocess.call(
        ["refind-install", "--root", "{!s}".format(install_path)])
    update_conf(uuid, conf_path)

def run():
    """
    Optional entry for when providing bootloader choices.
    Values taken from a packagechooser instance.
    Module won't run, if value not present.
    """
    #boot_loader = libcalamares.globalstorage.value("bootLoader")
    bootchoice = libcalamares.globalstorage.value("packagechooser_bootchoice")

    if bootchoice != "refind":
        return None

    install_refind()
    return None
