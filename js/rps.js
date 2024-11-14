const choices = ["Rock", "Paper", "Scissors"]
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getComputerChoice() {
 let a = (Math.random()*3)+1;
 return choices[a];
}

getComputerChoice();