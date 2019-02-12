
# Faster SMB Exfiltrator


## Description

Exfiltrates select files from users's documents folder via SMB.
Liberated documents will reside in PWNPI loot directory under /Data/HOSTNAME/DATE_TIME

* Faster copying, using robocopy multithreaded mode
* Faster finish, using a EXFILTRATION_COMPLETE file
* Offload logic to target PC for accurate date/time
* Clears tracks by default without second run dialog
* Hidden powershell window by default

## REQUIREMENTS

   1. Download impacket from https://github.com/CoreSecurity/impacket
   2. goto cd impacket/
   3. install "python setup.py install"

## Configuration
   1.create folder root directory mkdir /Data give full permissions chmod +x /Data

   2.goto impacket/examples run this command  "./smbserver.py -comment 'My share' -username any -password any -smb2support Data    /Datasmbserver.py -comment 'My share' -username any -password any -smb2support Data /Data" 

   3.Configured to copy .docx files by default. Change $exfil_ext in s.ps1 to desired.



## i'm not responsible on usage you do with it this is for eduational purpose only

## remember all my payloads are in US kerboard layout
