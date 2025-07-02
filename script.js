let playerScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();    const result = playRound(playerChoice, computerChoice);
    updateResult(result, playerChoice, computerChoice);
updateScore();
});
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(player, computer) {
    if (player === computer) return "tie";
    if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    playerScore++;
    return "win";
  } else {
    computerScore++;
    return "lose";
  }
}

function updateResult(result, player, computer) {
  if (result === "tie") {
    resultDiv.textContent = `It's a tie! You both chose ${player}.`;
  } else if (result === "win") {
    resultDiv.textContent = `You win! ${player} beats ${computer}.`;
  } else {
    resultDiv.textContent = `You lose! ${computer} beats ${player}.`;
  }
}

function updateScore() {
  scoreDiv.textContent = `Score — You: ${playerScore} | Computer: ${computerScore}`;
}