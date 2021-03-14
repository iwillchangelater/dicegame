var activePlayer = 1;
var scores = [0, 0];
var roundScore = 0;
var dice = Math.floor(Math.random() * 6) + 1;
const score1 = document.getElementById("score-0"),
    score2 = document.getElementById("score-1"),
    diceImg = document.querySelector(".dice"),
    current1 = document.getElementById("current-0"),
    current2 = document.getElementById("current-1");

function reset() {
    score1.textContent = 0;
    score2.textContent = 0;
    diceImg.style.display = "none";
    current1.textContent = 0;
    current2.textContent = 0;
    console.log("game reseted");
}
window.onload = reset();