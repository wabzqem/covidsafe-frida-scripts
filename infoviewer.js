function launchInfoViewController() {
    ObjC.schedule(ObjC.mainQueue, function() {
        var application = ObjC.classes.UIApplication.sharedApplication();
        var viewController = application.keyWindow().rootViewController();
        viewController.presentedViewController().performSegueWithIdentifier_sender_("HomeToDebugSegue", NULL);
  });
}

// Sloppy and good enough. Wait for the Main VC to be presented.
setTimeout(launchInfoViewController, 7000);
