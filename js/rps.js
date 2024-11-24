const rps = ["ROCK", "PAPER", "SCISSORS"];
let cpuChoice,
  playerChoice = "NONE";
let playerScore = 0;
let cpuScore = 0;

// Generate a random CPU choice
function generateCPU() {
  const randomIndex = Math.floor(Math.random() * 3);
  return rps[randomIndex];
}

// Button even listeners
const buttons = document.querySelectorAll("button");
const scoreboard = document.querySelector(".scoreboard");
const totalScore = document.querySelector(".totalScore");
const playerCard = document.querySelector("#playerCard");
const cpuCard = document.querySelector("#cpuCard");


buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    playerChoice = event.target.getAttribute("data-choice");
    cpuChoice = generateCPU();
    playRound(playerChoice, cpuChoice);
  });
});

// Play one round of the game
function playRound(user, cpu) {
  let resultText;
  cpuCard.classList.remove(    
    "border-success",
    "border-danger",
    "border-warning",
    "text-danger",
    "text-success",
    "text-warning"
  );
  playerCard.classList.remove(
    "border-success",
    "border-danger",
    "border-warning",
    "text-danger",
    "text-success",
    "text-warning"
  );

  if (user === cpu) {
    resultText = "TIE!";
    cpuCard.classList.add("border-warning");
    playerCard.classList.add("border-warning");
  } else if (
    (user === "ROCK" && cpu === "PAPER") ||
    (user === "PAPER" && cpu === "SCISSORS") ||
    (user === "SCISSORS" && cpu === "ROCK")
  ) {
    cpuScore++;
    // ADD EVENT LISTENERS
    playerCard.classList.add("border-danger", "text-danger");
    cpuCard.classList.add("border-success", "text-success");

  } else {
    playerScore++;
    cpuCard.classList.add("border-danger", "text-danger");
    playerCard.classList.add("border-success", "text-success");
    // ADD EVENT LISTENERS
  }
  totalScore.textContent = playerScore + " - " + cpuScore;
  if ((cpuScore + playerScore) === 5) {
    if (cpuScore > playerScore){
      alert("Fuckin Loser.");
    } else {
      alert("YOU FUCKING WON YOU BEAUTIFUL BASTARD!");
    }
    playerScore=0, cpuScore=0;
  }
}

