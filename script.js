let playerWinCount = 0;
let computerWinCount = 0;

while (playerWinCount < 5 && computerWinCount < 5) {
  function getComputerChoice() {
    let random;

    // Generate random number between 1 and 3

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    random = getRandomNumber(1, 3);

    if (random === 1) {
      return "Rock";
    } else if (random === 2) {
      return "Paper";
    } else {
      return "Scissors";
    }
  }
  let playerChoice = prompt("Rock, Paper or Scissors?");
  let computerChoice = getComputerChoice();

  function game(playerChoice, computerChoice) {
    // Convert both input strings to lowercase for case-insensitivity
    let p_Choice = playerChoice.toLowerCase();
    let c_Choice = computerChoice.toLowerCase();

    if (
      (p_Choice == "rock" && c_Choice == "scissors") ||
      (p_Choice == "paper" && c_Choice == "rock") ||
      (p_Choice == "scissors" && c_Choice == "paper")
    ) {
      playerWinCount++;

      return "You won this round!";
    } else if (p_Choice === c_Choice) {
      return "It's a tie!";
    } else {
      computerWinCount++;
      return "You lost this round!";
    }
  }

  let result = game(playerChoice, computerChoice);

  console.log(result);
  console.log(
    `You won ${playerWinCount} time(s) and the computer won ${computerWinCount} time(s)`
  );
}
