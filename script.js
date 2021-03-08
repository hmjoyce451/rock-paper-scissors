//scoring elements
let userScore = 0;
let computerScore = 0;
//user button choices
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors');
//display score on dom
const userScoreDisplay = document.querySelector('.user-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const result = document.querySelector('.description-text');

const choices_div = document.querySelector('.choices');
//get computer selection
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

//playRound

function playRound(userSelection) {
    const computerSelection = computerPlay();
    switch(userSelection + computerSelection) {
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userSelection, computerSelection);
            break;
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userSelection, computerSelection);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userSelection, computerSelection);
            break;
    }
}

function win(userSelection, computerSelection) {
    userScore++;
    userScoreDisplay.innerText = userScore;
    computerScoreDisplay.innerText = computerScore;
    result.innerText = `${userSelection} defeats ${computerSelection}. User WINS!`;
    if(userScore > 4) {
        userWin();
    }
}
function lose(userSelection, computerSelection) {
    computerScore++;
    userScoreDisplay.innerText = userScore;
    computerScoreDisplay.innerText = computerScore;
    result.innerText = `${computerSelection} defeats ${userSelection}. User LOSES!`;
    if(computerScore > 4) {
        userLose();
    }
}
function draw(userSelection, computerSelection) {
    result.innerText = `${userSelection} ties ${computerSelection}. It's a DRAW!`;
    userScoreDisplay.innerText = userScore;
    computerScoreDisplay.innerText = computerScore;
}

function userWin() {
        choices_div.classList.add('game-over');
        result.innerText = 'GAME OVER, USER WINS!!!!'
}
function userLose() {
    choices_div.classList.add('game-over');
    result.innerText = 'GAME OVER, COMPUTER WINS... :('
}

function game() {
    rockBtn.addEventListener('click', () => playRound('rock'));
    paperBtn.addEventListener('click', () => playRound('paper'));
    scissorsBtn.addEventListener('click', () => playRound('scissors'));
}
game();