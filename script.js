// --- Get user input ---
function getHumanChoice() { 
    let choice = prompt("Choose rock, paper, or scissors:");
    choice = choice.trim().toLowerCase();

    const validChoices = ["rock", "paper", "scissors"];
    if (!validChoices.includes(choice)) {
        alert("Invalid choice. Try again.");
        return getHumanChoice(); // Ask again if invalid
    }

    return choice;
}

// --- Generate computer's random choice ---
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) return "rock";
    if (randomNumber === 2) return "paper";
    return "scissors";
}

// --- Determine winner of one round ---
function determineWinner(human, computer) {
    if (human === computer) {
        return "tie";
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        return "human";
    } else {
        return "computer";
    }
}

// --- Play a single round ---
function playRound(roundNumber) {
    const human = getHumanChoice();
    const computer = getComputerChoice();

    console.log(`Round ${roundNumber}:`);
    console.log(`You chose: ${human}`);
    console.log(`Computer chose: ${computer}`);

    const winner = determineWinner(human, computer);

    if (winner === "tie") {
        console.log("Result: It's a tie!\n");
        alert(`Round ${roundNumber}: It's a tie!\n`);
    } else if (winner === "human") {
        console.log("Result: You win this round!\n");
        alert(`Round ${roundNumber}: You win this round!\n`);
    } else {
        console.log("Result: Computer wins this round!\n");
        alert(`Round ${roundNumber}: Computer wins this round!\n`);
    }

    return winner;
}

// --- Play 5 rounds and keep score ---
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const result = playRound(round);

        if (result === "human") humanScore++;
        else if (result === "computer") computerScore++;
        // tie = no score
    }

    // --- Final result ---
    console.log("Final Score:");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);

    if (humanScore > computerScore) {
        alert("You won the game!");
    } else if (computerScore > humanScore) {
        alert("Computer won the game!");
    } else {
        alert("It's a tie game!");
    }
}

// --- Start the game ---
playGame();
console.log(playGame)