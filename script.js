//Human Player Choice   

function getHumanChoice() { 
    let choice = prompt("Choose Rock, Paper or Scissor"); 
    choice = choice.toLowerCase();
    return choice;
}
console.log(getHumanChoice()); 

//Computer Player Random Choice and Convert 1-3 to Rock,paper,scissors

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3) + 1 ;
    if (randomIndex === 1) {
        return "rock";
     } else if (randomIndex === 2) {
        return "paper";
     }else {
        return "scissors";
     }
    
}
console.log(getComputerChoice()); 