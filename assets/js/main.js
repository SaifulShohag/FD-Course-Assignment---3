const rps = ['ROCK', 'PAPER', 'SCISSORS'];
let userScore = 0;
let computerScore = 0;

function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    return index;
}

function userPlay() {
    let userInput = prompt("Please 'Rock', 'Paper' or 'Scissors': ");
    let index = rps.indexOf(userInput.toUpperCase());
    if(index === -1) {
        index = userPlay();
    } 
    return index;   
}

function playRound() {
    let computerSelection = computerPlay(); 
    let userSelection = userPlay();
    console.log(`Computer: ${rps[computerSelection]}\nYou: ${rps[userSelection]}`)

    if(computerSelection === 0) {
        if (userSelection === 1) {
            userScore++;
            console.log("You Won! Paper beats Rock");
        } else if(userSelection === 2) {
            computerScore++;
            console.log("You Lost! Rock beats Scissors");
        } else {
            console.log("You both picked Rock! Try again ---");
            playRound();
        }
    } else if(computerSelection === 1) {
        if (userSelection === 2) {
            userScore++;
            console.log("You Won! Scissors beats Paper");
        } else if(userSelection === 0) {
            computerScore++;
            console.log("You Lost! Paper beats Rock");
        } else {
            console.log("You both picked Paper! Try again ---");
            playRound();
        }
    } else if(computerSelection === 2) {
        if (userSelection === 0) {
            userScore++;
            console.log("You Won! Rock beats Scissors");
        } else if(userSelection === 1) {
            computerScore++;
            console.log("You Lost! Scissors beats Paper");
        } else {
            console.log("You both picked Scissors! Try again ---");
            playRound();
        }
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        console.log(`\n\n### Round ${i+1} ###`);
        playRound();
    }
    console.log('\n#####################');
    console.log(`Total Rounds: 5 \nYour Score: ${userScore} \nComputer Score: ${computerScore}`);
    
    if(computerScore > userScore) console.log('You lost in 5 Rounds of Rock Paper Scissors');
    else console.log('You won in 5 Rounds of Rock Paper Scissors');
    console.log('#####################');
}

game();