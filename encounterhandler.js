var targetModule = "COVIDSafe";
var moduleBase = Module.getBaseAddress(targetModule).sub('0x100000000');;
var addr = ptr('0x100040f6c');
var targetAddress = moduleBase.add(addr);
console.log(Instruction.parse(ptr(targetAddress)).toString());
Interceptor.attach(targetAddress, {
  onEnter: function (args) {
    console.log("getAdvertisementPayload");
  },
});

addr = ptr('0x10004077c');
targetAddress = moduleBase.add(addr);
Interceptor.attach(targetAddress, {
  onEnter: function (args) {
    console.log("getTempId");
  },
});

addr = ptr('0x1000415e4');
targetAddress = moduleBase.add(addr);
Interceptor.attach(targetAddress, {
  onEnter: function (args) {
    console.log("fetchTempIdFromApi");
  },
});

addr = ptr('0x100040248');
targetAddress = moduleBase.add(addr);
Interceptor.attach(targetAddress, {
  onEnter: function (args) {
    console.log("setup");
  },
});
