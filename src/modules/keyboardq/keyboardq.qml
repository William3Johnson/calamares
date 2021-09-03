/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2020 - 2021 Anke Boersma <demm@kaosx.us>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

import io.calamares.core 1.0
import io.calamares.ui 1.0

import QtQuick 2.10
import QtQuick.Controls 2.10
import QtQuick.Window 2.14
import QtQuick.Layouts 1.3

import org.kde.kirigami 2.7 as Kirigami
import "data"

Item {
    width: 800 //parent.width
    height: 600

    property var langXml: ["de", "en", "es", "fr", "ru",]
    property var arXml: ["Arabic"]
    property var ruXml: ["Azerba", "Belaru", "Kazakh", "Kyrgyz", "Mongol",
        "Russia", "Tajik", "Ukrain"]
    property var frXml: ["Belgia","French", "Wolof"]
    property var enXml: ["Englis", "Irish", "Lithua", "Maori"]
    property var esXml: ["Spanis"]
    property var deXml: ["German"]
    property var ptXml: ["Portug"]
    property var scanXml: ["Danish", "Finnis", "Norweg", "Swedis"]
    property var afganiXml: ["Afghan"]
    property var genericXml: ["Armeni", "Bulgar", "Dutch", "Estoni", "Icelan",
        "Italia", "Latvia", "Maltes", "Moldav", "Romani", "Swahil", "Turkis"]
    property var generic_qzXml: ["Albani", "Bosnia", "Croati", "Czech", "Hungar",
        "Luxemb", "Monten", "Polish", "Serbia", "Sloven", "Slovak"]

    property var keyIndex: Global.value("locale")

    Rectangle {
        id: backgroundItem
        anchors.fill: parent
        color: "#e6e9ea"//Kirigami.Theme.backgroundColor

        StackView {
            id: stack
            anchors.fill: parent
            clip: true

            initialItem: Item {

                Label {

                    id: header
                    anchors.horizontalCenter: parent.horizontalCenter
                    text: qsTr("Keyboard Model")
                    color: Kirigami.Theme.textColor
                    font.bold: true
                    font.weight: Font.Bold
                    font.pointSize: 24
                }

                Label {

                    id: intro
                    anchors.horizontalCenter: parent.horizontalCenter
                    anchors.top: header.bottom
                    color: Kirigami.Theme.textColor
                    horizontalAlignment: Text.AlignHCenter
                    width: parent.width / 1.5
                    wrapMode: Text.WordWrap
                    text: qsTr("Click your preferred keyboard model to select layout and variant, or use the default one based on the detected hardware.")
                }

                ListView {

                    id: list1

                    ScrollBar.vertical: ScrollBar {
                        active: true
                    }

                    width: parent.width / 2
                    height: 200
                    anchors.top: intro.bottom
                    anchors.horizontalCenter: parent.horizontalCenter
                    anchors.topMargin: 10
                    focus: true
                    clip: true
                    boundsBehavior: Flickable.StopAtBounds
                    spacing: 2

                    Rectangle {

                        z: parent.z - 1
                        anchors.fill: parent
                        color: "#FFFFFF"
                        opacity: 0.7
                    }

                    model: config.keyboardModelsModel
                    //model: ["Africa", "America", "Antarctica", "Arctic", "Asia", "Atlantic", "Australia", "Europe", "Indian", "Pacific"]

                    currentIndex: model.currentIndex
                    delegate: ItemDelegate {

                        hoverEnabled: true
                        width: parent.width
                        highlighted: ListView.isCurrentItem

                        RowLayout {
                            anchors.fill: parent

                            Label {

                                text: model.label // modelData
                                //text: modelData
                                Layout.fillHeight: true
                                Layout.fillWidth: true
                                padding: 10
                                width: parent.width
                                height: 32
                                color: highlighted ? Kirigami.Theme.highlightedTextColor : Kirigami.Theme.textColor

                                background: Rectangle {

                                    color: highlighted || hovered ? Kirigami.Theme.highlightColor : "#FFFFFF" //Kirigami.Theme.backgroundColor
                                    opacity: highlighted || hovered ? 0.5 : 0.3
                                }
                            }
                        }

                        onClicked: {

                            list1.model.currentIndex = index
                            //keyIndex = list1.model.currentLanguageCode
                            console.log("log " + Global.value("locale"))
                            stack.push(layoutsList)
                            list1.positionViewAtIndex(index, ListView.Center)
                        }
                    }
                }
                ColumnLayout {

                    spacing: 2
                    anchors.verticalCenter: parent.verticalCenter
                    anchors.verticalCenterOffset: -80
                    anchors.left: parent.left
                    anchors.leftMargin: parent.width / 15

                    Button {

                        icon.name: "view-preview"
                        text: qsTr("Preview")
                        onClicked: keyIndex = Global.value("locale")
                    }
                    Button {

                        icon.name: "go-next"
                        text: qsTr("Layouts")
                        onClicked: stack.push(layoutsList)
                    }
                }
            }

            Component {
                id: layoutsList

                Item {

                    Label {

                    id: header
                    anchors.horizontalCenter: parent.horizontalCenter
                    text: qsTr("Keyboard Layout")
                    color: Kirigami.Theme.textColor
                    font.bold: true
                    font.weight: Font.Bold
                    font.pointSize: 24
                    }

                    Label {

                        id: intro
                        anchors.horizontalCenter: parent.horizontalCenter
                        anchors.top: header.bottom
                        color: Kirigami.Theme.textColor
                        horizontalAlignment: Text.AlignHCenter
                        width: parent.width / 1.5
                        wrapMode: Text.WordWrap
                        text: config.prettyStatus
                        //text: qsTr("Set keyboard model or use the default one based on the detected hardware.")
                    }

                    ListView {

                        id: list2

                        ScrollBar.vertical: ScrollBar {

                            active: true
                        }

                        width: parent.width / 2
                        height: 200
                        anchors.top: intro.bottom
                        anchors.horizontalCenter: parent.horizontalCenter
                        anchors.topMargin: 10
                        focus: true
                        clip: true
                        boundsBehavior: Flickable.StopAtBounds
                        spacing: 2

                        Rectangle {

                            z: parent.z - 1
                            anchors.fill: parent
                            color: "#FFFFFF"
                            opacity: 0.7
                        }

                        model: config.keyboardLayoutsModel
                        //model: ["Brussels", "London", "Madrid", "New York", "Melbourne", "London", "Madrid", "New York", "Brussels", "London", "Madrid", "New York", "Brussels", "London", "Madrid", "New York"]

                        currentIndex: model.currentIndex
                        delegate: ItemDelegate {

                            hoverEnabled: true
                            width: parent.width
                            highlighted: ListView.isCurrentItem

                            RowLayout {
                            anchors.fill: parent

                                Label {

                                    id: label2
                                    text: model.label // modelData
                                    //text: modelData
                                    Layout.fillHeight: true
                                    Layout.fillWidth: true
                                    width: parent.width
                                    padding: 10
                                    height: 30
                                    color: highlighted ? Kirigami.Theme.highlightedTextColor : Kirigami.Theme.textColor

                                    background: Rectangle {

                                        color: highlighted || hovered ? Kirigami.Theme.highlightColor : "white" //Kirigami.Theme.backgroundColor
                                        opacity: highlighted || hovered ? 0.5 : 0.3
                                    }
                                }
                            }

                            onClicked: {

                                list2.model.currentIndex = index
                                keyIndex = label2.text.substring(0,6)
                                console.log("log " + label2.text.substring(0,6))
                                stack.push(variantsList)
                                list2.positionViewAtIndex(index, ListView.Center)
                            }
                        }
                    }

                    ColumnLayout {

                        spacing: 2
                        anchors.verticalCenter: parent.verticalCenter
                        anchors.verticalCenterOffset: -80
                        anchors.left: parent.left
                        anchors.leftMargin: parent.width / 15

                        Button {

                            icon.name: "go-previous"
                            text: qsTr("Models")
                            onClicked: stack.pop()
                        }

                        Button {

                            icon.name: "go-next"
                            text: qsTr("Variants")
                            onClicked: stack.push(variantsList)
                        }
                    }
                }
            }

            Component {
                id: variantsList

                Item {

                    Label {

                        id: header
                        anchors.horizontalCenter: parent.horizontalCenter
                        text: qsTr("Keyboard Variant")
                        color: Kirigami.Theme.textColor
                        font.bold: true
                        font.weight: Font.Bold
                        font.pointSize: 24
                    }

                    Label {

                        id: intro
                        anchors.horizontalCenter: parent.horizontalCenter
                        anchors.top: header.bottom
                        color: Kirigami.Theme.textColor
                        horizontalAlignment: Text.AlignHCenter
                        width: parent.width / 1.5
                        wrapMode: Text.WordWrap
                        text: config.prettyStatus
                        //text: qsTr("Variant keyboard model or use the default one based on the detected hardware.")
                    }

                    ListView {

                        id: list3

                        ScrollBar.vertical: ScrollBar {

                            active: true
                        }

                        width: parent.width / 2
                        height: 200
                        anchors.top: intro.bottom
                        anchors.horizontalCenter: parent.horizontalCenter
                        anchors.topMargin: 10
                        focus: true
                        clip: true
                        boundsBehavior: Flickable.StopAtBounds
                        spacing: 2

                        Rectangle {

                            z: parent.z - 1
                            anchors.fill: parent
                            color: "#FFFFFF"
                            opacity: 0.7
                        }

                        model: config.keyboardVariantsModel
                        //model: ["Brussels", "London", "Madrid", "New York", "Melbourne", "London", "Madrid", "New York", "Brussels", "London", "Madrid", "New York", "Brussels", "London", "Madrid", "New York"]

                        currentIndex: model.currentIndex
                        delegate: ItemDelegate {

                            hoverEnabled: true
                            width: parent.width
                            highlighted: ListView.isCurrentItem

                            RowLayout {
                            anchors.fill: parent

                                Label {

                                    text: model.label //modelData
                                    //text: modelData
                                    Layout.fillHeight: true
                                    Layout.fillWidth: true
                                    padding: 10
                                    width: parent.width
                                    height: 30
                                    color: highlighted ? Kirigami.Theme.highlightedTextColor : Kirigami.Theme.textColor

                                    background: Rectangle {

                                        color: highlighted || hovered ? Kirigami.Theme.highlightColor : "#FFFFFF" //Kirigami.Theme.backgroundColor
                                        opacity: highlighted || hovered ? 0.5 : 0.3
                                    }
                                }
                            }

                            onClicked: {

                                list3.model.currentIndex = index
                                list3.positionViewAtIndex(index, ListView.Center)
                            }
                        }
                    }

                    Button {

                        Layout.fillWidth: true
                        anchors.verticalCenter: parent.verticalCenter
                        anchors.verticalCenterOffset: -80
                        anchors.left: parent.left
                        anchors.leftMargin: parent.width / 15
                        icon.name: "go-previous"
                        text: qsTr("Layouts")
                        onClicked: stack.pop()
                    }
                }
            }
        }

        TextField {

            id: textInput
            placeholderText: qsTr("Test your keyboard")
            height: 36
            width: parent.width / 1.5
            horizontalAlignment: TextInput.AlignHCenter
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.bottom: keyboard.top
            anchors.bottomMargin: parent.height / 25
            color: "#121212"

            background:Rectangle {

                z: parent.z - 1
                anchors.fill: parent
                color: "#f8f8f8"
                radius: 2
                //opacity: 0.3
            }
        }

        Keyboard {
            id: keyboard
            width: parent.width
            height: parent.height / 3
            anchors.bottom: parent.bottom
            source: langXml.includes(keyIndex) ? (keyIndex + ".xml") :
                afganiXml.includes(keyIndex) ? "afgani.xml" :
                scanXml.includes(keyIndex) ? "scan.xml" :
                genericXml.includes(keyIndex) ? "generic.xml" :
                generic_qzXml.includes(keyIndex) ? "generic.xml" :
                arXml.includes(keyIndex) ? "ar.xml" :
                deXml.includes(keyIndex) ? "de.xml" :
                enXml.includes(keyIndex) ? "en.xml" :
                esXml.includes(keyIndex) ? "es.xml" :
                frXml.includes(keyIndex) ? "fr.xml" :
                ptXml.includes(keyIndex) ? "pt.xml" :
                ruXml.includes(keyIndex) ? "ru.xml" :"empty.xml"
            rows: 4
            columns: 10
            keyColor: "transparent"
            keyPressedColorOpacity: 0.2
            keyImageLeft: "button_bkg_left.png"
            keyImageRight: "button_bkg_right.png"
            keyImageCenter: "button_bkg_center.png"
            target: textInput
            onEnterClicked: console.log("Enter!")
        }
    }
}
