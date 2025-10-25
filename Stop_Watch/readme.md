## JavaScript StopWatch Documentation ⏱️

This documentation provides a comprehensive overview of the JavaScript code for a simple stopwatch application. It explains the purpose of each variable, constant, and function, detailing how they work together to manage and display time.

---

### Constants and Variables

| Name | Type | Description |
| :--- | :--- | :--- |
| **`hoursDigit`** | `const` | A reference to the HTML element that displays the hours. |
| **`minutesDigit`** | `const` | A reference to the HTML element that displays the minutes. |
| **`secondsDigit`** | `const` | A reference to the HTML element that displays the seconds. |
| **`resetBtn`** | `const` | A reference to the HTML button element used to reset the timer. |
| **`pauseBtn`** | `const` | A reference to the HTML button element used to pause the timer. |
| **`startBtn`** | `const` | A reference to the HTML button element used to start or resume the timer. |
| **`hours`**, **`minutes`**, **`seconds`** | `let` | Integer variables that store the current time values for the stopwatch. They are all initialized to `0`. |
| **`intervalId`** | `let` | A variable that holds the unique ID returned by `setInterval()`. This ID is used to clear the interval and stop the timer. |
| **`isPaused`** | `let` | A boolean flag that controls the timer's state. It is `true` when the timer is paused and `false` when it's running. |
| **`isStart`** | `let` | A boolean flag that indicates whether the timer has been started at least once. This prevents the timer from auto-starting when the page loads. |

---

### Functions

#### `startTimer()`

* **Purpose:** This function is the core of the stopwatch logic. It increments the time and updates the display.
* **How It Works:**
    * It checks if the timer is **not paused** (`!isPaused`) and has **been started** (`isStart`). This ensures the time only progresses when the stopwatch is active.
    * It increments the `seconds` variable by one.
    * It checks for rollovers: if `seconds` reaches 60, it resets to 0 and increments `minutes`. The same logic applies when `minutes` reaches 60, incrementing `hours`.
    * It updates the `textContent` of the `hoursDigit`, `minutesDigit`, and `secondsDigit` elements. The `.toString().padStart(2, "0")` method is used to ensure each digit is always displayed with two characters (e.g., `5` becomes `05`), which maintains a clean, consistent look.

---

### Event Listeners

* **`startBtn.addEventListener("click", ...)`:** When the start button is clicked, it sets `isPaused` to `false` and `isStart` to `true`. It then calls `setInterval(startTimer, 1000)`, which begins calling the `startTimer` function every 1000 milliseconds (1 second). This starts or resumes the stopwatch.

* **`pauseBtn.addEventListener("click", ...)`:** When the pause button is clicked, it sets `isPaused` to `true`. It then calls `clearInterval(intervalId)`, which stops the `startTimer` function from being called, effectively pausing the stopwatch.

* **`resetBtn.addEventListener("click", ...)`:** When the reset button is clicked, it performs a complete reset:
    * It clears the interval using `clearInterval(intervalId)` to stop the timer.
    * It resets the `hours`, `minutes`, and `seconds` variables back to `0`.
    * It resets the boolean flags `isPaused` and `isStart` to `false`.
    * Finally, it updates the display elements to show `"00:00:00"`.
