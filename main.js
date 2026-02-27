
function getComputerChoice(){
    let x = Math.round(Math.random() * (3 - 1));
    let choice = "";
    if(x === 0) {
        choice = "Rock";
    }
    else if (x === 1) {
        choice = "Paper";
    } else if (x === 2) {
        choice = "Scissors";
    }
    // console.log("Computer Choice is:" + choice);
    computerChoice = choice;
    return -1;
}

function getChoices(buttonText){
    let choice = buttonText;
    if (choice.toLowerCase() === "rock") {
                choice = "Rock";
    } else if (choice.toLowerCase() === "paper") {
                choice = "Paper";
    } else if (choice.toLowerCase() === "scissors") {
                choice = "Scissors";
    } else {
        console.log("An unknown error has occured");
        return -1
    }
    // console.log("Human Choice is: " + choice);
    humanChoice = choice;
    getComputerChoice();
    return -1
}

function gameCompareEval(humanChoice, computerChoice) {
        if (gameOver != true) {
            choices.textContent = "Computer Chooses: " + computerChoice + " || " + "You Chose: " + humanChoice;
        }else if (gameOver === true) {
            return -1; 
        }

        if (humanChoice == computerChoice) {
            whoWins.textContent = "Tie! No one wins, no one loses.";
        } else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper") {
            computerScore += 1;
            whoWins.textContent = "Computer Wins the Round!";
        } else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors") {
            computerScore += 1;
            whoWins.textContent = "Computer Wins the Round!";
        } else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock"){
            computerScore += 1;
            whoWins.textContent = "Computer Wins the Round!";
        } else if (computerChoice.toLowerCase() == "rock" && humanChoice.toLowerCase() == "paper") {
            humanScore += 1; 
            whoWins.textContent = "Human Wins the Round!";
        }  else if (computerChoice.toLowerCase() == "paper" && humanChoice.toLowerCase() == "scissors") {
            humanScore += 1; 
            whoWins.textContent = "Human Wins the Round!";
        } else if (computerChoice.toLowerCase() == "scissors" && humanChoice.toLowerCase() == "rock") {
            humanScore += 1; 
            whoWins.textContent = "Human Wins the Round!";
        } else {
            console.log("ERROR: How did you even do this?")
        }

        if (humanScore === 3) {

            scores.textContent = "Congrats! You win! Refresh to challenge again!"
            gameOver = true;

        } else if (computerScore === 3) {

            scores.textContent = "You Lost! Please refresh to try again!"
            gameOver = true;
            
        }
        return  victory.textContent =  "Computer Points: " + computerScore + " || " + "Human Score: " + humanScore 

}

// function playGame(){
//     let gameCount = 0;
//     while (gameCount < 5) {
//         getHumanChoice();
//         getComputerChoice();
//         gameCompareEval(humanChoice, computerChoice); 
//         gameCount += 1;
//     }
//     if (humanScore > computerScore) {
//         console.log("Human Wins the Game!");
//     } else if (computerScore > humanScore) {
//         console.log("Computer Wins the Game!");
//     } else {
//         console.log("Tie! Both of you are winners and losers!");
//     }
// }


let humanScore = 0;
let computerScore = 0; 
let humanChoice = "";
let computerChoice = "";
let gameOver = false;
/*
 * create three buttons that when dom hears them clicked, logs the user's selection of "rock", "paper", or "scissors"
 * after such, it should then calculate the computer's choice at clicking as well. THEN compare.run play ROUND
 * display the winner and score (Player Score | Win/Loss | Computer Score)
 * Keep score displayed, below have a quip saying something like "Select Next Choice" which would be replaced with You Won!  or You Loss! or Tie!
 */

const buttonContainer = document.querySelector("#btn-container");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.id = "rock-btn"
rockButton.id = "paper-btn"
rockButton.id = "scissors-btn"


rockButton.textContent = "Rock"
paperButton.textContent = "Paper"
scissorsButton.textContent = "Scissors"

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);

const scoreScreen = document.getElementById("text-container-2");

const scores = document.createElement("h5");
const victory = document.createElement("h5");
const choices = document.createElement("h5");
const whoWins = document.createElement("h5");

choices.id = "choices";
choices.textContent = "";

whoWins.id = "whoWins";
whoWins.textContent = "";

victory.id = "victory";
victory.textContent = "";

scores.id = "scores";
scores.textContent = "";

scoreScreen.appendChild(choices);
scoreScreen.appendChild(whoWins);
scoreScreen.appendChild(victory);
scoreScreen.appendChild(scores);



const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        startGame(button.textContent)
    });
});

function startGame(button) {
    getChoices(button);
    gameCompareEval(humanChoice, computerChoice);
}

