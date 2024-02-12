var ARR = [] ;
var Name = document.getElementById("name") ;
var email = document.getElementById("email") ;
var password = document.getElementById("password") ;
if(localStorage.getItem("Account") !=null){
    ARR = JSON.parse(localStorage.getItem("Account")) ;
}

function signUp(){
    var Person ={
        name : "" ,
        email : "" ,
        password : "" ,
    }
    Person.name = Name.value ;
    Person.email = email.value ;
    Person.password = password.value ;
    if(validation(Name.value , email.value , password.value)) {
        if(ARR.length > 0 ){
            for (var i = 0 ; i < ARR.length ; i++){
                if(ARR[i].email == email.value ){
                    document.querySelector(".layer_invalied").classList.replace("d-none" , "d-flex") ;
                    console.log("Founded") ;
                    return ;
                }
            }

                    ARR.push(Person) ;
                    localStorage.setItem("Account" , JSON.stringify(ARR))
                    Name.value = "" ;
                    email.value = "" ;
                    password.value = "" ;
                    console.log(ARR[0].name)
                
            
        }
        else{
            ARR.push(Person) ;
            localStorage.setItem("Account" , JSON.stringify(ARR)) 
            Name.value = "" ;
            email.value = "" ;
            password.value = "" ;
        }
    }
     
}

var button = document.getElementById("button") ;
button.addEventListener("click" , function(e){
    signUp() ;
  e.stopPropagation() ;  
})


document.querySelector(".close").addEventListener("dblclick" , function(e){
    document.querySelector(".layer_invalied").classList.replace("d-flex" , "d-none") ;
    // e.stopPropagation() ;  
})

document.querySelector(".close").addEventListener("mouseenter" , function(e){
    document.querySelector(".close").classList.replace("text-black" , "text-danger") ;
    // e.stopPropagation() ;  
})
document.querySelector(".close").addEventListener("mouseleave" , function(e){
    document.querySelector(".close").classList.replace("text-danger" , "text-black") ;
    // e.stopPropagation() ;  
})


document.addEventListener("click" , function(e){
    document.querySelector(".layer_invalied").classList.replace("d-flex" , "d-none") ;
    


    // e.stopPropagation() ;    
})

document.getElementById("name").addEventListener("input" , function(e){
    document.getElementById("name").classList.remove("is-invalid")
    document.getElementById("name").placeholder= "Enter Your Name";
    e.stopPropagation() ;
})
document.getElementById("email").addEventListener("input" , function(e){
    document.getElementById("email").classList.remove("is-invalid")
    document.getElementById("email").placeholder= "Enter Your Email";
    e.stopPropagation() ;
})
document.getElementById("password").addEventListener("input",function(e){
    document.getElementById("password").classList.remove("is-invalid")
    document.getElementById("password").placeholder= "Enter Your password";
    e.stopPropagation() ;
})

var regaexName = /^((([a-z])|([A-Z])){3,}\s?)+$/ ;
var regaxMail = /^(([a-z]|[A-Z]){3,}_?)*\d*@gmail\.com$/ ;

function validation(x , y , z){
    if(regaexName.test(x) && regaxMail.test(y) && z.length >=5){
        return true ;
    }
    else if(regaexName.test(x) && z.length >=5 &&  !regaxMail.test(y)){
        document.getElementById("email").value = "" ;
        document.getElementById("email").placeholder= "Your Email Must be like that www. a to z or A to Z _ or NO number or No  @gmail.com";
        document.getElementById("email").classList.add("is-invalid")
        return false
    }
    else if(!regaexName.test(x) && z.length >=5 && regaxMail.test(y)){
        document.getElementById("name").value = "" ;
        document.getElementById("name").placeholder= "Your must be dont't have anu special character and two spaces";
        document.getElementById("name").classList.add("is-invalid")
        return false
    }
    else if(regaexName.test(x) && z.length<5 && regaxMail.test(y)){
        document.getElementById("password").value = "" ;
        document.getElementById("password").placeholder= "More than 5 Character";
        document.getElementById("password").classList.add("is-invalid")
        return false
    }
    else if(!regaexName.test(x) && z.length >=5 &&  !regaxMail.test(y)){
        document.getElementById("email").value = "" ;
        document.getElementById("email").placeholder= "Your Email Must be like that www. a to z or A to Z _ or NO number or No  @gmail.com";
        document.getElementById("email").classList.add("is-invalid")
        document.getElementById("name").value = "" ;
        document.getElementById("name").placeholder= "Your must be dont't have anu special character and two spaces";
        document.getElementById("name").classList.add("is-invalid")
        return false
    }
    else if(!regaexName.test(x) && z.length <5 &&  regaxMail.test(y)){
        document.getElementById("name").value = "" ;
        document.getElementById("name").placeholder= "Your must be dont't have anu special character and two spaces";
        document.getElementById("name").classList.add("is-invalid")
        document.getElementById("password").value = "" ;
        document.getElementById("password").placeholder= "More than 5 Character";
        document.getElementById("password").classList.add("is-invalid")
        return false
    }
    else if(regaexName.test(x) && z.length < 5 &&  !regaxMail.test(y)){
        document.getElementById("email").value = "" ;
        document.getElementById("email").placeholder= "Your Email Must be like that www. a to z or A to Z _ or NO number or No  @gmail.com";
        document.getElementById("email").classList.add("is-invalid")
        document.getElementById("password").value = "" ;
        document.getElementById("password").placeholder= "More than 5 Character";
        document.getElementById("password").classList.add("is-invalid")
        return false
    }

    else{
        document.getElementById("email").value = "" ;
        document.getElementById("email").placeholder= "Your Email Must be like that www. a to z or A to Z _ or NO number or No  @gmail.com";
        document.getElementById("email").classList.add("is-invalid")
        document.getElementById("name").value = "" ;
        document.getElementById("name").placeholder= "Your must be dont't have anu special character and two spaces";
        document.getElementById("name").classList.add("is-invalid") 
        document.getElementById("password").value = "" ;
        document.getElementById("password").placeholder= "More than 5 Character";
        document.getElementById("password").classList.add("is-invalid")
        return false
    }
}

