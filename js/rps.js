const choices = ["Rock", "Paper", "Scissors"]
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerScore = 0;
let cpuScore = 0;
let tieScore = 0;
let playerChoice = "";
let cpuChoice = "";

document.getElementById('')
document.getElementById('rock').addEventListener('click', function() {
  playGame("Rock");
});

document.getElementById("paper").addEventListener('click', function() {
  playGame("Paper");
});

document.getElementById('scissors').addEventListener('click', function() {
  playGame("Scissors");
});

document.getElementById("scoreboard").innerHTML = playerScore + "-" + cpuScore + "-" + tieScore;
function updateScoreboard(){
  document.getElementById("scoreboard").innerHTML = playerScore + "-" + cpuScore + "-" + tieScore;
}
function getComputerChoice() {
 let a = Math.floor((Math.random()*3)+1);
 return choices[a];
}

function resetGame(){
  playerChoice="";
  cpuChoice="";
}

function playGame(choice) {
  cpuChoice = getComputerChoice();
  playerChoice = choice;

  if (cpuChoice === playerChoice) {
    tieScore++;
    document.getElementById("score-msg").innerHTML = "Tie...but you're really a loser.";
    
  }
  else if (cpuChoice === "Rock" && playerChoice === "Scissors" || cpuChoice ==="Scissors" && playerChoice === "Paper" || cpuChoice === "Paper" && playerChoice === "Rock") {
    cpuScore++;
    document.getElementById("score-msg").innerHTML = "Fuckin Loser!";
  }
  else {
    playerScore++;
    document.getElementById("score-msg").innerHTML = "CPU CHOICE: " + cpuChoice + " PLAYER CHOICE: " + playerChoice +"Great job I guess...";
  }
  updateScoreboard();
}