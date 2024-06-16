const choices=["rock","paper","scissor"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerscore=document.getElementById("playerscore");
const computerscore=document.getElementById("computerscore");
let plscore=0;
let comscore=0;

function playgame(playerchoice){
    const computerchoice=choices[Math.floor(Math.random()*3)]
    let result =""
    if(playerchoice===computerchoice){
        result="IT'S A TIE"
    }
    else{
        switch(playerchoice){
            case "rock":
            result=(computerchoice === "scissor") ? "YOU WON" : "YOU LOSE";
            break;
            case "paper":
            result=(computerchoice === "rock") ? "YOU WON" : "YOU LOSE";
            break;
            case "scissor":
            result=(computerchoice === "paper") ? "YOU WON" : "YOU LOSE";
            break;  
        }
    }
    playerDisplay.textContent=`PLAYER : ${playerchoice}`
    computerDisplay.textContent=`COMPUTER : ${computerchoice}`
    resultDisplay.textContent=result;
    resultDisplay.classList.remove("green","red")
    switch(result){
        case "YOU WON":
            resultDisplay.classList.add("green")
            plscore++;
            playerscore.textContent=`PLAYERSCORE : ${plscore}`
            break;
        case "YOU LOSE":
        resultDisplay.classList.add("red")
        comscore++;
        computerscore.textContent=`COMPUTERSCORE : ${comscore}`
        break;
    }
}
