let playerScore = 0;

//result message
const resWin = `You win!`;
const resTie = `Tie!`;
const resLose = `You lose!`;
const resErr = "Invalid entry. Please try again."


// sets computer's choice for the round
function computerPlay() {
    const randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) {
        return "rock";
    } else if (randNum == 1) {
        return "paper";
    } else return "scissors";
}

const computerSelection = computerPlay();


//for results of gameplay
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return resTie;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return resLose;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return resWin;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return resWin;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return resLose;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return resLose;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return resWin;
    } else {
        return resErr;
    }
  }



//for 5 rounds of gameplay
function game() {
    let i;
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt("Rock, paper, or scissors?").toLowerCase();
        console.log(playerSelection);
        const computerSelection = computerPlay();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore);
    }
}

game();

