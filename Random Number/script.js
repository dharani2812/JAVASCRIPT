var btn=document.getElementById("btn");
var rnum=document.getElementById("rnum");


btn.onclick=function(){
    let randomnum=Math.floor(Math.random()*6)+1;
    rnum.textContent=randomnum;

}