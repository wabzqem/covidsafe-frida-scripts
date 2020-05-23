var targetModule = "COVIDSafe";
var moduleBase = Module.getBaseAddress(targetModule).sub("0x100000000");

var addr = ptr("0x1000415e4"); // Entry point for fetchTempIdFromApi
var targetAddress = moduleBase.add(addr);
Interceptor.attach(targetAddress, {
  onEnter: function (args) {
    console.log(Date());
    console.log("Fetching new tempID from API");
    console.log("\n");
    },
});

function setExpiryNow() {
  var myDate = ObjC.classes.NSDate.alloc().init();
  var userdefaults = ObjC.classes.NSUserDefaults.alloc().init();
  userdefaults.setObject_forKey_(myDate, ObjC.classes.NSString.stringWithString_('ADVT_EXPIRY'));
  console.log("Set ADVT_EXPIRY to " + myDate.toString() + "\n");
}

function printUserDefaults() {
  var userdefaults = ObjC.classes.NSUserDefaults;
  var dict = userdefaults.alloc().init().dictionaryRepresentation();
  console.log(Date());
  console.log("BROADCAST_MSG: " + dict.objectForKey_(ObjC.classes.NSString.stringWithString_('BROADCAST_MSG')).toString());
  console.log("ADVT_DATA: " + dict.objectForKey_(ObjC.classes.NSString.stringWithString_('ADVT_DATA')).toString());
  console.log("ADVT_EXPIRY: " + dict.objectForKey_(ObjC.classes.NSString.stringWithString_('ADVT_EXPIRY')).toString());
  console.log("\n");
}

setTimeout(printUserDefaults, 500);
setInterval(printUserDefaults, 1000 * 30);
setInterval(setExpiryNow, 1000 * 30);