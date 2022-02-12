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
function playerThrow() {
    let input = prompt("Rock Paper Scissors").toLowerCase()
    switch(input) {
        case "rock":
            playerHand = "Rock"
            break;
        case "paper":
            playerHand = "Paper"
            break;
        case "scissors":
            playerHand = "Scissors"
            break;
        default: 
            alert('Please write "rock", "paper" or "scissors')
        playerThrow()
        break;
    }
}
//throws are compared, winner selected
function singleGame() {
    computerThrow();
    playerThrow();
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
    if(roundWinner == "draw") {
        alert(`It's a draw! You both played ${playerHand}. Current scores: Player: ${playerScore}; Computer: ${computerScore}`)
        singleGame()
    }else if(roundWinner == "playerWinner") {
        ++playerScore;
        if( playerScore == 3) {
            alert(`Congrats! You're the big winner. You threw ${playerHand} while the computer threw ${computerHand}. Final scores: You: ${playerScore}; Computer: ${computerScore}`)
            resetScores()
            singleGame()
        } else {
            alert(`You win! You threw ${playerHand} while the computer threw ${computerHand}. Current scores: Player: ${playerScore}; Computer: ${computerScore}`)
            singleGame()
        }
    } else {
        ++computerScore;
        if(computerScore == 3) {
            alert(`Unfortunate! You're the big loser. You threw ${playerHand} while the computer threw ${computerHand}. Final scores: You: ${playerScore}; Computer: ${computerScore}`)
            resetScores()
            singleGame()
        } else {
            alert(`You lose. You threw ${playerHand} while the computer threw ${computerHand}. Current scores: Player: ${playerScore}; Computer: ${computerScore} `)
            singleGame()
        }
    }
}


//reset scores
function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

singleGame()