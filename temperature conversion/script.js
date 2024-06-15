const content=document.getElementById("content");
const tofahrenheit=document.getElementById("tofahrenheit");
const tocelsius=document.getElementById("tocelsius");
const submit=document.getElementById("submit");
const unit=document.getElementById("unit");
let temp;
function answer(){
    if(tofahrenheit.checked){
      temp=Number(content.value);
      temp=temp*9/5+32;
      unit.textContent=temp.toFixed(1) + "°f"
    }
    else if(tocelsius.checked){
        temp=Number(content.value);
        temp=(temp-32)*(5/9);
        unit.textContent=temp.toFixed(1) + "°c"    }
    else{
        unit.textContent="please select any unit";
    }

}

