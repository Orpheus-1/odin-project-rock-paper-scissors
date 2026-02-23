/* PSEUDCODE PLAN: ROCK PAPER SCISSORS:
    INIT humanScore and computerScore to keep track of player's score
    CALCULATE random computer choice using Math.random in getComputerChoice function
    INPUT user rps choice in getHumanChoice function
    CREATE playRound function that takes in humanChoice and computerChoice functions, and compare choices
    make it so that it lowercases all string inputs like rock ROCK or ROck for case sensitivity
    GET user choice in console
    WHILE humanScore and computerScore < 3
        OUTPUT to console humanScore and computerScore
        call user's choice in console
        call random computer choice
        call playRound
*/ 


function getComputerChoice(){
    let x = Math.round(Math.random() * (3 - 1));
    let choice = "";
    if(x === 0) {
        choice = "rock";
    }
    else if (x === 1) {
        choice = "paper";
    } else if (x === 2) {
        choice = "scissors";
    }
    console.log("Computer Choice is:" + choice);
    computerChoice = choice;
    return computerChoice;
}

function getHumanChoice(){
    let input = prompt("Choose Rock, Paper or Scissors!");
    let choice = "";
    if (input.toLowerCase() === "rock") {
                choice = "rock";
    } else if (input.toLowerCase() === "paper") {
                choice = "paper";
    } else if (input.toLowerCase() === "scissors") {
                choice = "scissors";
    } else {
        console.log("Input Error, Please input Rock, Paper or Scissors");
        getHumanChoice();
    }
    console.log("Human Choice is: " + choice);
    humanChoice = choice;
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie! No one wins but no one loses!");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        console.log("Computer Wins the Round!");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        console.log("Computer Wins the Round!");
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore += 1;
        console.log("Computer Wins the Round!");
    } else if (computerChoice == "rock" && humanChoice == "paper") {
        humanScore += 1; 
        console.log("Human Wins the Round!");
    }  else if (computerChoice == "paper" && humanChoice == "scissors") {
        humanScore += 1; 
        console.log("Human Wins the Round!");
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
        humanScore += 1; 
        console.log("Human Wins the Round!");
    } else {
        console.log("ERROR: How did you even do this?")
    }
    return console.log("Computer Points: " + computerScore + " || " + "Human Score: " + humanScore + "\n=================================================")
}

function playGame(){
    let gameCount = 0;
    while (gameCount < 5) {
        getHumanChoice();
        getComputerChoice();
        playRound(humanChoice, computerChoice); 
        gameCount += 1;
    }
    if (humanScore > computerScore) {
        console.log("Human Wins the Game!");
    } else if (computerScore > humanScore) {
        console.log("Computer Wins the Game!");
    } else {
        console.log("Tie! Both of you are winners and losers!");
    }
}


let humanScore = 0;
let computerScore = 0; 
let humanChoice = "";
let computerChoice = "";
playGame();

// use toUpperCase to make all characters in a string to uppecase or localeCompare