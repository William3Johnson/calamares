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
    return ""

def install_refind(boot_loader):
    install_path = libcalamares.globalstorage.value("rootMountPoint")
    uuid = get_uuid()
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

def run():
    boot_loader = libcalamares.globalstorage.value("bootLoader")
    bootchoice = libcalamares.globalstorage.value("packagechooser_bootchoice")

    if bootchoice != 'refind':
        return None

    install_refind(boot_loader)
    return None
