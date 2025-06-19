const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generatedCard = [];
let totalValue = 0;
let hasBlakJack = false;
let hasBusted = false;
let isGameStarted = false;

const showCard = document.getElementById("showCard");
const trackCard = document.getElementById("trackCard");
const msg = document.getElementById("msg");
const dealCard = document.getElementById("dealBtn");
const resetBtn = document.getElementById("resetGame");
const alertBox = document.getElementById("customAlertBox");
const hitBtn = document.getElementById("hitBtn");
const standBtn = document.getElementById("standBtn");

// the reset button
const resetGame = () => {
  totalValue = 0; // Reset totalValue
  hasBlakJack = false; // Reset the blackjack flag
  hasBusted = false; // Reset the busted flag
  isGameStarted = false; // Reset the game state
  generatedCard.length = 0; // Clear the dealt cards
  showCard.textContent = ""; // Clear the displayed card
  trackCard.textContent = ""; // Clear the dealt cards
  msg.textContent = ""; // Clear the message
  dealCard.disabled = false; // Enable the deal card button
};

const deal = () => {
  const newCardNum = randomNumber(1, 13); // Generate a random card value between 1 and 13
  let cardRealValue; // Initialize cardValue with the newCardNum value
  let cardSymbol; // Initialize cardsymbol to store the card suit
  const cardSuit = randomNumber(1, 4); // Generate a random suit value between 1 and 4
  let cardSuitSymbol; // Initialize cardSuitSymbol to store the card suit symbol

  switch (cardSuit) {
    case 1:
      cardSuitSymbol = "♠"; // Spades
      break;
    case 2:
      cardSuitSymbol = "♥"; // Hearts
      break;
    case 3:
      cardSuitSymbol = "♦"; // Diamonds
      break;
    case 4:
      cardSuitSymbol = "♣"; // Clubs
      break;
    default:
      cardSuitSymbol = "?"; // Unknown suit
      break;
  }

  switch (newCardNum) {
    case 1:
      cardRealValue = 11; // Ace is worth 11 points
      cardSymbol = "A"; // Assign a suit symbol (e.g., Spades)
      break;
    case 11:
      cardRealValue = 10; // Jack is worth 10 points
      cardSymbol = "J"; // Assign a suit symbol (e.g., Hearts)
      break;
    case 12:
      cardRealValue = 10; // Queen is worth 10 points
      cardSymbol = "Q"; // Assign a suit symbol (e.g., Hearts)
      break;
    case 13:
      cardRealValue = 10; // King is worth 10 points
      cardSymbol = "K"; // Assign a suit symbol (e.g., Hearts)
      break;
    default:
      cardRealValue = newCardNum; // King is worth 10 points
      cardSymbol = String(newCardNum); // Assign a suit symbol (e.g., Hearts)
      break;
  }

  cardSymbol = `${cardSymbol}${cardSuitSymbol}`; // Combine the card symbol with its suit symbol
  generatedCard.push(cardSymbol); // Add the card symbol to the generatedCard array

  totalValue += cardRealValue; // Add the value of the new card to totalValue
  console.log(totalValue);

  

  showCard.textContent = cardSymbol; // shows the last dealt card

  trackCard.textContent = generatedCard.join(", "); // shows the dealt cards
  console.log(generatedCard);
};

const checkGameStatus = () => {
  if (totalValue === 21) {
    hasBlakJack = true; // Set the blackjack flag
    msg.textContent = "Blackjack! You win!";
    dealCard.disabled = true; // Disable the deal card button
  } else if (totalValue > 21) {
    hasBusted = true;
    msg.textContent = "Busted! Total value exceeded 21.";
    dealCard.disabled = true; // Disable the deal card button
    alertBox.style.display = "none"; // Show the alert box
  } else {
    msg.textContent = `Current total value: ${totalValue}`;
  }
};

// Card dealing button
const dealCardBtn = () => {
  if (!isGameStarted) {
    resetGame(); // Reset the game state if it hasn't started
    deal();
    deal();
    isGameStarted = true; // Set the game as started
  } else {
    alertBox.style.display = "flex";
  }
};

//let isHitClicked = false; // Flag to track if the hit button has been clicked

const hitBtnClick = () => {
  if (isGameStarted) {
    deal(); // Deal a new card
    checkGameStatus(); // Check the game status after dealing a new card
    isHitClicked = true; // Set the hit button as clicked
  }

  alertBox.style.display = "none";
};

const standBtnClick = () => {
  dealCard.disabled = true; // Disable the deal card button
  msg.textContent = `You chose to stand with a total value of ${totalValue}.`;
  alertBox.style.display = "none"; // Hide the alert box
};

// Event listeners for buttons
hitBtn.addEventListener("click", hitBtnClick);
standBtn.addEventListener("click", standBtnClick);
