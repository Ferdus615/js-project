# Tic-Tac-Toe Game Logic Documentation 🎮

This document provides a comprehensive overview of the JavaScript code for a simple Tic-Tac-Toe game. It explains the purpose of each variable, constant, and function, detailing how they work together to manage the game state, user interactions, and visual updates.

---

## Constants and Variables

| Name | Type | Description |
| :--- | :--- | :--- |
| `Box_container` | `const` | A reference to the HTML element with the ID `boxs`. This is the main container for the game board's individual boxes. |
| `Boxes` | `const` | A `NodeList` of all `div` elements within the `Box_container`. Each `div` represents a single cell on the Tic-Tac-Toe grid. |
| `ResetBtn` | `const` | A reference to the HTML element with the ID `reset`. This button is used to start a new game. |
| `UpdateText` | `const` | A reference to the HTML element with the ID `update`. This element displays messages to the user, such as whose turn it is, who won, or if the game is a draw. |
| `gameBoard` | `let` | An array of 9 empty strings (`""`) that represents the game board's state. The indices correspond to the game boxes, and the values are updated to `"✖"` or `"𐤏"` as players make moves. |
| `isGameActive` | `let` | A boolean flag that controls the game's activity. It is `true` when the game is in progress and `false` when it's over (either due to a win, a draw, or before the game starts). |
| `currentPlayer` | `let` | A string that holds the symbol of the current player, initially set to `"✖"`. It toggles between `"✖"` and `"𐤏"` with each turn. |
| `winConditions` | `const` | An array of arrays, where each inner array contains three indices representing a winning combination on the game board (rows, columns, and diagonals). This is used by the `checkWinner` function to determine if a player has won. |

---

## Event Listeners

The code sets up several event listeners to handle user interaction:

* **`Boxes.forEach(...)`:** This loop adds a `click` event listener to each box on the game board. When a box is clicked, the following logic is executed:
    * It first checks if `isGameActive` is `true` and if the clicked box is empty (`e.target.textContent === ""`).
    * If the conditions are met, it updates the `gameBoard` array and the box's `textContent` with the `currentPlayer`'s symbol.
    * It then switches the `currentPlayer`.
    * It calls the `checkWinner()` function to see if the current move resulted in a win.
    * If there's a winner, it updates the `UpdateText` message, sets `isGameActive` to `false`, and highlights the winning boxes in "aqua".
    * If there's no winner, it checks for a draw by seeing if the `gameBoard` array no longer contains any empty strings. If it's a draw, it updates the `UpdateText` and sets `isGameActive` to `false`.
    * If the game is still active, it updates the `UpdateText` to indicate whose turn it is next.

* **`box.addEventListener("mouseover", ...)`:** This listener is added to each box. When a user hovers their mouse over a box, and the game is active, the box's background color changes to "orange". This provides visual feedback to the user.

* **`box.addEventListener("mouseout", ...)`:** This listener reverts the box's background color back to "hotpink" when the mouse moves off the box, as long as the game is active.

* **`ResetBtn.addEventListener("click", ...)`:** This listener is added to the reset button. When clicked, it calls the `reset()` function, sets the `currentPlayer` back to `"✖"`, sets `isGameActive` to `true`, and updates the `UpdateText` to signal the start of a new game.

---

## Functions

### `checkWinner()`

* **Purpose:** This function determines if a player has won the game.
* **How it works:** It iterates through the `winConditions` array. For each condition (e.g., `[0, 1, 2]`), it checks if the corresponding cells in the `gameBoard` array are all non-empty and contain the same symbol.
* **Return Value:**
    * If a winner is found, it returns an object `{ winner: string, winningArray: Array }` containing the winning player's symbol and the indices of the winning boxes.
    * If no winner is found, it returns `null`.

### `reset()`

* **Purpose:** This function resets the game to its initial state.
* **How it works:**
    * It iterates through the `gameBoard` array and resets all its elements to an empty string `""`.
    * It then iterates through the `Boxes` (the HTML elements), clearing their `textContent` and resetting their `backgroundColor` to "hotpink".

This structured approach makes the code easy to understand, maintain, and debug, ensuring that the game's state and visual representation are always synchronized.
