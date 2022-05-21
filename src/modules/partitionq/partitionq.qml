/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2021 - 2022 Anke Boersma <demm@kaosx.us>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

import io.calamares.core 1.0
import io.calamares.ui 1.0

import QtQuick 2.14
import QtQml 2.14
import QtQuick.Controls 2.14
import QtQuick.Layouts 1.3
import org.kde.kirigami 2.7 as Kirigami
import QtGraphicalEffects 1.0
import QtQuick.Window 2.3
import "."

Kirigami.ScrollablePage
{
    id: control
    width: 800
    height: 600

    Kirigami.Theme.textColor: "#1F1F1F"

    ColumnLayout
        {
            width: parent.width
            height: implicitHeight

            ButtonGroup {
                id: switchGroup
            }
            RowLayout {
                Button {
                    id: boot
                    icon.source: "images/boot-environment.svg"
                    icon.width: 32
                    icon.height: 32
                }
                ToolTip {
                    visible: boot.hovered
                    height: 200
                    width: 200
                    //anchors.centerIn: parent
                    text: "Tooltip boot environment"
                }
                Button {
                    id: bootInfo
                    text: qsTr("EFI")
                    icon.source: "images/information.svgz"
                    display: AbstractButton.TextUnderIcon
                    icon.width: 32
                    icon.height: 32
                }
                ToolTip {
                    visible: bootInfo.hovered
                    height: 200
                    width: 200
                    //anchors.centerIn: parent
                    text: "Tooltip boot UEFI or BIOS"
                }
                ItemDelegate {
                    Layout.fillWidth: true
                    Layout.preferredHeight: 120

                    background: Rectangle {
                        color: Kirigami.Theme.backgroundColor
                        radius: 5
                        opacity: 0.3
                    }

                    ListBrowser {
                        id: _listView
                        orientation: ListView.Horizontal
                        anchors.centerIn: parent
                        height: parent.height

                        Label {
                            anchors.horizontalCenter: parent.horizontalCenter
                            text: qsTr("Select storage device")
                        }
                        //width: Math.min(contentWidth, parent.width)
                        model: core.deviceModel
                        currentIndex: core.currentDeviceIndex
                        //currentIndex: 0
                        //model: ["Samsung 60 GiB (sda)", "Crucial 256 GIB (/dev/sdb)", "Samsung SSD 970 EVO 465 GiB (/dev/nvme0n1)"]

                        delegate: ListItemDelegate {
                            id: _delegate
                            height: 75
                            width: 120
                            anchors.verticalCenter: parent.verticalCenter
                            isCurrentItem: ListView.isCurrentItem
                            readonly property int index_ : index

                            ItemSection {
                                id: _diskOpt
                                anchors.fill: parent
                                Kirigami.Icon {
                                    source: "drive-harddisk"
                                    width: 48
                                    height: 48
                                    anchors.centerIn: parent
                                    color: Kirigami.Theme.highlightedTextColor
                                    visible: true //isCurrentItem
                                }
                                subtitle: model.name // modelData
                            }

                            onClicked: _listView.model.currentIndex = index //_diskOpt.checked = !_diskOpt.checked

                        }
                    }
                }
                Button {
                    id: part
                    icon.source: "images/partition-table.svg"
                    icon.width: 32
                    icon.height: 32
                }
                ToolTip {
                    visible: part.hovered
                    height: 200
                    width: 200
                    //anchors.centerIn: parent
                    text: "Tooltip partion table"
                }
                Button {
                    id: part2
                    text: qsTr("GPT")
                    icon.source: "images/information.svgz"
                    display: AbstractButton.TextUnderIcon
                    icon.width: 32
                    icon.height: 32
                }
                ToolTip {
                    visible: part2.hovered
                    height: 200
                    width: 200
                    //anchors.centerIn: parent
                    text: "Tooltip2 partion table"
                }
            }

            RowLayout {
                ColumnLayout {
                Switch {
                    property var opt : config.eraseOption
                    id: _eraseToggle
                    Layout.fillWidth: true
                    Layout.preferredHeight: 100
                    ButtonGroup.group: switchGroup
                    //icon.source: "partition-erase-auto.svg" //"gpick"//config.eraseOption.icon
                    visible: true //config.eraseOption.visible
                    enabled: true //config.eraseOption.enabled
                    checked: false
                    Binding on checked
                        {
                            value: config.eraseOption.checked
                            restoreMode: Binding.RestoreValue
                        }
                    indicator: Rectangle {
                        implicitWidth: 25
                        implicitHeight: 10
                        x: _eraseToggle.leftPadding
                        y: parent.height / 2 - height / 2
                        radius: 5
                        color: _eraseToggle.checked ? "#3498db" : "#B9B9B9"
                        border.color: _eraseToggle.checked ? "#3498db" : "#cccccc"

                        Rectangle {
                            x: _eraseToggle.checked ? parent.width - width : 0
                            y: (parent.height - height) / 2
                            width: 14
                            height: 14
                            radius: 7
                            color: _eraseToggle.down ? "#cccccc" : "#ffffff"
                            border.color: _eraseToggle.checked ? (_eraseToggle.down ? "#3498db" : "#3498db") : "#999999"
                        }
                    }
                    onClicked:
                    {
                        //                     config.installChoice = 2
                        config.eraseOption.checked = !config.eraseOption.checked
                    }

                    ListItemTemplate {
                        anchors.fill: parent
                        iconSource: "partition-erase-auto.svg"//"gpick"//config.eraseOption.icon
                        iconSizeHint: 48
                        //checkable: false
                        //Binding on checked
                        //{
                        //    value: config.eraseOption.checked
                        //    restoreMode: Binding.RestoreValue
                        //}
                        label1.text: "Erase Disk" //config.eraseOption.label
                        label2.text: "This will delete all data" //config.eraseOption.message
                    }
                    RowLayout {
                        anchors.bottom: parent.bottom
                        //anchors.bottomMargin: parent.height / 20
                        width: parent.width /1.2
                        ComboBox {
                            id: _swapComboBox
                            visible: _eraseToggle.checked
                            Layout.fillWidth: true
                            model: ["no swap", "hibernate", "swap"] //config.bootloaders
                            //textRole: "display"
                        }
                        ComboBox {
                            id: _fileComboBox
                            visible: _eraseToggle.checked
                            Layout.fillWidth: true
                            model: ["XFS", "ext4", "BTRFS"] //config.bootloaders
                            //textRole: "display"
                        }
                    }
                }

                Switch
                {
                    id: _alongSide
                    Layout.fillWidth: true
                    Layout.preferredHeight: 100
                    ButtonGroup.group: switchGroup
                    visible: true //config.alongsideOption.visible
                    enabled: true //config.alongsideOption.enabled

                    indicator: Rectangle {
                        implicitWidth: 25
                        implicitHeight: 10
                        x: _alongSide.leftPadding
                        y: parent.height / 2 - height / 2
                        radius: 5
                        color: _alongSide.checked ? "#3498db" : "#B9B9B9"
                        border.color: _alongSide.checked ? "#3498db" : "#cccccc"

                        Rectangle {
                            x: _alongSide.checked ? parent.width - width : 0
                            y: (parent.height - height) / 2
                            width: 14
                            height: 14
                            radius: 7
                            color: _alongSide.down ? "#cccccc" : "#ffffff"
                            border.color: _alongSide.checked ? (_alongSide.down ? "#3498db" : "#3498db") : "#999999"
                        }
                    }

                    onClicked:
                    {
                        //                     config.installChoice = 2
                        config.alongsideOption.checked = true
                    }

                    background: Rectangle
                    {
                        color: Kirigami.Theme.backgroundColor
                        radius: 5
                        opacity: 0.3
                    }

                    ListItemTemplate
                    {
                        anchors.fill: parent
                        iconSource: "partition-alongside.svg"
                        iconSizeHint: 48
                        //checkable: false
                        //Binding on checked
                        //{
                        //    value: config.alongsideOption.checked
                        //    restoreMode: Binding.RestoreValue
                        //}
                        label1.text: "Install Alongside" //config.alongsideOption.label
                        label2.text: "The installer will shrink a partition" //config.alongsideOption.message
                        //label2.wrapMode: Text.WrapAnyWhere
                    }
                }
                }

            ColumnLayout {
            Switch
            {
                id: _replaceOption
                Layout.fillWidth: true
                Layout.preferredHeight: 100
                ButtonGroup.group: switchGroup
                visible: true //config.replaceOption.visible
                enabled: true //config.replaceOption.enabled

                indicator: Rectangle {
                    implicitWidth: 25
                    implicitHeight: 10
                    x: _replaceOption.leftPadding
                    y: parent.height / 2 - height / 2
                    radius: 5
                    color: _replaceOption.checked ? "#3498db" : "#B9B9B9"
                    border.color: _replaceOption.checked ? "#3498db" : "#cccccc"

                    Rectangle {
                        x: _replaceOption.checked ? parent.width - width : 0
                        y: (parent.height - height) / 2
                        width: 14
                        height: 14
                        radius: 7
                        color: _replaceOption.down ? "#cccccc" : "#ffffff"
                        border.color: _replaceOption.checked ? (_replaceOption.down ? "#3498db" : "#3498db") : "#999999"
                    }
                }

                onClicked:
                {
                    config.replaceOption.checked = true
                }


                background: Rectangle
                {
                    color: Kirigami.Theme.backgroundColor
                    radius: 5
                    opacity: 0.3
                }

                ListItemTemplate {
                    anchors.fill: parent
                    iconSource: "partition-replace-os.svg"
                    iconSizeHint: 48
                    //checkable: false
                    //Binding on checked
                    //{
                    //    value: config.replaceOption.checked
                    //    restoreMode: Binding.RestoreValue
                    //}
                    label1.text: "Replace a partition" //config.replaceOption.label
                    label2.text: "Replaces a partition with xyz"//config.replaceOption.message
                    //label2.wrapMode: Text.WrapAnyWhere
                }
            }

            Switch
            {
                id: _somethingElse
                Layout.fillWidth: true
                Layout.preferredHeight: 100
                ButtonGroup.group: switchGroup
                visible: true //config.somethingElseOption.visible
                enabled: true //config.somethingElseOption.enabled

                indicator: Rectangle {
                    implicitWidth: 25
                    implicitHeight: 10
                    x: _somethingElse.leftPadding
                    y: parent.height / 2 - height / 2
                    radius: 5
                    color: _somethingElse.checked ? "#3498db" : "#B9B9B9"
                    border.color: _somethingElse.checked ? "#3498db" : "#cccccc"

                    Rectangle {
                        x: _somethingElse.checked ? parent.width - width : 0
                        y: (parent.height - height) / 2
                        width: 14
                        height: 14
                        radius: 7
                        color: _somethingElse.down ? "#cccccc" : "#ffffff"
                        border.color: _somethingElse.checked ? (_somethingElse.down ? "#3498db" : "#3498db") : "#999999"
                    }
                }

                onClicked:
                {
                    //config.somethingElseOption.checked = true
                    load.source = "manual.qml"
                }

                background: Rectangle
                {
                    color: Kirigami.Theme.backgroundColor
                    radius: 5
                    opacity: 0.3
                }

                ListItemTemplate
                {
                    anchors.fill: parent
                    iconSource: "partition-manual.svg" //"drive-harddisk"
                    iconSizeHint: 48
                    //checkable: false
                    //checked: config.somethingElseOption.checked

                    label1.text: "Manual Partitioning"//config.somethingElseOption.label
                    label2.text: "You can create or resize partitions yourself. Having a GPT partition table and <strong>fat32 512Mb /boot partition is a must for UEFI installs</strong>, either use an existing without formatting or create one."//config.somethingElseOption.message
                    //label2.wrapMode: Text.WrapAnyWhere
                }
            }
            }
            }

            RowLayout {

                ColumnLayout {
                    CheckBox
                    {
                        Layout.fillWidth: true
                        enabled: true //config.reuseHomeOption.enabled
                        visible: true //config.reuseHomeOption.visible
                        checked: false //config.reuseHomeOption.checked
                        text: "Reuse the home partition"//config.reuseHomeOption.label
                    }

                /*    CheckBox
                    {
                        Layout.fillWidth: true
                        enabled: config.efiOption.enabled
                        visible: config.efiOption.visible
                        checked: config.efiOption.checked
                        text: config.efiOption.label
                    } */

                    ColumnLayout
                    {
                        Layout.fillWidth: true
                        enabled: true //config.encryptOption.enabled
                        visible: true //config.encryptOption.visible


                        CheckBox
                        {
                            Layout.fillWidth: true
                            id: encryptOption
                            //checked: config.encryptOption.checked
                            text: "Encrypt system"//config.encryptOption.label
                            onToggled: encryptOption.checked = checked
                        }

                        TextField
                        {
                            visible: encryptOption.checked //config.encryptOption.checked
                            Layout.fillWidth: true
                            placeholderText: qsTr("Passphrase")
                            onTextChanged: config.encryptOption.passphrase = text
                        }

                        TextField
                        {
                            visible: encryptOption.checked //config.encryptOption.checked
                            Layout.fillWidth: true
                            placeholderText: qsTr("Confirm Passphrase")
                            onTextChanged: config.encryptOption.confirmPassphrase = text
                        }
                    }
                }
                ColumnLayout
                {
                    Layout.fillWidth: true
                    Layout.preferredHeight: 100

                    Label
                    {
                        visible: true //_bootloaderComboBox.visible
                        text: qsTr("Bootloader options:")
                        Layout.fillWidth: true
                    }

                    ComboBox
                    {
                        id: _bootloaderComboBox
                        visible: true //count
                        Layout.fillWidth: true
                        model: ["apples", "oranges", "pears"] //config.bootloaders
                        //textRole: "display"
                    }

                }
            }

            ColumnLayout
            {
                visible: _eraseToggle.checked || _somethingElse.checked ||
                    _replaceOption.checked || _alongSide.checked
                Layout.fillWidth: true

                Label
                {
                    Layout.fillWidth: true
                    text: qsTr("Current")
                }

                Rectangle
                {
                    id: _previewRec1
                    Layout.fillWidth: true
                    Layout.preferredHeight: 48
                    radius: 4
                    color: "green"
                    border.color: "black"

                    SplitView
                    {
                        anchors.fill: parent
                        Repeater
                        {
                            model: 4

                            Rectangle
                            {
                                SplitView.preferredWidth: 100
                                SplitView.preferredHeight: parent.height
                                SplitView.minimumWidth: 0
                                color: index % 2 == 0 ? "lightblue" : "yellow"
                                opacity: 0.7

                                Label
                                {
                                    anchors.centerIn: parent
                                    text: parent.width
                                }
                            }
                        }
                    }

                    layer.enabled: true
                    layer.effect: OpacityMask
                    {
                        maskSource: Item
                        {
                            width: _previewRec1.width
                            height: _previewRec1.height

                            Rectangle
                            {
                                anchors.fill: parent
                                radius: _previewRec1.radius
                            }
                        }
                    }

                }

                Label
                {
                    Layout.fillWidth: true
                    text: qsTr("After")
                }

                Rectangle
                {
                    Layout.fillWidth: true
                    Layout.preferredHeight: 48
                    radius: 4
                    color: "purple"
                    border.color: "black"

                    SplitView
                    {
                        anchors.fill: parent
                        Repeater
                        {
                            model: 4

                            Rectangle
                            {
                                SplitView.preferredWidth: 120
                                SplitView.preferredHeight: parent.height
                                SplitView.minimumWidth: 0
                                color: index % 2 == 0 ? "lightblue" : "white"
                                opacity: 0.7

                                Label
                                {
                                    anchors.centerIn: parent
                                    text: parent.width
                                }
                            }
                        }
                    }
                }

            }
            Loader {
                id:load
                anchors.fill: parent
            }
        }
}
