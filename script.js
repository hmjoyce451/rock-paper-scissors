const choices = ['rock', 'paper', 'scissors'];

let computerSelection;
let userSelection;

let userScore = 0;
let computerScore = 0;

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

function playRound(userSelection, computerSelection) {
   userSelection = prompt('Rock, paper or scissors? ').toLowerCase();
   computerSelection = computerPlay();
    if(userSelection === computerSelection) {
       console.log(`computer chooses ${computerSelection}`);
       console.log(`user chooses ${userSelection}`);
       return `${userSelection} ties ${computerSelection}.  It's a draw!`;
   } else if (userSelection === 'rock' && computerSelection === 'paper') {
    console.log(`computer chooses ${computerSelection}`);
    console.log(`user chooses ${userSelection}`);
    computerScore++;
    console.log(userScore, computerScore);
    return `${computerSelection} defeats ${userSelection}. You Lose!`;
   } else if(userSelection === 'rock' && computerSelection === 'scissors') {
    console.log(`computer chooses ${computerSelection}`);
    console.log(`user chooses ${userSelection}`);
    userScore++;
    console.log(userScore, computerScore);
    return `${userSelection} defeats ${computerSelection}. You Win!`;
   } else if(userSelection === 'paper' && computerSelection === 'rock') {
    console.log(`computer chooses ${computerSelection}`);
    console.log(`user chooses ${userSelection}`);
    userScore++;
    console.log(userScore, computerScore);
    return `${userSelection} defeats ${computerSelection}. You Win!`;
   } else if(userSelection === 'paper' && computerSelection === 'scissors') {
    console.log(`computer chooses ${computerSelection}`);
    console.log(`user chooses ${userSelection}`);
    computerScore++;
    console.log(userScore, computerScore);
    return `${computerSelection} defeats ${userSelection}. You Lose!`;
   } else if(userSelection === 'scissors' && computerSelection === 'rock') {
    console.log(`computer chooses ${computerSelection}`);
    console.log(`user chooses ${userSelection}`);
    computerScore++;
    console.log(userScore, computerScore);
    return `${computerSelection} defeats ${userSelection}. You Lose!`;
   } else if(userSelection === 'scissors' && computerSelection === 'paper') {
    console.log(`computer chooses ${computerSelection}`);
    console.log(`user chooses ${userSelection}`);
    userScore++;
    console.log(userScore, computerScore);
    return `${userSelection} defeats ${computerSelection}. You Win!`;
   }
}

function game () {
    while(userScore < 5 && computerScore < 5) {
        console.log(playRound());
    } if(userScore >= 5) {
        return `USER WINS!!!`
    } else if (computerScore >= 5) {
        return `Computer wins.... :(`;
    }
}
console.log(game());