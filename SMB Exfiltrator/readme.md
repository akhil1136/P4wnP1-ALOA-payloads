
# Faster SMB Exfiltrator


## Description

Exfiltrates select files from users's documents folder via SMB.
Liberated documents will reside in PWNPI loot directory under loot/smb_exfiltrator/HOSTNAME/DATE_TIME

Rewrite of the original SMB Exfiltrator payload with:
* Faster copying, using robocopy multithreaded mode
* Faster finish, using a EXFILTRATION_COMPLETE file
* Offload logic to target PC for accurate date/time
* Clears tracks by default without second run dialog
* Test-Connection handling by ICMP (no lame sleeps)
* Hidden powershell window by default

## REQUIREMENTS
# ============
 Needs impacket to be copied to /tools/impacket and installed
# Option A:
   1. Download impacket from https://github.com/CoreSecurity/impacket
   2. Copy impacket folder to /tools on the PWNPI root drive
   3. goto cd impacket/
  4. install "python setup.py install"

## Configuration
  1.create folder root mkdir /Data give full permissions chmod +x /Data
  2.goto impacket/examples run this command  "./smbserver.py -comment 'My share' -username any -password any -smb2support Data /Datasmbserver.py -comment 'My share' -username any -password any -smb2support Data /Data" 
  Configured to copy .docx files by default. Change $exfil_ext in s.ps1 to desired.



## i'm not responsible on usage you do with it this is for eduational purpose only

## remember all my payloads are in US kerboard layout
