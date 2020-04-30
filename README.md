### What

#### infoviewer.js
This script launches the InfoViewController from the COVIDSafe app (and probably other versions derived from OpenTrace) in order to see debug information.


### Usage:
Plug your jailbroken device with Frida on it via USB and:

`frida -U --no-pause -l infoviewer.js -f au.gov.health.covidsafe`
