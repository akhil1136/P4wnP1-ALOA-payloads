# SmartFileExtract Exfiltrator
Method of calling SmartFileExtractor is based on the excellent work of IMcPwn: the ExecutableInstaller.

The default payload included in this distribution:
- Looks to Forensics like a Lexar drive
- Finds all files with a) the word secret or pass in the filename as well as b) any DOCX files
- Reports status as a fake install window
- Stops extract after 90 seconds or 500 MBs

SmartFileExtract has full documentation on how to use the utility, but if you want to kick the tires and light the fires, run:
smartfileextract /help

Setup:
- Download the SmartFileExtract utility from https://github.com/saintcrossbow/SmartFileExtract
* Quick tip: you only need the SmartFileExtract.exe from the project 'P4AWNP1'\SmartFile


## File Extensions

     1 *.DOC and .DOCX    Microsoft Word documents. 
     2 *.PDF              PDF files
     3 *.XLS and .XLSX    Microsoft Excel
     4 *.PPT and .PPTX    Microsoft PowerPoint


![](./demo.gif)
