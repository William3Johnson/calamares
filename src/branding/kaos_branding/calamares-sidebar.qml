/* Sample of QML progress tree.

   SPDX-FileCopyrightText: 2020 Adriaan de Groot <groot@kde.org>
   SPDX-FileCopyrightText: 2021 - 2022 Anke Boersma <demm@kaosx.us>
   SPDX-License-Identifier: GPL-3.0-or-later


   The progress tree (actually a list) is generally "vertical" in layout,
   with the steps going "down", but it could also be a more compact
   horizontal layout with suitable branding settings.

   This example emulates the layout and size of the widgets progress tree.
*/
import io.calamares.ui 1.0
import io.calamares.core 1.0

import QtQuick 2.3
import QtQuick.Layouts 1.3
import QtQuick.Controls 2.15

Rectangle {
    id: sideBar;
    color: Branding.styleString( Branding.SidebarBackground );
    anchors.fill: parent;

    //Needs to come from /calamares/src/calamares/CalamaresWindow.cpp ?
    //property var debugModel: true

    ColumnLayout {
        anchors.fill: parent;
        spacing: 0;

        Image {
            Layout.topMargin: 12;
            Layout.bottomMargin: 12;
            Layout.alignment: Qt.AlignHCenter | Qt.AlignTop
            id: logo;
            width: 80;
            height: width;  // square
            source: "file:/" + Branding.imagePath(Branding.ProductLogo);
            sourceSize.width: width;
            sourceSize.height: height;
        }

        Repeater {
            model: ViewManager
            Rectangle {
                Layout.leftMargin: 0;
                Layout.fillWidth: true;
                height: 35;
                radius: 0;
                color: Branding.styleString( index == ViewManager.currentStepIndex ? Branding.SidebarBackgroundCurrent : Branding.SidebarBackground );

                Image {
                    source: "angle.svg"
                    id: image
                    anchors.verticalCenter: parent.verticalCenter;
                    x: parent.x + 5;
                    fillMode: Image.PreserveAspectFit
                    height: 22
                    visible: index == ViewManager.currentStepIndex ? true : false
                }

                Text {
                    anchors.verticalCenter: parent.verticalCenter;
                    anchors.horizontalCenter: parent.horizontalCenter
                    x: parent.x + 12;
                    color: Branding.styleString( index == ViewManager.currentStepIndex ? Branding.SidebarTextCurrent : Branding.SidebarText );
                    text: display;
                    font.pointSize : 14
                }
            }
        }

        Item {
            Layout.fillHeight: true;
        }

        Rectangle {
            id: debugArea
            Layout.fillWidth: true;
            height: 35
            Layout.alignment: Qt.AlignHCenter | Qt.AlignBottom
            color: Branding.styleString( mouseAreaDebug.containsMouse ? Branding.SidebarBackgroundCurrent : Branding.SidebarBackground);
            visible: debug.enabled

            MouseArea {
                id: mouseAreaDebug
                anchors.fill: parent;
                cursorShape: Qt.PointingHandCursor
                hoverEnabled: true
                Text {
                    anchors.centerIn: parent
                    text: qsTr("Show debug information")
                    color: Branding.styleString( mouseAreaDebug.containsMouse ? Branding.SidebarTextCurrent : Branding.SidebarBackground );
                    font.pointSize : 9
                }

                onClicked: debug.toggle()
            }
        }

        Rectangle {
            id: aboutArea
            Layout.fillWidth: true;
            height: 35
            Layout.alignment: Qt.AlignHCenter | Qt.AlignBottom
            color: Branding.styleString( mouseAreaAbout.containsMouse ? Branding.SidebarBackgroundCurrent : Branding.SidebarBackground);
            visible: true

            MouseArea {
                id: mouseAreaAbout
                anchors.fill: parent;
                cursorShape: Qt.PointingHandCursor
                hoverEnabled: true
                Text {
                    anchors.centerIn: parent
                    text: qsTr("About")
                    ToolTip {
                        visible: mouseAreaAbout.containsMouse
                        delay: 1000
                        text: qsTr("Show information about Calamares")
                    }
                    color: Branding.styleString( mouseAreaAbout.containsMouse ? Branding.SidebarTextCurrent : Branding.SidebarText );
                    font.pointSize : 9
                }

                property variant window;
                onClicked: {
                    var component = Qt.createComponent("about.qml");
                    window = component.createObject();
                    window.show();
                }
            }
        }
    }
}
