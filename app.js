var activePlayer = 0; // idewhtei toglogch 
var scores = [0, 0]; // onoonii haritsaa
var roundScore = 0; // neg uyiin onoo
var rollBtn = document.querySelector(".btn-roll"); // roll hiih towch
const diceImg = document.querySelector(".dice"),
    diceImg2 = document.querySelector(".dice2"),
    holdBtn = document.querySelector(".btn-hold"),
    newGameBtn = document.querySelector(".btn-new");

function reset() {
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove('winner');
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;
    document.getElementById("name-0").textContent = "PLAYER 1";
    document.getElementById("name-1").textContent = "PLAYER 2";

    document.getElementById("score-1").textContent = 0;
    document.getElementById("score-0").textContent = 0;
    diceImg.style.display = "none";
    diceImg2.style.display = "none";
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    console.log("game reseted");
}
window.onload = reset();
rollBtn.onclick = () => {
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1; // shoonii code
    diceImg.style.display = "block";
    diceImg2.style.display = "block";
    diceImg.src = "dice-" + dice + ".png";
    diceImg2.src = "dice-" + dice2 + ".png";
    if (dice !== 1 && dice2 !== 1) {
        roundScore += dice + dice2;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        switchPlayer();
    }
}
holdBtn.onclick = () => {
    scores[activePlayer] += roundScore;
    if (scores[activePlayer] >= 10) {
        document.getElementById("name-" + activePlayer).textContent = "WINNER";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add('winner');
        isGameOver = true; // togloom duussan tolowt orj bn 
    } else {
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
        switchPlayer();
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
    diceImg2.style.display = "none";
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}