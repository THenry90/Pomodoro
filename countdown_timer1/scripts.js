

// Get references to DOM elements
const timerDisplay = document.getElementById('timer-display');
const timerPhase = document.getElementById('timer-phase');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Initial timer values
let secondsRemaining = 1500; // 25 minutes in seconds
let isTimerRunning = false;
let intervalId; // To store the interval ID for stopping the timer

// Update the timer display
function updateTimerDisplay() {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Start the timer
function startTimer() {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timerPhase.textContent = 'Work';
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;

    intervalId = setInterval(() => {
      if (secondsRemaining > 0) {
        secondsRemaining--;
        updateTimerDisplay();
      } else {
        clearInterval(intervalId);
        isTimerRunning = false;
        timerPhase.textContent = 'Done!';
        startButton.disabled = false;
        stopButton.disabled = true;
        resetButton.disabled = false;
      }
    }, 1000);
  }
}

// Stop the timer
function stopTimer() {
  clearInterval(intervalId);
  isTimerRunning = false;
  timerPhase.textContent = 'Paused';
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

// Reset the timer
function resetTimer() {
  clearInterval(intervalId);
  isTimerRunning = false;
  secondsRemaining = 1500;
  updateTimerDisplay();
  timerPhase.textContent = 'Work';
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

// Event listeners
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);