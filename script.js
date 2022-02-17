//variables

let computerHand;
let playerHand;
let computerScore = 0;
let playerScore = 0;
let roundWinner;

//computer selects random throw

function computerThrow() {
    let randomNumber = (Math.floor(Math.random() * 3) + 1 )
    switch(randomNumber) {
        case 1: 
        computerHand = "Rock"
        break;
        case 2: 
        computerHand = "Paper"
        break;
        case 3:
        computerHand = "Scissors"
        break;
    }
    
    
}
//player inputs a throw
let rockButton = document.querySelector(`#rockButton`);
rockButton.addEventListener("click", function() {
    playerHand = "Rock";
    singleGame()
})


let paperButton = document.querySelector(`#paperButton`);
paperButton.addEventListener("click", function() {
    playerHand = "Paper";
    singleGame()
})

let scissorsButton = document.querySelector(`#scissorsButton`);
scissorsButton.addEventListener("click", function() {
    playerHand = "Scissors";
    singleGame()
})



    

//throws are compared, winner selected
function singleGame() {
    computerThrow();
    if(computerHand === playerHand) {
        roundWinner = "draw";
        updateScores()
    } else if((playerHand == "Rock" && computerHand == "Scissors") 
    || (playerHand == "Paper" && computerHand == "Rock") 
    || (playerHand == "Scissors" && computerHand == "Paper")) {
        roundWinner = "playerWinner";
        updateScores()
    } else {
        roundWinner = "computerWinner";
        updateScores()
    }
}
//scores are added
function updateScores() {
    let results = document.querySelector(`.reportpchand`)
    if(roundWinner == "draw") {
        results.textContent = (`It's a draw! You both played ${playerHand}.`)
        printScores()
    }else if(roundWinner == "playerWinner") {
        ++playerScore;
        if( playerScore == 5) {
            results.textContent = (`Congrats! You're the big winner. You threw ${playerHand} while the computer threw ${computerHand}. Final scores: You: ${playerScore}; Computer: ${computerScore}`)
            resetScores()
        } else {
            results.textContent = (`You win! You threw ${playerHand} while the computer threw ${computerHand}.`)
            printScores()
        }
    } else {
        ++computerScore;
        if(computerScore == 5) {
            results.textContent = (`Unfortunate! You're the big loser. You threw ${playerHand} while the computer threw ${computerHand}. Final scores: You: ${playerScore}; Computer: ${computerScore}`)
            resetScores()
        } else {
            results.textContent = (`You lose. You threw ${playerHand} while the computer threw ${computerHand}.`)
            printScores()
        }
    }
}


//reset scores
function resetScores() {
    printScores()
    playerScore = 0;
    computerScore = 0;
}

function printScores() {
    let pplayerscore = document.querySelector(`.playerscorenumber`)
    let ppcscore = document.querySelector(`.pcscorenumber`)
    pplayerscore.textContent = playerScore
    ppcscore.textContent = computerScore
}
