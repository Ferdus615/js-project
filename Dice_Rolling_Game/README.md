# This is Simple & Relaxing DICE ROLLING GAME.

Here you can select any number of Dice and Roll.
A random number will be generated from 1-6 and a image of that side of the Dice will also be visible below.
It is very relaxing to Roll the dices and see the number and there corrosponding sides image.

"The images were Designed by ME to give a very nutral and relaxing feeling with a little destaturated color and rounded edge and a symmetrical dot position."

# JUST TRY THE GAME!





# JavaScript Dice Roller Documentation 🎲

This documentation outlines the JavaScript code for a simple dice rolling application. It details how the function gathers user input, simulates the dice roll, and dynamically updates the web page with both the numerical results and corresponding dice images.

---

## Functions

### `rollDice()`

* **Purpose:** This is the main function that runs when the user initiates a dice roll. It manages the entire process from taking input to displaying the output.

* **How It Works:**
    1.  **Get User Input:** It retrieves the number of dice the user wants to roll from the HTML input element with the ID `numOfDice`.
    2.  **Get HTML References:** It gets references to the `diceResult` and `diceImages` HTML elements, where the results will be displayed.
    3.  **Initialize Arrays:** It creates two empty arrays: `diceValues` to store the numerical results of each roll and `imagesOfDice` to store the HTML `<img>` tags for the corresponding dice images.
    4.  **Simulate Rolls:** It uses a **`for` loop** to simulate the number of dice specified by the user. In each iteration:
        * It generates a random integer between 1 and 6 using `Math.random()`.
        * It pushes the generated number into the `diceValues` array.
        * It creates an HTML `<img>` tag with a source pointing to the corresponding image file (e.g., `dice/5.png`) and pushes this tag into the `imagesOfDice` array.
    5.  **Display Results:**
        * It updates the `textContent` of the `diceResult` element by joining the `diceValues` array into a single string (e.g., "Dice: 4, 2, 6").
        * It updates the `innerHTML` of the `diceImages` element by joining the `imagesOfDice` array. This effectively injects the dice images directly into the HTML, making them visible on the page.
