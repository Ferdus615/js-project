### BlackJack Game Documentation 🃏

This documentation provides a comprehensive overview of the JavaScript code for a simple BlackJack game. It explains the purpose of each variable, constant, and function, detailing how they work together to manage the game state, user interactions, and visual updates.

***

### Constants and Variables

| Name | Type | Description |
| :--- | :--- | :--- |
| `suits` | `const` | An array of strings representing the four card suits. |
| `ranks` | `const` | An array of strings representing the card ranks from Ace to King. |
| `values` | `const` | An array of numbers corresponding to the card values in BlackJack. The `A` is `11` and `J`, `Q`, `K` are all `10`. |
| `deckOfCard` | `const` | An array that will hold all 52 card objects, each with a suit, rank, and value. |
| `pickedCard` | `const` | An array to track the indices of cards that have already been dealt from the deck, ensuring no duplicates are drawn. |
| `totalValue` | `let` | An integer variable that keeps track of the player's current score. |
| `hasBlakJack` | `let` | A boolean flag that is set to `true` if the player's total value is exactly `21`. |
| `hasBusted` | `let` | A boolean flag that is set to `true` if the player's total value exceeds `21`. |
| `isGameStarted` | `let` | A boolean flag that is set to `true` after the first cards are dealt, preventing accidental restarts. |
| `showCard`, `trackCard`, `msg` | `const` | References to HTML elements that display the most recently drawn card, all cards drawn in the round, and game-related messages, respectively. |
| `dealBtn`, `resetBtn`, `hitBtn`, `standBtn` | `const` | References to the HTML button elements used for controlling the game. |
| `alertBox` | `const` | A reference to the HTML element that serves as a custom alert or pop-up message box. |

***

### Functions

#### `createDeck()`

* **Purpose:** To create and populate the `deckOfCard` array with 52 unique card objects.
* **How it works:** It uses nested `for` loops to iterate through all combinations of `suits` and `ranks`. For each combination, it creates a card object and pushes it into the `deckOfCard` array.

#### `randomCardPicker()`

* **Purpose:** To generate a random index corresponding to a card in the `deckOfCard` array.
* **How it works:** It calculates a random number between `0` and `51` (the total number of cards in a deck) using `Math.random()`. This number is used to select a card from the `deckOfCard` array.

#### `resetGame()`

* **Purpose:** To reset the game to its initial state.
* **How it works:** It clears all game-related variables, flags, and HTML displays, and re-enables the `dealCard` button, preparing for a new round.

#### `deal()`

* **Purpose:** To deal a single, random, unique card to the player.
* **How it works:**
    * It uses a `do-while` loop to ensure a unique card is picked that hasn't been dealt yet.
    * It adds the index of the picked card to the `pickedCard` array to track it.
    * It retrieves the card object from `deckOfCard` using the generated index.
    * It updates the `showCard` and `trackCard` HTML elements with the drawn card's rank and suit.
    * It adds the card's value to `totalValue`.

#### `checkGameStatus()`

* **Purpose:** To evaluate the current state of the game based on `totalValue`.
* **How it works:** It checks if the `totalValue` is `21` (BlackJack), greater than `21` (Busted), or still in play. It then updates the `msg` HTML element and game flags accordingly.

#### `dealCardBtn()`

* **Purpose:** To handle the game's initial deal.
* **How it works:** It checks if the game has started. If not, it calls `resetGame()`, then deals two cards by calling `deal()` twice, and checks the game status. If the game has already started, it displays a custom alert.

#### `hitBtnClick()`

* **Purpose:** To handle the player's "Hit" action.
* **How it works:** If the game has started, it calls the `deal()` function to give the player another card and then calls `checkGameStatus()` to see if they've won or busted.

#### `standBtnClick()`

* **Purpose:** To handle the player's "Stand" action.
* **How it works:** It disables the `dealCard` button and displays a message confirming the player's decision to stand with their current score.

***

### Event Listeners

* **`hitBtn.addEventListener("click", hitBtnClick)`:** Listens for a click on the "Hit" button and calls the `hitBtnClick` function.
* **`standBtn.addEventListener("click", standBtnClick)`:** Listens for a click on the "Stand" button and calls the `standBtnClick` function.
* **`dealCard.addEventListener("click", dealCardBtn)`:** Listens for a click on the "Deal" button and calls the `dealCardBtn` function.
