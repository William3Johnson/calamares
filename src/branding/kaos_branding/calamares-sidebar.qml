import io.calamares.ui 1.0
import io.calamares.core 1.0

import QtQuick 2.3
import QtQuick.Layouts 1.3

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
                color: Branding.styleString( index == ViewManager.currentStepIndex ? Branding.SidebarTextHighlight : Branding.SidebarBackground );

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
                    color: Branding.styleString( index == ViewManager.currentStepIndex ? Branding.SidebarTextSelect : Branding.SidebarText );
                    text: display;
                    font.pointSize : 14
                }
            }
        }

        Item {
            Layout.fillHeight: true;
        }

        Rectangle {
            Layout.fillWidth: true;
            height: 35
            Layout.alignment: Qt.AlignHCenter | Qt.AlignBottom
            color: Branding.styleString( mouseArea.containsMouse ? Branding.SidebarTextHighlight : Branding.SidebarBackground);
            visible: showDebugWindow ? true : false

            MouseArea {
                id: mouseArea
                anchors.fill: parent;
                cursorShape: Qt.PointingHandCursor
                hoverEnabled: true
                Text {
                    anchors.verticalCenter: parent.verticalCenter;
                    x: parent.x + 4;
                    text: qsTr("Show debug information")
                    color: Branding.styleString( mouseArea.containsMouse ? Branding.SidebarTextSelect : Branding.SidebarBackground );
                    font.pointSize : 9
                }

                onClicked: debugWindow
            }
        }
    }
}
