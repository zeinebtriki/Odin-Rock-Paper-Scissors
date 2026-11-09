console.log("Hello there!");

function getComputerChoice () {
    let choice = Math.floor(Math.random()*3);
    console.log(choice);

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

console.log(getComputerChoice());
console.log(getHumanChoice());
