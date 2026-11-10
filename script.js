
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
                break;
            case "rock scissors":
                message = "You win! rock beats scissors";
                break;
            case "paper rock":
                message = "You win! paper beats rock";
                break;
            case "paper scissors":
                message = "You lose! scissors beats paper";
                break;
            case "scissors rock":
                message = "You lose! rock beats scissors";
                break;
            case "scissors paper":
                message = "You win! scissors beats paper";
                break;
        }
    }

    return message;
}

function updateScoreComputer(message){
    if(message.includes("You lose!"))
        return 1;
    else
        return 0;
}

function updateScoreHuman(message){
    if(message.includes("You win!"))
        return 1;
    else
        return 0;
}

function showResults(humanScore,computerScore){
    console.log("Final results : ");
    console.log("Your score : " + humanScore);
    console.log("Computer's score' : " + computerScore);

    if (humanScore > computerScore)
        console.log("Congrats you win!");
    else if (humanScore < computerScore)
        console.log("Oops you lose!");
    else
        console.log("Tie!");
    console.log("Game finished! Exiting...")
}

function playGame(nbGames) {
    let humanScore = 0;
    let computerScore = 0;

    let outcome;

    let humanSelection;
    let computerSelection;

    for(let i = 1 ; i <= nbGames ; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log("Round "+i+" : Computer chose " + computerSelection + " VS You chose " + humanSelection);

        outcome = playRound(humanSelection, computerSelection);
        alert(outcome);
        humanScore += updateScoreHuman(outcome);
        computerScore += updateScoreComputer(outcome);
    }

    showResults(humanScore,computerScore);
}



playGame(5);
