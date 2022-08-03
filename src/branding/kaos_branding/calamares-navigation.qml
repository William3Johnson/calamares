/* Sample of QML navigation.

   SPDX-FileCopyrightText: 2020 Adriaan de Groot <groot@kde.org>
   SPDX-FileCopyrightText: 2021 - 2022 Anke Boersma <demm@kaosx.us>
   SPDX-License-Identifier: GPL-3.0-or-later


   The navigation panel is generally "horizontal" in layout, with
   buttons for next and previous; this particular one copies
   the layout and size of the widgets panel.
*/
import io.calamares.ui 1.0
import io.calamares.core 1.0

import QtQuick 2.3
import QtQuick.Controls 2.10
import QtQuick.Layouts 1.3

Rectangle {
    id: navigationBar;
    color: Branding.styleString( Branding.SidebarBackground );
    height: parent.height;
    width:80;

    ColumnLayout {
        id: buttonBar
        anchors.fill: parent;
        spacing: 2

        Image {
            Layout.topMargin: 1;
            Layout.bottomMargin: 0;
            Layout.alignment: Qt.AlignHCenter | Qt.AlignTop
            id: logo;
            width: 70;
            height: width;  // square
            source: "file:/" + Branding.imagePath(Branding.ProductLogo);
            sourceSize.width: width;
            sourceSize.height: height;
        }

        RoundButton
        {
            Layout.topMargin: 45 * buttonBar.spacing;
            //text: ViewManager.backLabel;
            icon.name: "pan-start-symbolic" //ViewManager.backIcon;
            Layout.alignment: Qt.AlignCenter;

            ToolTip.visible: hovered
            ToolTip.timeout: 5000
            ToolTip.delay: 1000
            ToolTip.text: "Back";

            enabled: ViewManager.backEnabled;
            visible: ViewManager.backAndNextVisible;
            onClicked: { ViewManager.back(); }
        }
        RoundButton
        {
            //text: ViewManager.nextLabel;
            icon.name: "pan-end-symbolic" // ViewManager.nextIcon;
            Layout.alignment: Qt.AlignCenter;

            ToolTip.visible: hovered
            ToolTip.timeout: 5000
            ToolTip.delay: 1000
            ToolTip.text: "Next";

            enabled: ViewManager.nextEnabled;
            visible: ViewManager.backAndNextVisible;
            highlighted: true
            onClicked: { ViewManager.next(); }
            // This margin goes in the "next" button, because the "quit"
            // button can vanish and we want to keep the margin to
            // the next-thing-in-the-navigation-panel around.
            Layout.topMargin: 40 * buttonBar.spacing;
        }
        RoundButton
        {
            Layout.topMargin: 40 * buttonBar.spacing
            //text: ViewManager.quitLabel;
            icon.name: "dialog-cancel" // ViewManager.quitIcon;
            Layout.alignment: Qt.AlignCenter;

            ToolTip.visible: hovered
            ToolTip.timeout: 5000
            ToolTip.delay: 1000
            ToolTip.text: ViewManager.quitTooltip;

            /*
             * The ViewManager has settings -- user-controlled via the
             * branding component, and party based on program state --
             * whether the quit button should be enabled and visible.
             *
             * QML navigation *should* follow this pattern, but can also
             * add other qualifications. For instance, you may have a
             * "finished" module that handles quit in its own way, and
             * want to hide the quit button then. The ViewManager has a
             * current step and a total count, so compare them:
             *
             * visible: ViewManager.quitVisible && ( ViewManager.currentStepIndex < ViewManager.rowCount()-1);
             */
            enabled: ViewManager.quitEnabled;
            visible: ViewManager.quitVisible && ( ViewManager.currentStepIndex < ViewManager.rowCount()-1);
            onClicked: { ViewManager.quit(); }
        }
        Item
        {
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
                    text: qsTr("Debug")
                    color: Branding.styleString( mouseAreaDebug.containsMouse ? Branding.SidebarTextCurrent : Branding.SidebarBackground );
                    font.pointSize : 8
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
                        text: qsTr("Info about Calamares")
                    }
                    color: Branding.styleString( mouseAreaAbout.containsMouse ? Branding.SidebarTextCurrent : Branding.SidebarBackgroundCurrent );
                    font.pointSize : 8
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
