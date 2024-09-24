var user=document.getElementById("user");
var pwd =document.getElementById("pwd");
var btn =document.getElementById("btn");
var errl=document.getElementById("errl");
function Validate()
{
    if(user.value.trim()==""|| pwd.value.trim()==""){
        alert("field cannot be empty")
        return false;
    }else if (pwd.value.length<5)
        {
           // alert("password should be greatest than 5")
            pwd.style.border="2px solid red";
            errl.textContent="password shoud be greater than 5";
        return false;
    }
    else{
        pwd.style.border="2px solid green";
        errl.textContent=""
        return true;
    }
}

