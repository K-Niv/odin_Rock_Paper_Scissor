
let choice_array = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){

    let comp_choice = parseInt(Math.random() * 3);

    return comp_choice;
}

function getHumanChoice() {
    let valid = false;
    let human_choice;

    while (!valid) {
        human_choice = Number(prompt("Please enter your choice (0 :- Rock  1 :- Paper  2 :- Scissor) :- "));

        if (human_choice >= 0 && human_choice <= 2 && Number.isInteger(human_choice)) {
            valid = true;
        } else {
            alert("Please enter a valid number (0, 1, or 2).");
        }
    }

    return human_choice;
}


let humanScore = 0;
let computerScore = 0;

function playRound(c_choice, h_choice){

    alert("You chose :- " + choice_array[h_choice] + "\n" + "The computer chose :- " + choice_array[c_choice]);

    let result = h_choice - c_choice;

    if (result < 0){
        if (result == -2){
            alert("You Win the round!");
            humanScore++;
        }

        alert("You Lose the round!")
        computerScore++;
    }

    else if (result == 0){
        alert("Tie round!");
    }

    else{

        alert("You Win the round!");
        humanScore++;


    }

    alert("Your Score :- " + humanScore + "\n" + "The computer's score " + computerScore);

        
}


function playGame(){
    for (let i = 0; i < 5; i++){

        let round = i + 1;

        alert("Round" + round);

        let computer_choice = getComputerChoice();
        let human_input = getHumanChoice();

        playRound(computer_choice, human_input);

    }

    if (humanScore > computerScore){
        alert("You Win the game!");
    }

    else if (humanScore < computerScore){
        alert("You lose the game!");
    }

    else{
        alert("It is a tie game!");
    }
}

playGame();


