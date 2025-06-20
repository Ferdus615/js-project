// const randomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const generatedCard = [];

const suits = ["♧", "♢", "♡", "♤"];
const ranks = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

// Create a deck of cards
// Each card is represented as an object with suit, rank, and value properties
const deckOfCard = [];
const createDeck = () => {
  for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
    for (let ranksIndex = 0; ranksIndex < ranks.length; ranksIndex++) {
      const card = {
        suit: suits[suitsIndex],
        rank: ranks[ranksIndex],
        value: values[ranksIndex],
      };
      deckOfCard.push(card); // Push the card object directly into the deck
    }
  }
};
createDeck(); // Populates the deck of cards
// console.log(deckOfCard);
// console.log(deckOfCard.length);

const pickedCard = []; // Array to keep track of picked cards

// Function to pick a random card from the deck
const randomCardPicker = () => {
  return Math.floor(Math.random() * (suits.length * ranks.length)); // It generates a random index based on the total number of cards in the deck
};

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
  showCard.textContent = ""; // Clear the displayed card
  trackCard.textContent = ""; // Clear the dealt cards
  msg.textContent = ""; // Clear the message
  dealCard.disabled = false; // Enable the deal card button
};

// Function to deal a card & It picks a random card from the deck and updates the game state
const deal = () => {
  let chooseCard;

  // loops until unique card is picked or all the cards are picked
  do {
    chooseCard = randomCardPicker();
  } while (
    pickedCard.includes(chooseCard) &&
    pickedCard.length < deckOfCard.length
  );

  if (pickedCard.length === deckOfCard.length) {
    console.log("All the Card are drawn!");
    return; // exit the fuction
  }

  console.log(`Chooseed Card: ${chooseCard}`);

  pickedCard.push(chooseCard); // Add the picked card to the array
  console.log(`pickedCard: ${pickedCard}`);

  const drawCard = deckOfCard[chooseCard]; // Get the drawn card using the last picked index
  const drawnCardFace = `${drawCard.rank} of ${drawCard.suit}`; // Display the drawn card
  console.log(`drawCard: ${drawnCardFace}`);

  showCard.textContent = drawnCardFace;
  console.log(`Shown Card: ${showCard.textContent}`);

  trackCard.textContent += `${drawnCardFace}, `; // Track the dealt cards
  console.log(`Cards Drawn: ${trackCard.textContent}`);

  totalValue += drawCard.value;
  console.log(`Total Value: ${totalValue}`);
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
    checkGameStatus();
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
