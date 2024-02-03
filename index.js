function getRandomInt(min, max) {
  min = Math.ceil(min); // Ensure min is rounded up to the nearest integer
  max = Math.floor(max); // Ensure max is rounded down to the nearest integer
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
let h1Text = document.querySelector(".h1");
let button = document.querySelector(".button");

button.addEventListener("click", diceGame);

function diceGame() {
  let playerOneRandomDiceValue = getRandomInt(1, 6);
  let playerTwoRandomDiceValue = getRandomInt(1, 6);
  let platerOneDiceImage = document.querySelector(".img1");
  let platerTwoDiceImage = document.querySelector(".img2");

  platerOneDiceImage.setAttribute(
    "src",
    "./images/dice" + playerOneRandomDiceValue + ".png"
  );

  platerTwoDiceImage.setAttribute(
    "src",
    "./images/dice" + playerTwoRandomDiceValue + ".png"
  );

  if (playerOneRandomDiceValue > playerTwoRandomDiceValue) {
    h1Text.innerText = "Player 1 Wins! 🚩";
  } else if (playerOneRandomDiceValue < playerTwoRandomDiceValue) {
    h1Text.innerText = "Player 2 Wins! 🚩";
  } else {
    h1Text.innerText = "It's a Tie! 🚩";
  }
}
