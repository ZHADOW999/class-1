let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  
  // Initialize variables to track the score
  let wins = score.wins;
  let losses = score.losses;
  let ties = score.ties;
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".js-rock-button").addEventListener("click", () => {
      
      playGame("rock");
    });
  
    document.querySelector(".js-paper-button").addEventListener("click", () => {
      playGame("paper");
    });
  
    document.querySelector(".js-scissors-button").addEventListener("click", () => {
      playGame("scissors");
    });
  
    // Initial score update
    updateScoreElement();
  });
  
  function playGame(playerMove) {
    let computerMove = pickComputerMove();
    let result = "";
  
    // Determine the result of the game
    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "You lose.";
        losses += 1;
      } else if (computerMove === "paper") {
        result = "You win.";
        wins += 1;
      } else {
        result = "Tie.";
        ties += 1;
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "You win.";
        wins += 1;
      } else if (computerMove === "paper") {
        result = "Tie.";
        ties += 1;
      } else {
        result = "You lose.";
        losses += 1;
      }
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie.";
        ties += 1;
      } else if (computerMove === "paper") {
        result = "You lose.";
        losses += 1;
      } else {
        result = "You win.";
        wins += 1;
      }
    }
  
    // Update the score in local storage
    score = { wins, losses, ties };
    localStorage.setItem("score", JSON.stringify(score));
  
    // Update the UI
    updateScoreElement();
    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(
      ".js-moves"
    ).innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon">
         <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
  }
  
  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";
  
    if (randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber < 2 / 3) {
      computerMove = "paper";
    } else {
      computerMove = "scissors";
    }
  
    return computerMove;
  }
  
function updateScoreElement() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
  }



  function ResetScore(){
    localStorage.clear();
    wins = 0;
    losses = 0;
    ties =0;
    updateScoreElement();
  }
  
  //i romoved these functions because they where not being used
  // function updateResultElement() 
  // function updateMovesElement() 




