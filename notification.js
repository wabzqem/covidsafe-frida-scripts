function showNotification(title, subtitle, body) {
    var content = ObjC.classes.UNMutableNotificationContent.alloc();
    content.init();
    content.setBody_(body);
    content.setSubtitle_(subtitle);
    content.setTitle_(title);
    var trigger = ObjC.classes.UNTimeIntervalNotificationTrigger.triggerWithTimeInterval_repeats_(1, false);
    var uuid = ObjC.classes.NSUUID.alloc().init()
    var request = ObjC.classes.UNNotificationRequest.requestWithIdentifier_content_trigger_(uuid.UUIDString(), content, trigger);
    var center = ObjC.classes.UNUserNotificationCenter.currentNotificationCenter();
    center.addNotificationRequest_(request);
}

function setup() {
    var centralController = ObjC.classes["COVIDSafe.CentralController"];
    var delegate = centralController["- centralManager:didDiscoverPeripheral:advertisementData:RSSI:"];
    Interceptor.attach(delegate.implementation, {
        onEnter: function (args) {
            var RSSI = ObjC.Object(args[5]);
            var advertisementData = ObjC.Object(args[4]);
            var peripheral = ObjC.Object(args[3]);
            var identifier = peripheral.identifier().toString();
            var name = advertisementData.kCBAdvDataLocalName || peripheral.name() ? peripheral.name().toString() : "Unknown";
            showNotification("Device found: " + name, "Identifier: " + identifier.substr(0, 8) + "...", "RSSI: " + RSSI.toString());
        }
    });
    console.log("All set up");
}

setTimeout(setup, 500);
