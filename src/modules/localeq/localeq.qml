import io.calamares.core 1.0
import io.calamares.ui 1.0

import QtQuick 2.10
import QtQuick.Controls 2.10
import QtQuick.Layouts 1.3
import org.kde.kirigami 2.7 as Kirigami
import QtGraphicalEffects 1.0

RowLayout
{
    Rectangle {
        width: parent.width / 3
        Layout.fillWidth: true
        ColumnLayout {
            id: regions
            Repeater {
                //model: config.regionModel
                model: ["apples", "oranges", "pears"]
                //Text { text: "Data: " + modelData }
            }
        }
    }
    Rectangle {
        width: parent.width / 3
        Layout.fillWidth: true
        ColumnLayout {
            id: zones
            ComboBox {
                model: config.zonesModel
                textRole: "zones"
                //model: ["car", "bike", "plane"]
                Text { 
                    id: data
                    text: "Data: " + modelData 
                    textRole: "data"
                }
                
            }
        }
    }
}

