"use strict";

let answer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const setMessage = (msg) => {
  document.querySelector(".message").textContent = msg;
};

const setnumber = (number) => {
  document.querySelector(".number").textContent = answer;
};

//click on Check button
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (score > 0) {
    if (guess === 0) {
      setMessage("🔢 Guess a number!");
    } else if (guess === answer) {
      setMessage("🍾 You guessed it!");
      document.querySelector("body").style.backgroundColor = "#60b347";
      setnumber(answer);
      document.querySelector(".number").style.width = "30rem";
      if (score > highScore) {
        highScore = score;
      }
      document.querySelector(".highscore").textContent = highScore;
    } else if (guess > answer && guess <= 20) {
      if (score > 1) {
        setMessage("📈 Your guess is too high!");
        document.querySelector(".score").textContent = --score;
      } else {
        setMessage("💣 You lost the game");
        setnumber(answer);
        document.querySelector(".score").textContent = --score;
        document.querySelector("body").style.backgroundColor = "#C21010";
      }
    } else if (guess < answer && guess > 0) {
      if (score > 1) {
        setMessage("📉 Your guess it too low!");
        document.querySelector(".score").textContent = --score;
      } else {
        setMessage("💣 You lost the game");
        document.querySelector(".score").textContent = --score;
        document.querySelector("body").style.backgroundColor = "#C21010";
        setnumber(answer);
      }
    } else if (guess > 20 || guess < 0) {
      setMessage("❔ Out of bounds!");
    }
  }
});

//click on Again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  answer = Math.trunc(Math.random() * 20) + 1;
  setMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").style.width = "15rem";
});
