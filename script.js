let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
    document.querySelector(".score").textContent = score;
};

const displayHighscore = function (highscore) {
    document.querySelector(".highscore").textContent = highscore;
};

const displayNumber = function (number) {
    document.querySelector(".number").textContent = number;
};

const displayBackground = function (backgroundColor) {
    document.body.style.backgroundColor = backgroundColor;
};

const checkGuess = function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        displayMessage("❌ Sem Número");
    } else if (guess === secretNumber) {
        displayMessage("🎉 Número Correto! 🎉");
        displayBackground("#095906");
        displayNumber(secretNumber);

        if (score > highscore) {
            highscore = score;
            displayHighscore(highscore);
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Muito alto!" : "📉 Muito baixo!");
            score--;
            displayScore(score);
        } else {
            displayMessage("💥 Você perdeu o jogo!");
            displayScore(0);
            displayBackground("firebrick");
        }
    }
};

document.querySelector(".check").addEventListener("click", checkGuess);

document.querySelector(".guess").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Comece...");
    displayScore(score);
    displayNumber("?");
    document.querySelector(".guess").value = "";
    displayBackground("black");
});
