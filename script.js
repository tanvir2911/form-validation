function validate(){
    let usrname =  document.getElementById("usrname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let pass2 = document.getElementById("pass-confirm").value;
    let dis= document.getElementById("description").value;
    let subject= document.querySelector("input[name='subject']:checked");
    let education= document.querySelector("input[type='checkbox']:checked");
    let file = document.getElementById("file").value;

    if(!usrname){
        showMessage("user-validate");
        return false;
    }
    else{
        hideMessage("user-validate");
    }
    if(!email){
        showMessage("email-validate");
        return false;
    }
    else{
        hideMessage("email-validate");
    }
    if(!pass){
        showMessage("password-validate");
        return false;
    }
    else{
        if(!(pass.length<=16 && pass.length>=8)){
            document.getElementById("password-validate").innerHTML = "Password Must be between 8 and 16 characters long";
            showMessage("password-validate");
            return false;
        }
        else{
            hideMessage("password-validate");
        }
    }
    if(!pass2){
        showMessage("password-confirmation-validate");
        return false;
    }
    else{
        if(pass!==pass2){
            document.getElementById("password-confirmation-validate").innerHTML = "Password did not match";
            showMessage("password-confirmation-validate");
            return false;
        }
        else{
            hideMessage("password-confirmation-validate");
        }
    }
    if(!dis){
        showMessage("description-validate");
        return false;
    }
    else{
        if(dis.length<=3){
            document.getElementById("description-validate").innerHTML = "Minimum 1000 characters required";
            showMessage("description-validate");
            return false;
        }
        else{
            hideMessage("description-validate");
        }
    }
    if(!subject){
        showMessage("subject-validate");
        return false;
    }
    else{
        hideMessage("subject-validate");

    }
    if(!education){
        showMessage("education-validate");
        return false;
    }
    else{
        hideMessage("education-validate");
    }
    if(!file){
        showMessage("file-validate");
        return false;
    }
    else{
        hideMessage("file-validate");
        return false;
    }
}

function showMessage(validateId){
    document.getElementById(validateId).style.visibility = "visible";
}

function hideMessage(validateId){
    document.getElementById(validateId).style.visibility = "hidden";
}


function showPassword(){
    let showPass=document.getElementById("pass");
    let checked = document.getElementById("show-password");
    if(checked.checked==true){
        // showPass.setAttribute("type", "text");
        showPass.type="text"
    }
    else{
        showPass.type = "password";
    }
}
