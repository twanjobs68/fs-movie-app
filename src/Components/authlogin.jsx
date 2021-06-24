function authenUser() {

    var inuser=document.getusernElementById("username").value;
    var inpassword=document.getElementById("password").value;

    if (inuser == "twan" && inpassword == "mine3")
    {
    
    alert("Login Successful! ");
    <Searchapi/>
    return false;

    }
    else
    {
        alert("Login Unsuccessful! Please try again. ");
    }

    inuser = " ";
    inpassword = "";
    
}