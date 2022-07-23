const scoreBoard = document.querySelector('.score-log');
const dPart1 = document.querySelector('.display .part1');
const dPart2IMG = document.querySelector('.display .part2 img');

const rps = ['ROCK', 'PAPER', 'SCISSORS'];
let userScore = 0;
let computerScore = 0;

function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    return index;
}

function countScore(computerSelection, userSelection) {
    let val1 = computerSelection == 2 ? 0 : computerSelection+1;
    let val2 = val1 == 2 ? 0 : val1+1;

    if (userSelection === val1) userScore++;
    else if(userSelection === val2) computerScore++;
}

function playRound(userInput) {
    let computerSelection = computerPlay(); 
    let userSelection = userInput;

    countScore(computerSelection, userSelection);
    updateUI(computerSelection, userSelection);
}

function updateUI(computerSelection, userSelection) {
    scoreBoard.textContent = `Round:  ${userScore+computerScore} | Won: ${userScore} | Lost: ${computerScore}`;
    dPart1.innerHTML = `<img src="./assets/images/${computerSelection}.png" alt="Computer Selection: ${rps[computerSelection]}">`;
    dPart2IMG.src = `./assets/images/${userSelection}.png`;

    if((userScore+computerScore) === 5) {
        setTimeout(() => alert(`Game Over! You ${userScore > computerScore ? 'Won!' : 'Lost!'}`), 0);
        location.reload();
    }
}