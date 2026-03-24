const allButtons = document.querySelectorAll("button");

const resultText = document.getElementById("result");
const userScoreText = document.getElementById("your-score");
const cpuScoreText = document.getElementById("computer-score");

let userScore = 0;
let cpuScore = 0;

allButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const userChoice = btn.id;
        const cpuChoice = getComputerChoice();

        const roundMessage = checkWinner(userChoice, cpuChoice);
        resultText.textContent = roundMessage;
    });
});

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}

function checkWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    }

    const userWins =
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper");

    if (userWins) {
        userScore++;
        userScoreText.textContent = userScore;
        return `You win! ${user} beats ${computer}`;
    } else {
        cpuScore++;
        cpuScoreText.textContent = cpuScore;
        return `You lose! ${computer} beats ${user}`;
    }
}
