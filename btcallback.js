var cbManager = ObjC.classes.CBCentralManager["- scanForPeripheralsWithServices:options:"];
var applicationBackground = ObjC.classes.UIApplication["- _applicationDidEnterBackground"];
var applicationForeground = ObjC.classes.UIApplication["- _sendWillEnterForegroundCallbacks"];

Interceptor.attach(cbManager.implementation, {
    onEnter: function (args) {
        console.log("\n\n" + Date());
        var message = ObjC.Object(args[2]);
        console.log("[CBCentralManager scanForPeripheralsWithServices:@\"" + message.toString().trim() + "\"]");
    }
});

Interceptor.attach(applicationBackground.implementation, {
    onEnter: function (args) {
        console.log("\n\n" + Date());
        console.log("Entered background");
    }
})

Interceptor.attach(applicationForeground.implementation, {
    onEnter: function (args) {
        console.log("\n\n" + Date());
        console.log("Entered foreground");
    }
});
