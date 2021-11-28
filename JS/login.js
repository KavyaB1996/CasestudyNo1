// var mark;

var submit = document.getElementById("sbmit");



submit.onclick = function() {validate(myfunc)};

function validate(callback)
{
    var error = document.getElementById("error");
    var username = document.getElementById("Username");
    var pwd = document.getElementById("inputPassword4");
    
     // Validation for username
     if(username.value == "")
     {
        error.innerHTML = "Username can't be empty!";
        error.style.color = "red";
        error.style.fontSize = "smaller";
        error.style.fontFamily = "Times New Roman";
     }
     else if(pwd.value == "")
     {
        error.innerHTML = "Password can't be empty!";
        error.style.color = "red";
        error.style.fontSize = "smaller";
        error.style.fontFamily = "Times New Roman";
     }
     else if(username.value == "admin" && pwd.value == "12345")
     {
         value = true;
         console.log(value);
         callback();
    }
    else
    {
        value = false;
        console.log(value);

        error.innerHTML = "Invalid LogIn Credentials";
        error.style.color = "red";
        error.style.fontSize = "smaller";
        error.style.fontFamily = "Times New Roman";
    }

 
}

function myfunc()
{  
    

       window.location.href = "../home.html";
 
}


