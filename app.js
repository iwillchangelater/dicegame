var activePlayer = 0; // idewhtei toglogch 
var scores = [0, 0]; // onoonii haritsaa
var roundScore = 0; // neg uyiin onoo
var rollBtn = document.querySelector(".btn-roll"); // roll hiih towch
const diceImg = document.querySelector(".dice");

function reset() {
    document.getElementById("score-1").textContent = 0;
    document.getElementById("score-0").textContent = 0;
    diceImg.style.display = "none";
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    console.log("game reseted");
}
window.onload = reset();
rollBtn.onclick = () => {
    var dice = Math.floor(Math.random() * 6) + 1; // shoonii code
    diceImg.style.display = "block";
    diceImg.src = "dice-" + dice + ".png";
    if (dice !== 1) {
        roundScore += dice;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        document.getElementById("current-" + activePlayer).textContent = 0;
        document.getElementById("score-" + activePlayer).textContent = Number(document.getElementById("score-" + activePlayer).textContent) + roundScore;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    }


}