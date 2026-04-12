let timer;
let timeLeft = 0;
let isRunning = false;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("display").innerText =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;

    let input = document.getElementById("minutes").value;

    if (timeLeft === 0) {
        timeLeft = parseInt(input) * 60;

        if (isNaN(timeLeft) || timeLeft <= 0) {
            alert("Enter a valid number of minutes");
            return;
        }
    }

    isRunning = true;

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("Time's up!");
            isRunning = false;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 0;
    isRunning = false;
    updateDisplay();
}