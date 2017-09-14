function email_verify() {
    var addressIsLegal = true;
    var email = 
document.getElementById("address").value;
    if(email.indexOf(" ") !== -1) {
        addressIsLegal = false;
    }
    if(email.indexOf("@") < 1 || email.indexOf("@")email.length - 5) {
        addressIsLegal = false;
    }
    if (addressIsLegal === false){
        alert("Please enter a valid email address");
        return false;
    }
    }

function radio_verify() {
    var radios = document.getElementsByName("gender");
    for(var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    alert("Please choose a gender option");
    return false;
}