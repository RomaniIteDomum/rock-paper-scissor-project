let playerWinCount;
let computerWinCount;


function getComputerChoice () {
 let random;
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  random = getRandomNumber(1,3);

  console.log(random);
}


getComputerChoice();