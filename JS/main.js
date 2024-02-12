var ARR = [] ;
if(localStorage.getItem("Account") !=null){
    ARR = JSON.parse(localStorage.getItem("Account")) ;
}

var email = document.querySelector(".email") ;
var password = document.querySelector(".password") ;
function login(){
    if(ARR.length > 0 ) {
        for(var i =0 ; i<ARR.length ; i++ ){
            if(email.value == ARR[i].email && password.value == ARR[i].password){
                localStorage.setItem("Name of person" , `${ARR[i].name}`)
               window.location.assign("../HTML/index.html") ;
                email.value = "" ;
                password.value = "" ;
                return ;
            }
        }
        document.querySelector(".layer_invalied").classList.replace("d-none" , "d-flex") ;
        document.querySelector(".paragraph").innerHTML = "invalied Email" ;
        password.value = ""
        email.value = "" ;
        return ;
                
           
    }

    else{
        document.querySelector(".layer_invalied").classList.replace("d-none" , "d-flex") ;
        document.querySelector(".paragraph").innerHTML = "invalied Email" ;
        password.value = ""
        email.value = "" ;
    }


}
var buuton = document.getElementById("button") ;
buuton.addEventListener("click" , function(e){
    login();
    e.stopPropagation() ;  

})
window.addEventListener("click" , function(e){
    document.querySelector(".layer_invalied").classList.replace("d-flex" , "d-none") ;
    e.stopPropagation() ;  
})
document.querySelector(".close").addEventListener("click" , function(e){
    document.querySelector(".layer_invalied").classList.replace("d-flex" , "d-none") ;
    e.stopPropagation() ;  
})

document.querySelector(".close").addEventListener("mouseenter" , function(e){
    document.querySelector(".close").classList.replace("text-black" , "text-danger") ;
    e.stopPropagation() ;  
})
document.querySelector(".close").addEventListener("mouseleave" , function(e){
    document.querySelector(".close").classList.replace("text-danger" , "text-black") ;
    e.stopPropagation() ;  
})