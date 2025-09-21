# Character Counter Application Documentation 📝

This document provides an overview of the HTML and JavaScript code for a real-time character counter. It explains the purpose of the HTML elements and the JavaScript logic that calculates and displays the number of characters entered by a user in a `textarea` field.

***

### HTML Structure and Components

The HTML code defines the structure of the web page, which consists of a central container holding the title, a text area, and a status bar for the character count.

* **Main Container (`<div>`):** The outermost `div` acts as a flexible container, centering all its child elements on the page.
* **Title (`<h2>`):** Displays the heading "Character Counter."
* **Text Area (`<textarea>`):**
    * **`id="textInput"`:** Used by the JavaScript to reference the element and monitor user input.
    * **`maxlength="1500"`:** A key attribute that sets the maximum number of characters the user can type. This value is used for all calculations.
* **Status Bar (`<div>`):** This is the display area for the character counts. It contains two paragraphs:
    * **Total Count (`<p id="total">`):** Shows the current number of characters typed.
        * **`<span id="countUp">`:** Displays the **current count** of characters.
        * **`<span id="upLimit">`:** Displays the **maximum allowed characters**.
    * **Remaining Count (`<p id="left">`):** Shows the number of characters remaining.
        * **`<span id="countDown">`:** Displays the **characters left**.
        * **`<span id="downLimit">`:** Displays the **maximum allowed characters**.

***

### JavaScript Logic

The JavaScript code handles all the dynamic behavior of the character counter. It listens for user input and updates the display in real time.

#### Global Constants and Variables

| Name | Type | Description |
| :--- | :--- | :--- |
| **`input`** | `const` | A reference to the `<textarea>` element (`"textInput"`). |
| **`TotalChar`** | `const` | A reference to the `<span>` that displays the total characters typed (`"countUp"`). |
| **`RemainingChar`**| `const` | A reference to the `<span>` that displays the remaining characters (`"countDown"`). |
| **`upLimit`** | `const` | A reference to the `<span>` that displays the maximum limit for the total count (`"upLimit"`). |
| **`downLimit`**| `const` | A reference to the `<span>` that displays the maximum limit for the remaining count (`"downLimit"`). |
| **`maxChar`** | `const` | Retrieves the value of the `maxlength` attribute from the `input` element, which is **`1500`**. |
| **`total`** | `const` | A reference to the `<p>` element containing the **total character count** text. |
| **`left`** | `const` | A reference to the `<p>` element containing the **characters left** text. |

#### Initialization

* When the page loads, the script sets the initial values for the display.
* **`TotalChar.textContent`** is set to **`0`**.
* **`RemainingChar.textContent`** is set to the value of **`maxChar`** (`1500`).
* **`upLimit.textContent`** and **`downLimit.textContent`** are also set to **`maxChar`**.

#### Event Listener

* **`input.addEventListener("input", ...)`:** This is the core of the script. It listens for the `input` event on the `textarea`, which triggers every time the user types, pastes, or deletes a character.
    * Inside the event listener, it calculates **`charLen`**, the current length of the text in the `textarea`.
    * It updates the `textContent` of `TotalChar` to `charLen`.
    * It updates the `textContent` of `RemainingChar` by subtracting `charLen` from `maxChar`.
    * **Dynamic Styling:**
        * It checks if `charLen` is greater than `1350`. If it is, the color of the **total count** text changes to `#ff637e` (a shade of red) to visually alert the user they are nearing the limit. Otherwise, it remains a shade of blue (`#00bcff`).
        * It also checks if the number of **characters left** is less than `150`. If so, the color of the **remaining count** text changes to red, providing a second visual warning.
