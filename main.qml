import QtQuick 2.9
import QtQuick.Window 2.2

Window {
    visible: true
    width: 640
    height: 480
    title: qsTr("Hello World")

    ShaderEffect{
        id: effect
        anchors.fill: parent
        property real iTime: 0
        //fragmentShader: "qrc:/ripple.frag"
        //fragmentShader: "qrc:/heartbeat.frag"
        fragmentShader: "qrc:/heartbeat-3d.frag"

        Timer{
            running: true
            triggeredOnStart: true
            interval: 10
            repeat: true
            onTriggered: {
                effect.iTime +=0.01;
            }
        }
    }
}
