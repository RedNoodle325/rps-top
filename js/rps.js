const choices = ["Rock", "Paper", "Scissors"]
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerScore = 0;
let cpuScore = 0;
let tieScore = 0;
let playerChoice = "";
let cpuChoice = "";

document.getElementById('rock').addEventListener('click', playGame(String("Rock")));

document.getElementById('paper').addEventListener('click', playGame(String("Paper")));

document.getElementById('scissors').addEventListener('click', playGame(String('Scissors')));

function getComputerChoice() {
 let a = Math.floor((Math.random()*3)+1);
 return choices[a];
}

function playGame(choice) {
  cpuChoice = getComputerChoice();
  playerChoice = choice;

  if (cpuChoice === playerChoice) {
    tieScore++;
    document.getElementById("scoreboard").innerHTML = "<p>Tie...but you're really a loser.</p>";
    
  }
  else if (cpuChoice === "Rock" && playerChoice === "Scissors" || cpuChoice ==="Scissors" && playerChoice === "Paper" || cpuChoice === "Paper" && playerChoice === "Rock") {
    cpuScore++;
    document.getElementById("scoreboard").innerHTML = "<p>Fuckin Loser!</p>";
  }
  else {
    playerScore++;
    document.getElementById("scoreboard").innerHTML = "<p>Great job I guess...</p>";
  }
}