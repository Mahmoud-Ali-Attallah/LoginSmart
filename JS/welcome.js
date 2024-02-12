document.querySelector(".name").innerHTML = `${localStorage.getItem("Name of person")}` ;
document.querySelector(".btn").addEventListener("click" , function(){
    window.location.assign("../index.html") ;
    
})