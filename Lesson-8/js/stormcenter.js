function adjustSeverity(severity) {
    document.getElementById("stormseverity").innerHTML = severity;
}
function InvalidMsg(textbox) {

    if(textbox.validity.patternMismatch){
       textbox.setCustomValidity('Please enter your full name');
   }    
   else {
       textbox.setCustomValidity('');
   }
   return true;
}