
function getComputerChoice () {
    let choice = Math.floor(Math.random()*3);

    if (choice < 1)
        return "rock";

    else if (choice < 2)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice() {
    let userInput = prompt("rock , paper or scissors?");
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let message;
    if (humanChoice == computerChoice){
        message = "Tie! You both picked " + humanChoice;
    }
    else{
        combination = humanChoice + " " + computerChoice;
        switch (combination){
            case "rock paper":
                message = "You lose! paper beats rock";
                computerScore += 1;
                break;
            case "rock scissors":
                message = "You win! rock beats scissors";
                humanScore += 1;
                break;
            case "paper rock":
                message = "You win! paper beats rock";
                humanScore += 1;
                break;
            case "paper scissors":
                message = "You lose! scissors beats paper";
                computerScore += 1;
                break;
            case "scissors rock":
                message = "You lose! rock beats scissors";
                computerScore += 1;
                break;
            case "scissors paper":
                message = "You win! scissors beats paper";
                humanScore += 1;
                break;
        }
    }

    return message;
}



let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
console.log("human chose :"+humanSelection);
const computerSelection = getComputerChoice();
console.log("computer chose :"+computerSelection);

console.log(playRound(humanSelection, computerSelection));
