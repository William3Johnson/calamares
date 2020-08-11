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

Column {
    width: parent.width

    //property var currentTimezoneName: "America/New York"
    //property var currentTimezoneName1: "Europe/Amsterdam"
    //property var currentTimezoneName2: "Australia/Melbourn"

    Label {

        Layout.fillWidth: true
        height: 50
        anchors.horizontalCenter: parent.horizontalCenter
        color: Kirigami.Theme.textColor
        font.weight: Font.Medium
        font.pointSize: 10
        wrapMode: Text.WordWrap
        text: qsTr("Select your preferred Region and add the preferred Zone, or use the default one based on your current location.")
    }
    
    Rectangle {
        width: parent.width
        height: parent.height / 1.6

        RowLayout{
            anchors.fill: parent
            anchors.leftMargin: 20
            anchors.rightMargin: 20
            spacing: 20

            Rectangle {
                id: rect1
                width: parent.width / 3
                height: 300
                color: "#F5F5F5"
                Layout.fillWidth: true
                Layout.alignment : Qt.AlignTop

                    Label {
                        id: region
                        width: rect1.width
                        anchors.horizontalCenter: parent.horizontalCenter
                        background: Rectangle {
                            color: "#31363B"
                        }
                        color: "#F5F5F5"
                        horizontalAlignment: Text.AlignCenter
                        text: qsTr("REGION")
                    }

                    ListView {
                        id: list
                        ScrollBar.vertical: ScrollBar {
                        active: true
                        }
                        width: parent.width
                        height: 230
                        anchors.top: region.bottom
                        focus: true
                        clip: true

                        model: config.regionModel
                        //model: ["Africa", "America", "Antarctica", "Arctic", "Asia", "Atlantic", "Australia", "Europe", "Indian", "Pacific"]

                        currentIndex: config.regionIndex
                        highlight: Rectangle {
                            color: Kirigami.Theme.highlightColor
                        }
                        delegate: Text {
                            text: name

                            MouseArea {
                                hoverEnabled: true
                                anchors.fill: parent
                                cursorShape: Qt.PointingHandCursor
                                onClicked: {
                                    list.currentIndex = index
                                    tztext.text = qsTr("Timezone: %1").arg(config.currentTimezoneName)
                                }
                            }
                        }
                    }

            }
            
            Rectangle {
                id: rect2
                width: parent.width / 3
                height: 300
                color: "#F5F5F5"
                Layout.fillWidth: true
                Layout.alignment : Qt.AlignTop

                    Label {
                        id: zone
                        width: rect2.width
                        background: Rectangle {
                            color: "#31363B"
                        }
                        color: "#F5F5F5"
                        text: qsTr("ZONE ")
                    }

                    ListView {
                        id: list2
                        ScrollBar.vertical: ScrollBar {
                        active: true
                        }
                        width: parent.width
                        height: 230
                        anchors.top: zone.bottom
                        focus: true
                        clip: true

                        model: config.regionalZonesModel
                        //model: ["Brussels", "London", "Madrid", "New York", "Melbourne", "London", "Madrid", "New York", "Brussels", "London", "Madrid", "New York", "Brussels", "London", "Madrid", "New York"]

                        currentIndex: config.zoneIndex
                        highlight: Rectangle {
                            color: Kirigami.Theme.highlightColor
                        }
                        delegate: Text {
                            text: name

                            MouseArea {
                                hoverEnabled: true
                                anchors.fill: parent
                                cursorShape: Qt.PointingHandCursor
                                onClicked: {
                                    list2.currentIndex = index
                                    tztext.text = qsTr("Timezone: %1").arg(config.currentTimezoneName)
                                }
                            }
                        }
                    }
            }
        }
    }

    Rectangle {
        width: parent.width
        height: 100
        anchors.horizontalCenter: parent.horizontalCenter

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
