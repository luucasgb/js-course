"use strict";

//Get buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentDice = document.querySelector(".dice");
const pl0 = document.querySelector(".player--0");
const pl1 = document.querySelector(".player--1");

//Player object
var player = {
  isActive: false,
  currentScore: 0,
  totalScore: 0,
};

//Player instances
var player1 = Object.create(player);
var player2 = Object.create(player);

//Game variables
let activePlayer = player1;

//Pre-game setup
player1.isActive = true;

//Game functionality
const holdScore = () => {
  setTotalScore();
  resetCurrentScore(activePlayer);
  displayCurrentScore(activePlayer);
  if (activePlayer.totalScore >= 100) {
    winGame(activePlayer);
  } else {
    activePlayer = switchActivePlayer();
  }
};

const rollDice = () => {
  const value = Math.trunc(Math.random() * 6 + 1);
  displayDice(value);
  if (value === 1) {
    resetCurrentScore(activePlayer);
    displayCurrentScore(activePlayer);
    activePlayer = switchActivePlayer();
  } else {
    setCurrentScore(value);
  }
};

const displayDice = (value) => {
  if (currentDice.classList.contains("hidden"))
    currentDice.classList.remove("hidden");
  currentDice.src = `dice-${value}.png`;
};

const setCurrentScore = (value) => {
  activePlayer.currentScore += value;
  displayCurrentScore(activePlayer);
};

const displayCurrentScore = (player) => {
  if (player === player1) {
    document.getElementById("current--0").textContent =
      activePlayer.currentScore;
  } else {
    document.getElementById("current--1").textContent =
      activePlayer.currentScore;
  }
};

const setTotalScore = () => {
  activePlayer.totalScore += activePlayer.currentScore;
  if (activePlayer === player1) {
    document.getElementById("score--0").textContent = activePlayer.totalScore;
  } else {
    document.getElementById("score--1").textContent = activePlayer.totalScore;
  }
};

const switchActivePlayer = () => {
  player1.isActive = !player1.isActive;
  player2.isActive = !player2.isActive;
  if (player1.isActive) {
    pl0.classList.add("player--active");
    pl1.classList.remove("player--active");
    return player1;
  } else {
    pl0.classList.remove("player--active");
    pl1.classList.add("player--active");
    return player2;
  }
};

const newGame = () => {
  currentDice.classList.add("hidden");
  resetScore(player1);
  resetScore(player2);
  resetDisplayedScore();
  resetWinnerStatus();
  player.isActive = true;
  if (activePlayer === player2) {
    activePlayer = switchActivePlayer();
  }
  currentDice.classList.add(".hidden");
};

const resetScore = (player) => {
  player.totalScore = 0;
  player.currentScore = 0;
};

const resetCurrentScore = (player) => {
  player.currentScore = 0;
};

const resetDisplayedScore = () => {
  document.getElementById("score--0").textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  document.getElementById("current--1").textContent = 0;
};

const winGame = (player) => {
  if (player === player1) {
    pl0.classList.add("player--winner");
  } else {
    pl1.classList.add("player--winner");
  }
};

const resetWinnerStatus = () => {
  if (pl0.classList.contains("player--winner"))
    pl0.classList.remove("player--winner");
  if (pl1.classList.contains("player--winner"))
    pl1.classList.remove("player--winner");
};

//Event Listeners
btnNew.addEventListener("click", newGame);
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdScore);

newGame();
