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
const dealCard = document.getElementById("dealbtn");
const resetBtn = document.getElementById("resetGame");

// the reset button
const resetGame = () => {
  totalValue = 0; // Reset totalValue
  generatedCard.length = 0; // Clear the dealt cards
  showCard.textContent = ""; // Clear the displayed card
  trackCard.textContent = ""; // Clear the tracked cards
  hasBlakJack = false; // Reset the blackjack flag
  dealCard.disabled = false; // Enable the deal card button
};

const deal = () => {
  const newCard = randomNumber(1, 13); // Generate a random card value between 1 and 13
  showCard.textContent = newCard;

  switch (newCard) {
    case 1:
      generatedCard.push((showCard.textContent = "A"));
      break;
    case 11:
      generatedCard.push((showCard.textContent = "J"));
      break;
    case 12:
      generatedCard.push((showCard.textContent = "Q"));
      break;
    case 13:
      generatedCard.push((showCard.textContent = "K"));
      break;
    default:
      generatedCard.push((showCard.textContent = newCard));
      break;
  }

  trackCard.textContent = generatedCard.join(", "); // shows the dealt cards
  console.log(generatedCard);

  totalValue += newCard; // Add the value of the new card to totalValue
  console.log(totalValue);
};

// Card dealing button
const dealCardBtn = () => {
  if (isGameStarted) {
    deal();
    if (totalValue === 21) {
      hasBlakJack = true; // Set the blackjack flag
      alert("Blackjack! You win!");
      dealCard.disabled = true; // Disable the deal card button
    } else if (totalValue > 21) {
      hasBusted = true;
      alert("Busted! Total value exceeded 21.");
    } else {
      alert(`Current total value: ${totalValue}`);
    }
  } else {
    deal();
    deal();
    isGameStarted = true; // Set the game as started
  }

  if (hasBusted || hasBlakJack) {
    dealCard.disabled = true; // Disable the deal card button if the game is over
  }
};
