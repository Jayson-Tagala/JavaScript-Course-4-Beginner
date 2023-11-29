function newFunction() {
  console.log("Hello World!");
  console.log(2 + 2);
}
newFunction();

// Functions lets us reuse code

let computerMove = "";

function pickComputerMove(playerMove) {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  let result = "";

  if (playerMove === computerMove) {
    result = "Tie.";
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You win.";
  } else {
    result = "You lose.";
  }

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}
