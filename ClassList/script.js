const myButton = document.getElementById("myButton");

/* ADD

myButton.classList.add("enabled")
myButton.classList.remove("enabled")

*/

/* TOGGLE

myButton.addEventListener("mouseover",event =>{
    event.target.classList.toggle("enabled")
})
myButton.addEventListener("mouseout",event =>{
    event.target.classList.toggle("enabled")
})

*/

/*REPLACE(OLDCLASS,NEWCLASS) & CONTAINS

myButton.classList.add("enabled");

myButton.addEventListener("click",event =>{
    if(myButton.classList.contains("disabled")){
        myButton.textContent="ouch"
    }
    else{
        myButton.classList.replace("enabled","disabled")
    }
})

*/


