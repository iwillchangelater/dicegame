var isGameOver = false; // togloom duussan esehiig shalgana
var activePlayer = 0; // idewhtei toglogch 
var scores = [0, 0]; // onoonii haritsaa
var roundScore = 0; // neg uyiin onoo
var rollBtn = document.querySelector(".btn-roll"); // roll hiih towch
const diceImg = document.querySelector(".dice"),
    holdBtn = document.querySelector(".btn-hold"),
    newGameBtn = document.querySelector(".btn-new");

function reset() {
    isGameOver = false;
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove('winner');
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;
    document.getElementById("name-0").textContent = "PLAYER 1";
    document.getElementById("name-1").textContent = "PLAYER 2";

    document.getElementById("score-1").textContent = 0;
    document.getElementById("score-0").textContent = 0;
    diceImg.style.display = "none";
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    console.log("game reseted");
}
window.onload = reset();
rollBtn.onclick = () => {
    if (!isgameover) {
        var dice = Math.floor(Math.random() * 6) + 1; // shoonii code
        diceImg.style.display = "block";
        diceImg.src = "dice-" + dice + ".png";
        if (dice !== 1) {
            roundScore += dice;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else {
            switchPlayer();
        }
    }
}
holdBtn.onclick = () => {
    if (isgameover) {
        scores[activePlayer] += roundScore;
        if (scores[activePlayer] >= 10) {
            document.getElementById("name-" + activePlayer).textContent = "WINNER";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add('winner');
            isgameover = true; // togloom duussan tolowt orj bn 
        } else {
            document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
            switchPlayer();
        }
    }
}
newGameBtn.onclick = () => {
    reset();
}

function switchPlayer() {
    document.getElementById("current-" + activePlayer).textContent = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceImg.style.display = "none";
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}