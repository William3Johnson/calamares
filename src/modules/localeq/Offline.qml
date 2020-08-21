/* === This file is part of Calamares - <https://github.com/calamares> ===
 *
 *   Copyright 2020, Anke Boersma <demm@kaosx.us>
 *
 *   Calamares is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   Calamares is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with Calamares. If not, see <http://www.gnu.org/licenses/>.
 */

import io.calamares.core 1.0
import io.calamares.ui 1.0

import QtQuick 2.10
import QtQuick.Controls 2.10
import QtQuick.Window 2.14
import QtQuick.Layouts 1.3

import org.kde.kirigami 2.7 as Kirigami

Page {
    width: 800 //parent.width
    height: 500

    //property var currentTimezoneName: "America/New York"
    //property var currentTimezoneName1: "Europe/Amsterdam"
    //property var currentTimezoneName2: "Australia/Melbourn"

     StackView {
        id: stack
        anchors.fill: parent
        clip: true

        initialItem: Item {

            Label {

                id: region
                anchors.horizontalCenter: parent.horizontalCenter
                color: Kirigami.Theme.textColor
                horizontalAlignment: Text.AlignCenter
                text: qsTr("Select your preferred Region, or use the default one based on your current location.")
            }

            ListView {

                id: list
                ScrollBar.vertical: ScrollBar {
                    active: true
                }

                width: parent.width / 2
                height: 250
                anchors.centerIn: parent
                anchors.verticalCenterOffset: -30
                focus: true
                clip: true
                boundsBehavior: Flickable.StopAtBounds
                spacing: 2 //Kirigami.Units.smallSpacing

                Rectangle {

                    z: parent.z - 1
                    anchors.fill: parent
                    color: "#BDC3C7"
                    radius: 5
                    opacity: 0.7
                }

                model: config.regionModel
                //model: ["Africa", "America", "Antarctica", "Arctic", "Asia", "Atlantic", "Australia", "Europe", "Indian", "Pacific"]

                currentIndex: -1 // config.regionIndex
                highlight: Rectangle {

                    color: Kirigami.Theme.highlightColor
                }

                delegate: Label {

                    text:  name // modelData
                    Layout.fillHeight: true
                    Layout.fillWidth: true
                    width: parent.width
                    height: 24
                    color: ListView.isCurrentItem ? Kirigami.Theme.highlightedTextColor : Kirigami.Theme.textColor

                    background: Rectangle {

                        color: ListView.isCurrentItem || hovered ? Kirigami.Theme.highlightColor : Kirigami.Theme.backgroundColor
                        opacity: ListView.isCurrentItem || hovered ? 0.9 : 0.5
                    }

                    MouseArea {

                        hoverEnabled: true
                        anchors.fill: parent
                        cursorShape: Qt.PointingHandCursor
                        onClicked: {

                            list.currentIndex = index
                            tztext.text = qsTr("Timezone: %1").arg(config.currentTimezoneName)
                            //tztext.text = qsTr("Timezone: %1").arg(currentTimezoneName1)
                            stack.push(zoneView)
                        }
                    }
                }
            }
        }

        Component {
            id: zoneView

            Item {

                Label {

                    id: zone
                    anchors.horizontalCenter: parent.horizontalCenter
                    color: Kirigami.Theme.textColor
                    text: qsTr("Select your preferred Zone within your Region.")
                }

                ListView {

                    id: list2
                    ScrollBar.vertical: ScrollBar {
                        active: true
                    }

                    width: parent.width / 2
                    height: 250
                    anchors.centerIn: parent
                    anchors.verticalCenterOffset: -30
                    focus: true
                    clip: true
                    boundsBehavior: Flickable.StopAtBounds
                    spacing: 2 // Kirigami.Units.smallSpacing

                    Rectangle {

                        z: parent.z - 1
                        anchors.fill: parent
                        color: "#BDC3C7"
                        radius: 5
                        opacity: 0.7
                    }

                    model: config.regionalZonesModel
                    //model: ["Brussels", "London", "Madrid", "New York", "Melbourne", "London", "Madrid", "New York", "Brussels", "London", "Madrid", "New York", "Brussels", "London", "Madrid", "New York"]

                    currentIndex: -1 //config.zoneIndex
                    highlight: Rectangle {

                        color: Kirigami.Theme.highlightColor
                    }

                    delegate: Label {

                        text: name // modelData
                        Layout.fillHeight: true
                        Layout.fillWidth: true
                        width: parent.width
                        height: 24
                        color: ListView.isCurrentItem ? Kirigami.Theme.highlightedTextColor : Kirigami.Theme.textColor
                        background: Rectangle {

                            color: ListView.isCurrentItem || hovered ? Kirigami.Theme.highlightColor : Kirigami.Theme.backgroundColor
                            opacity: ListView.isCurrentItem || hovered ? 0.9 : 0.4
                        }

                        MouseArea {

                            hoverEnabled: true
                            anchors.fill: parent
                            cursorShape: Qt.PointingHandCursor
                            onClicked: {

                                list2.currentIndex = index
                                list2.positionViewAtIndex(index, ListView.Center)
                                //tztext.text = qsTr("Timezone: %1").arg(currentTimezoneName)
                                tztext.text = qsTr("Timezone: %1").arg(config.currentTimezoneName)
                            }
                        }
                    }
                }
                
                Button {

                    Layout.fillWidth: true
                    anchors.verticalCenter: parent.verticalCenter
                    anchors.verticalCenterOffset: -30
                    icon.name: "go-previous"
                    text: qsTr("Zones")
                    onClicked: stack.pop()
                }
            }
        }
    }

    Rectangle {

        width: parent.width
        height: 60
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.bottom: parent.bottom

        Item {

            id: location
            Kirigami.Theme.inherit: false
            Kirigami.Theme.colorSet: Kirigami.Theme.Complementary
            anchors.horizontalCenter: parent.horizontalCenter

            Rectangle {

                anchors.centerIn: parent
                width: 300
                height: 30
                color: Kirigami.Theme.backgroundColor

                Text {

                    id: tztext
                    text: qsTr("Timezone: %1").arg(config.currentTimezoneName)
                    //text: qsTr("Timezone: %1").arg(currentTimezoneName)
                    color: Kirigami.Theme.textColor
                    anchors.centerIn: parent
                }
            }
        }

        Text {

            anchors.top: location.bottom
            anchors.topMargin: 20
            padding: 10
            width: parent.width
            wrapMode: Text.WordWrap
            horizontalAlignment: Text.AlignHCenter
            Kirigami.Theme.backgroundColor: Kirigami.Theme.backgroundColor
            text: qsTr("You can fine-tune Language and Locale settings below.")
        }
    }
}
