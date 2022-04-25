let playerScore = 0;
let computerScore = 0;

//adds listener to all buttons
let playerChoice = document.getElementsByClassName("button");
for (var i = 0 ; i < playerChoice.length; i++) {
    playerChoice[i].addEventListener('click', playRound); 
 }

//for results of gameplay
function playRound(e, ) {
    let playerSelection = e.target.alt;

    // sets computer's choice for the round
    function computerPlay() {
        const randNum = Math.floor(Math.random() * 3);
        if (randNum == 0) {
            return "rock";
        } else if (randNum == 1) {
            return "paper";
        } else return "scissors";
    }

    //game over overlay
    function openOverlay() {
        document.getElementById("gameover").style.display = "block";
    }

    let computerSelection = computerPlay();
    
    if (playerSelection == computerSelection) {
        document.getElementById("resultmess").innerHTML = "tie.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        document.getElementById("resultmess").innerHTML = "You lost.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        document.getElementById("resultmess").innerHTML = "Yay! You win.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        document.getElementById("resultmess").innerHTML = "Yay! You win.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        document.getElementById("resultmess").innerHTML = "You lost.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        document.getElementById("resultmess").innerHTML = "You lost.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        document.getElementById("resultmess").innerHTML = "Yay! You win.";
    } else {
        document.getElementById("resultmess").innerHTML = "No.";
    }
    document.getElementById("pscore").innerHTML = playerScore;
    document.getElementById("cscore").innerHTML = computerScore;
    document.getElementById("pchoice").innerHTML = playerSelection.toUpperCase();
    document.getElementById("cchoice").innerHTML = computerSelection.toUpperCase();

    if (computerScore == 5) {
        document.getElementById("result").innerHTML = "Good game.";
        document.getElementById("overall").innerHTML = "Computer Won. :(";
        openOverlay();
    }

    if (playerScore == 5) {
        document.getElementById("result").innerHTML = "Good game.";
        document.getElementById("overall").innerHTML = "You Won!";
        document.getElementById("fwone").classList.add("before");
        document.getElementById("fwtwo").classList.add("after");
        openOverlay();
    }
  }

// resultmess color
let mainpage = document.getElementById("main");
mainpage.addEventListener('mousemove', runEvent);
function runEvent(e) {
    document.getElementById("resultmess").style.color = "rgb(40, "+e.offsetY+", "+e.offsetX+")";
}
