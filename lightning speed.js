//lightning speed move powershell or cmd
function win10AsAdmin() {
  press("GUI"); //open search
  delay(200);
  type("powershell"); //powershell 
  delay(500); // wait for search to finish
  press("CTRL SHIFT ENTER"); //start with CTRL+SHIFT+ENTER (run as admin)
  delay(1000); //wait for confirmation dialog (no check if a password is required, assume login user is admin)
  press("SHIFT TAB"); //switch to dialog confirmation
  press("ENTER");
}
win10AsAdmin();
delay(1000);
 press("ALT SPACE m");
delay(500); 
for (var i = 0; i<100; i++){
press("down")+i
}
press("ENTER");
type("ipconfig");
press("ENTER");
delay(1000);
