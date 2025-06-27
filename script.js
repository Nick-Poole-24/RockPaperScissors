
//Computer Player Random Choice

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3) + 1 ;
    return randomIndex;
}

console.log(getComputerChoice());
//Human Player Choice   

function getHumanChoice() { 
    let choice = prompt("Choose Rock, Paper or Scissor"); 
    choice = choice.toLowerCase();
    return choice;
}
console.log(getHumanChoice())

