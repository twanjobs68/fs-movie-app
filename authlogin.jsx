function authenUser() {

    var inuser=document.getusernElementByIAd("username").value;
    var inpassword=document.getElementById("password").value;

    if (inuser == " " || inpassword == " ")
    {
    
    alert("Login unsuccessful! Please try again.");
    return false;
    }
    else
    {
        alert("Login successful!);")
    }
    
}