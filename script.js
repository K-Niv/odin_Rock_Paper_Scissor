let choices_arr = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let human_choice = document.querySelectorAll('.choice');
let human_choice_value = 0;
let humanScore = 0;
let computerScore = 0;

human_choice.forEach(choice => {
    choice.addEventListener('click', function(e) {
        let target = e.target;
        if (target.tagName === 'IMG') {
            target = target.parentElement;
        }
        human_choice_value = parseInt(target.querySelector('img').id);
        playGame();
    });
});


const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame);

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.querySelector("h1").textContent = "Choose!";
    document.querySelector("h4").textContent = "First to 5 Wins!";
    document.querySelector("h4").style.display = 'block';
    document.querySelector(".human_score").textContent = "Your Score is :- 0";
    document.querySelector(".computer_score").textContent = "The computer's score is :- 0";
}

// Functions used:

function playRound(c_choice, h_choice) {
    const resultDisplay = document.querySelector("h1");
    const messageDisplay = document.querySelector("h4");
    const humanScoreDisplay = document.querySelector(".human_score");
    const computerScoreDisplay = document.querySelector(".computer_score");

    resultDisplay.textContent = "You chose: " + choices_arr[h_choice] + ". The computer chose: " + choices_arr[c_choice] + ".";

    let result = h_choice - c_choice;

    if (result === 1 || result === -2) {
        messageDisplay.textContent = "You Win the round!";
        messageDisplay.setAttribute("style", "color : green");
        humanScore++;
    } else if (result === -1 || result === 2) {
        messageDisplay.textContent = "You lose the round!";
        messageDisplay.setAttribute("style", "color : red");
        computerScore++;
    } else {
        messageDisplay.textContent = "Tie Round!";
        messageDisplay.setAttribute("style", "color : grey");
    }

    humanScoreDisplay.textContent = "Your score is: " + humanScore;
    computerScoreDisplay.textContent = "The computer's score is: " + computerScore;
}

function playGame() {
    const computer_choice_value = getComputerChoice();
    playRound(computer_choice_value, human_choice_value);

    if (humanScore >= 5 || computerScore >= 5) {
        const finalResultDisplay = document.querySelector("h1");
        if (humanScore > computerScore) {
            finalResultDisplay.textContent = "You won the game!";
            
        } else if (humanScore < computerScore) {
            finalResultDisplay.textContent = "You lost the game!";

        } else {
            finalResultDisplay.textContent = "Tie!";
        }

        // Hide h4 element
        document.querySelector("h4").style.display = 'none';

        // Reset scores after the game ends
        humanScore = 0;
        computerScore = 0;
    }
}
