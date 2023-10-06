let playerWinCount;
let computerWinCount;

function getComputerChoice() {
  let random;
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  random = getRandomNumber(1, 3);

  if (random === 1) {
    return "Rock";
  } else if (random === 2) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

console.log(getComputerChoice());
