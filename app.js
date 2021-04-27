"use strict";

// Game values
let min = 1,
  max = 10,
  winnningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI ELEMENTS
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`please Enter a number between ${min} and ${max}`, "red");
  }

  if (guess === winnningNum) {
    gameOver(true, `${winnningNum} is correct, You Win!!!`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      guessInput.disabled = true;
      guessInput.style.borderColor = "red";
      setMessage(
        `Game Over, you lost. The correct number was ${winnningNum} `,
        "green"
      );
    } else {
      gameOver(false, `${guess} is not correct, ${guessesLeft} guesses Left`);
    }
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  guessBtn.value = "play again";
  guessBtn.className = msg;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
