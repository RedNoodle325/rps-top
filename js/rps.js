// ------------------------------------------ BROWSER VERSION ------------------------------------------

// const choices = ["Rock", "Paper", "Scissors"]
// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");
// let playerScore = 0;
// let cpuScore = 0;
// let tieScore = 0;
// let playerChoice = "Awaiting Choice";
// let cpuChoice = "Awaiting Choice";

// document.getElementById('score-msg').innerHTML = "Good Luck!"
// document.getElementById('rock').addEventListener('click', function() {
//   playGame("Rock");
// });

// document.getElementById("paper").addEventListener('click', function() {
//   playGame("Paper");
// });

// document.getElementById('scissors').addEventListener('click', function() {
//   playGame("Scissors");
// });

// document.getElementById("scoreboard").innerHTML = playerScore + "-" + cpuScore + "-" + tieScore;

// function updateScoreboard(){
//   document.getElementById("scoreboard").innerHTML = playerScore + "-" + cpuScore + "-" + tieScore;
//   document.getElementById('p-choice').innerHTML = playerChoice;
//   document.getElementById('c-choice').innerHTML = cpuChoice;
// }
// function getComputerChoice() {
//  let a = Math.floor((Math.random()*3));
//  return choices[a];
// }

// function resetGame(){
//   playerChoice="";
//   cpuChoice="";
// }

// function playGame(choice) {
//   cpuChoice = getComputerChoice();
//   playerChoice = choice;

//   if (cpuChoice === playerChoice) {
//     tieScore++;
//     document.getElementById("score-msg").innerHTML = "Tie...but you're really a loser.";
//   }
//   else if (cpuChoice === "Rock" && playerChoice === "Scissors" || cpuChoice ==="Scissors" && playerChoice === "Paper" || cpuChoice === "Paper" && playerChoice === "Rock") {
//     cpuScore++;
//     document.getElementById("score-msg").innerHTML = "Fuckin Loser!";
//   }
//   else {
//     playerScore++;
//     document.getElementById("score-msg").innerHTML = "Great job I guess...";
//   }
//   updateScoreboard();
// }

// ------------------------------------------ CONSOLE VERSION ------------------------------------------

const rps = ["Rock", "Paper", "Scissors"];
let cpuChoice, playerChoice = "None";
let gameCount = 0;
let playerScore = 0;
let cpuScore = 0

function generateCPU(){
  a = Math.floor(Math.random()*3);
  return rps[a];
}

function isValid(choice) {
  if (choice === 1 || choice === 2 || choice === 3) {
    return true;
  } else {
    return false;
  }
}

  function playRound(user, cpu){
    if (user === cpu) {
      console.log('Tie!\n\nScore: ' + playerScore + ' - ' + cpuScore);
    } 
    else if (user === "Rock" && cpu === "Paper" ||user === "Paper" && cpu === "Scissors" ||user === "Scissors" && cpu === "Rock") {
      cpuScore++;
      console.log('Loser!\n\nScore: ' + playerScore + ' - ' + cpuScore);
    } else {
      playerScore++;
      console.log('YOU WIN MUHFUCKA!\n\nScore: ' + playerScore + ' - ' + cpuScore);
    }
    gameCount++;
  }

  function playGame(){
    cpuScore, playerScore, gamecount = 0;
    while (gameCount < 5){
      cpuChoice = generateCPU();
      let playerPrompt = parseInt(prompt("Choose your fighter!\n 1. Rock \n2. Paper \n3. Scissors"));
    
      if(isValid){
        playerChoice = rps[playerPrompt-1];
        playRound(playerChoice, cpuChoice);
      } else {
        alert('Invalid entry, try again.');
      }
    }
    if (playerScore > cpuScore) {
      console.log('YOU WIN!');
    } else if (playerScore === cpuScore) {
      console.log('Tie');
    } else {
      console.log("You lose!");
    }
  }