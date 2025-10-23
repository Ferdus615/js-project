# JavaScript Counter App Documentation 🔢

This document provides a breakdown of the JavaScript code for a simple counter application. It explains the purpose and functionality of each variable and function, showing how they work together to manage and display a numerical count.

---

## Global Variable

| Name | Type | Description |
| :--- | :--- | :--- |
| `count` | `let` | An integer variable that stores the current numerical value of the counter. It's initialized to `0` and is updated by the various functions. |

---

## Functions

### `increment()`

* **Purpose:** To increase the counter's value by one.
* **How it works:**
    * It adds `1` to the global `count` variable.
    * It then updates the text content of the HTML element with the ID `counter` to display the new `count`.

### `decrement()`

* **Purpose:** To decrease the counter's value by one, but only if the value is greater than zero.
* **How it works:**
    * It uses an `if` statement to check if the current `count` is greater than `0`.
    * If the condition is met, it subtracts `1` from the `count`.
    * It then updates the `counter` display to reflect the new value.

### `save()`

* **Purpose:** To save the current counter value to a list.
* **How it works:**
    * It gets a reference to the HTML element with the ID `savedCounts`, which is the container for the saved list items.
    * It creates a new `<li>` (list item) element using `document.createElement("li")`.
    * It sets the `innerText` of the new list item to the current `count`.
    * Finally, it appends the new list item to the `savedCounts` container.

### `reset()`

* **Purpose:** To clear the counter and the saved list.
* **How it works:**
    * It resets the `count` variable back to `0`.
    * It updates the `counter` display to show `0`.
    * It clears the entire content of the `savedCounts` list by setting its `innerHTML` to an empty string, effectively removing all previously saved entries.
