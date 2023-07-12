'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 18;

// document.querySelector('.guess').value = 23;
// console.log('Guess value', document.querySelector('.guess').value);
const randonNumber = () => Math.ceil(Math.random() * 20);

let secretNumber = randonNumber();
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const check = function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess || guess < 0 || guess > 20) {
        displayMessage('Enter a valid number.');
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('Congratulations!');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else {
        if (score > 0) {
            displayMessage(guess > secretNumber ? 'Too high...' : 'Too low...');
            document.querySelector('.score').textContent = --score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
};

document.querySelector('.check').addEventListener('click', check);
document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        check();
    }
});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    secretNumber = randonNumber();
    score = 20;

    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
});
