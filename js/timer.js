let timer;
let time = 0; // Time in seconds
let isRunning = false;
let isPaused = false;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const continueButton = document.getElementById("continue");
const stopButton = document.getElementById("stop");

// Function to update the timer display
function updateDisplay() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    display.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        isPaused = false;
        timer = setInterval(()=> {
            time++;
            updateDisplay();
        }, 1000);
        startButton.style.display = "none";
        pauseButton.style.display = "inline-block";
        stopButton.style.display = "inline-block";
    }
}

// Function to pause the timer
function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        isPaused = true;
        pauseButton.style.display = "none";
        continueButton.style.display = "inline-block";
    }
}

// Function to continue the timer
function continueTimer() {
    if (isPaused) {
        isRunning = true;
        isPaused = false;
        timer = setInterval(()=> {
            time++;
            updateDisplay();
        }, 1000);
        continueButton.style.display = "none";
        pauseButton.style.display = "inline-block";
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    isPaused = false;
    time = 0;
    updateDisplay();
    startButton.style.display = "inline-block";
    pauseButton.style.display = "none";
    continueButton.style.display = "none";
    stopButton.style.display = "none";
}

// Event listeners for buttons
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
continueButton.addEventListener("click", continueTimer);
stopButton.addEventListener("click", stopTimer);