// Initialize game variables
var wins = 0;
var ties = 0;
var losses = 0;

// Function to get user's choice
function getUserChoice() {
  var userChoice = prompt("Enter R, P, or S:").toUpperCase();
  while (userChoice !== "R" && userChoice !== "P" && userChoice !== "S") {
    userChoice = prompt("Invalid choice. Enter R, P, or S:").toUpperCase();
  }
  return userChoice;
}

// Function to get computer's choice
function getComputerChoice() {
  var choices = ["R", "P", "S"];
  var randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tie";
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    return "user";
  } else {
    return "computer";
  }
}

// Function to play a round of the game
function playRound() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  var result = determineWinner(userChoice, computerChoice);

  if (result === "user") {
    wins++;
    alert("You win! User: " + userChoice + " Computer: " + computerChoice);
  } else if (result === "computer") {
    losses++;
    alert("You lose! User: " + userChoice + " Computer: " + computerChoice);
  } else {
    ties++;
    alert("It's a tie! User: " + userChoice + " Computer: " + computerChoice);
  }

  alert("Wins: " + wins + " Ties: " + ties + " Losses: " + losses);

  // Ask if the user wants to play again
  var playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    playRound();
  } else {
    alert("Thanks for playing!");
  }
}

// Start the game
playRound();
