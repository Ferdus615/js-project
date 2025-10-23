const hoursDigit = document.getElementById("hours");
const minutesDigit = document.getElementById("minutes");
const secondsDigit = document.getElementById("seconds");

const resetBtn = document.getElementById("resetBtn");
const pauseBtn = document.getElementById("pauseBtn");
const startBtn = document.getElementById("startBtn");

let hours = 0;
let minutes = 0;
let seconds = 0;

let intervalId;
let isPaused = false;
let isStart = false;

function startTimer() {
  if (!isPaused && isStart) {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  hoursDigit.textContent = hours.toString().padStart(2, "0");
  minutesDigit.textContent = minutes.toString().padStart(2, "0");
  secondsDigit.textContent = seconds.toString().padStart(2, "0");
}

intervalId = setInterval(startTimer, 1000);

startBtn.addEventListener("click", function () {
  isPaused = false;
  isStart = true;
  intervalId = setInterval(startTimer, 1000);
});

pauseBtn.addEventListener("click", function () {
  isPaused = true;
  clearInterval(intervalId);
});

resetBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  hours = 0;
  minutes = 0;
  seconds = 0;
  isPaused = false;
  isStart = false;
  hoursDigit.textContent = "00";
  minutesDigit.textContent = "00";
  secondsDigit.textContent = "00";
});
