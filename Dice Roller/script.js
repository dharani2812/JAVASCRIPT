function roll(){
    const numofroller=document.getElementById("numofroller").value;
    const  diceresult=document.getElementById("diceresult");
    const  diceimages=document.getElementById("diceimages");
    let values=[];
    let images=[];
    for (let i=1;i<=numofroller;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="images/${value}.jpeg">`);
    }
    diceresult.textContent=`dice: ${values.join(', ')}`;
    diceimages.innerHTML=images.join();

}