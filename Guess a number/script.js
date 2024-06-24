const randomNum = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const resultSection = document.querySelector('resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const gameOver = document.querySelector('.gameOver');
const gameRestart = document.querySelector('.gameStart');

let numGuess = 1;
let p = document.createElement('p');

submit.addEventListener('click', function (e) {
  e.preventDefault();
  const guess = userInput.value;
  console.log(guess);
  numGuess++;
  validateGuess(guess);
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess < 1) {
    alert('Please Enter Number Greater than 1');
  } else if (guess > 100) {
    alert('Please enter number smaller than or equal to 100');
  } else {
    userInput.value = '';
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess < randomNum) {
    displayMessage(`Guess Number ${guess} is Too Low`);
  } else if (guess > randomNum) {
    displayMessage(`Guess Number ${guess} is Too High`);
  } else {
    displayMessage('Congrats You guessed it Right!!');
    endGame();
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = message;
}

function displayGuess(guess) {
  guesSlot.innerHTML += `${guess}  `;
  if (11 - numGuess) {
    remaining.innerHTML = 11 - numGuess;
  } else {
    remaining.innerHTML = 11 - numGuess;
    endGame();
  }
}

function endGame() {
  userInput.setAttribute('disabled', '');
  gameRestart.innerHTML = 'Start New Game';
  gameOver.innerHTML = `Game Over, Random number was ${randomNum}`;
  startGame();
}

function startGame() {
  gameRestart.addEventListener('click', function () {
    guesSlot.innerHTML = '';
    numGuess = 1;
    remaining.innerHTML = 11 - numGuess;
    lowOrHi.innerHTML = '';
    gameOver.innerHTML = '';
    gameRestart.innerHTML = '';
    userInput.removeAttribute('disabled');
  });
}
