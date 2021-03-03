//import io.calamares.ui 1.0
//import io.calamares.core 1.0

import QtQuick 2.3
import QtQuick.Layouts 1.3

Rectangle {
    id: sideBar;
    //color: Branding.styleString( Branding.SidebarBackground );
    color: "#bdc3c7"
    width: 200
    height: 600

    //Needs to come from /calamares/src/calamares/CalamaresWindow.cpp ?
    property var debugModel: true

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
            //source: "file:/" + Branding.imagePath(Branding.ProductLogo);
            source: "file:/usr/share/calamares/branding/kaos_branding/kaos.png"
            sourceSize.width: width;
            sourceSize.height: height;
        }

        Repeater {
            //model: ViewManager
            model: ["Europe", "America", "Africa"]
            Rectangle {
                Layout.leftMargin: 0;
                width: parent.width;
                height: 35;
                radius: 0;
                //color: Branding.styleString( index == ViewManager.currentStepIndex ? Branding.SidebarTextHighlight : Branding.SidebarBackground );
                color: model == "Europe" ? "#bdc3c7" : "#eff0f1"

                Text {
                    anchors.verticalCenter: parent.verticalCenter;
                    anchors.horizontalCenter: parent.horizontalCenter
                    x: parent.x + 12;
                    //color: Branding.styleString( index == ViewManager.currentStepIndex ? Branding.SidebarTextSelect : Branding.SidebarText );
                    color: model == "Europe" ? "#1F1F1F" : "#3498DB"
                    text: modelData //display;
                    font.pointSize : 14
                }
            }
        }

        Item {
            Layout.fillHeight: true;
        }

        Rectangle {
            width: 60
            height: 30
            Layout.alignment: Qt.AlignHLeft | Qt.AlignBottom
            //color: Branding.styleString( Branding.SidebarBackground );
            color: "#bdc3c7"
            visible: debugModel ? true : false

            MouseArea {
                id: mouseArea
                anchors.fill: parent;
                cursorShape: Qt.PointingHandCursor
                hoverEnabled: true
                    Text {
                    anchors.verticalCenter: parent.verticalCenter;
                    x: parent.x + 4;
                    text: qsTr("Show debug information")
                    //color: Branding.styleString( mouseArea.containsMouse ? Branding.SidebarTextSelect : Branding.SidebarText );
                    color: "#1f1f1f"
                    font.pointSize : 9
                }

                onClicked: debugWindow
            }
        }
    }
}
