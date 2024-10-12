let score = 0;
let timeLeft = 10;
let timer;

const clickButton = document.getElementById("clickButton");
const scoreBoard = document.getElementById("scoreBoard");
const timerDisplay = document.getElementById("timer");

// Funkce pro začátek hry
function startGame() {
    score = 0;
    timeLeft = 10;
    scoreBoard.textContent = `Skóre: ${score}`;
    timerDisplay.textContent = `Čas: ${timeLeft}`;

    clickButton.disabled = false; // Aktivuje tlačítko
    clickButton.style.display = "inline-block"; // Zobrazí tlačítko
    clickButton.focus(); // Zaměří tlačítko

    timer = setInterval(updateTimer, 1000); // Spustí odpočet
}

// Funkce pro aktualizaci času
function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = `Čas: ${timeLeft}`;
    
    if (timeLeft <= 0) {
        endGame();
    }
}

// Funkce pro kliknutí na tlačítko
clickButton.addEventListener("click", function() {
    score++;
    scoreBoard.textContent = `Skóre: ${score}`;
});

// Funkce pro ukončení hry
function endGame() {
    clearInterval(timer);
    clickButton.disabled = true; // Deaktivuje tlačítko
    alert(`Hra skončila! Tvoje konečné skóre je: ${score}`);
    clickButton.style.display = "none"; // Skryje tlačítko
}

// Spustí hru při načtení
startGame();
