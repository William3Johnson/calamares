import QtQuick 2.10
import QtQuick.Controls 2.10
import QtQuick.Layouts 1.3
import org.kde.kirigami 2.7 as Kirigami

import org.kde.marble.private.plasma 0.20



Rectangle {
    id: screen
    width: 800
    height: 400

    PositionSource {
        id: gpsd
        active: true
    }

    // The map widget
    MarbleItem {
        id: map
        anchors.fill: parent

        property bool autoCenter: false
        readonly property double locationLongitude: geolocationDataSource.data.longitude
        radius: 200

        mapThemeId: "earth/srtm/srtm.dgml"
        //activeFloatItems: [ "compass", "scalebar", "progress" ]
        //activeRenderPlugins: [ "navigation", "scalebar" ]
        showScaleBar: true
        showClouds: true
        showGrid: true
        showCrosshairs: false
        showAtmosphere: true
        //setCenterLatitude: 35.0

        // The grouped property tracking provides access to tracking related
        // properties
        property Tracking tracking: Tracking {
            // We connect the position source from above with the map
            positionSource: gpsd
            map: map
            positionMarkerType: Tracking.Arrow
            showTrack: true
        }
    }
}
