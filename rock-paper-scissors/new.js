const choices = ["Rock","Paper","Scissors"];
const playersdisplay1 = document.getElementById("playersdisplay");
const computerdisplay1 = document.getElementById("computerdisplay");
const result1 = document.getElementById("result");

function playgame(playerschoice){
    const computerchoice = choices[Math.floor(Math.random()*3)];
    let result2="";
    if(playerschoice === computerchoice)
    {
        result2="IT'S A TIE";
    }
    else{
        switch(playerschoice)
        {
        case "Rock":
            result2 = (computerchoice === "Scissors") ? "YOU WIN" : "YOU LOSE";
            break;
        case "Paper":
            result2 = (computerchoice === "Rock") ? "YOU WIN" : "YOU LOSE";
            break;
        case "Scissors":
                result2 = (computerchoice === "Paper") ? "YOU WIN" : "YOU LOSE";
                break;    
        
        }
    }

    playersdisplay1.textContent = `PLAYERS: ${playerschoice}`
    computerdisplay1.textContent= `COMPUTERS: ${computerchoice}`
    result1.textContent = result2;
}