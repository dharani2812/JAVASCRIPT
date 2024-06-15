const checkbtn=document.getElementById("checkbtn");
const radiobtn1=document.getElementById("radiobtn1");
const radiobtn2=document.getElementById("radiobtn2");
const radiobtn3=document.getElementById("radiobtn3");
const submitbtn=document.getElementById("submitbtn");
const label1=document.getElementById("label1");
const label2=document.getElementById("label2");

submitbtn.onclick=function(){
    if(checkbtn.checked){
        label1.textContent='you are subscribed';
    }
    else{
        label1.textContent='you are not subscribed';
    }
    if(radiobtn1.checked){
        label2.textContent='you are pay through visa';
    }
    else if(radiobtn2.checked){
        label2.textContent='you are pay through gpay';
    }
    else if(radiobtn3.checked){
        label2.textContent='you are pay through paytm';
    }
    else{
        label2.textContent='you are not selected the payment method';
    }
    

}