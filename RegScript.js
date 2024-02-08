let username =document.getElementById("un") ;
let password1=document.getElementById("pwd1") ;
let password2= document.getElementById("pwd2") ;
let phone = document.getElementById("phone") ;
let email = document.getElementById("eml") ;

let loginbtn=document.getElementById("login")

function registration()
{
    let un = username.value ;
    let pwd1 = password1.value ;
    let pwd2 = password2.value ;
    let phn = phone.value ;
    let eml = email.value ;

    if((un =="")&&(pwd1 =="")&&(pwd2 =="")&&(phn =="")&&(eml ==""))
    {
        alert("ALL FEILDS ARE REQUIRED") ;
    }
    else if(pwd1 === pwd2 )
    {
        let userData =new regData(un , pwd1 ,phn ,eml) ;
        localStorage.setItem("userdetails" ,JSON.stringify(userData)) ;
        alert("REGISTRATION SUCCESSFULLY") ;
        open("Login.html" ,"_self") ;
        

    }
    else{
        alert("PASSWORD DOES NOT MATCH") ;
    }
        username.value="" ;
        password1.value="" ;
        password2.value="" ;  
        phone.value="" ;
        email.value= "" ;

}

function regData(un,pass,phn,eml)
{
    this.un=un ;
    this.pass =pass ;
    this.phn =phn ;
    this.eml=eml ;

}
loginbtn.addEventListener("click" ,
 function()
 {
    open('Login.html','_blank') ;
 }
) ;

        