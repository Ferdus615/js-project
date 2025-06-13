const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + 1);
};

const generatedCard = [];
let totalValue = 0;

const showCard = document.getElementById("showCard");
const trackCard = document.getElementById("trackCard");
const msg = document.getElementById("msg");

const dealCard = () => {
  const newCard = randomNumber(1, 13);
  showCard.textContent = newCard;

  //   const allDealtCard = generatedCard.push(newCard);
  //   trackCard.textContent = allDealtCard; //shows the number of cards dealt, not the cards themselves

  switch (newCard) {
    case 1:
      generatedCard.push((showCard.textContent = "A"));
      break;
    case 2:
      generatedCard.push((showCard.textContent = "2"));
      break;
    case 3:
      generatedCard.push((showCard.textContent = "3"));
      break;
    case 4:
      generatedCard.push((showCard.textContent = "4"));
      break;
    case 5:
      generatedCard.push((showCard.textContent = "5"));
      break;
    case 6:
      generatedCard.push((showCard.textContent = "6"));
      break;
    case 7:
      generatedCard.push((showCard.textContent = "7"));
      break;
    case 8:
      generatedCard.push((showCard.textContent = "8"));
      break;
    case 9:
      generatedCard.push((showCard.textContent = "9"));
      break;
    case 10:
      generatedCard.push((showCard.textContent = "10"));
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
      generatedCard.push((showCard.textContent = "Error"));
      break;
  }

  trackCard.textContent = generatedCard.join(", "); // shows the dealt cards
  console.log(generatedCard);

  totalValue += newCard;
  console.log(totalValue);

  if (totalValue === 21) {
    alert("Blackjack!");

    totalValue = 0; // Reset totalValue after bust
    generatedCard.length = 0; // Clear the dealt cards
    showCard.textContent = ""; // Clear the displayed card
    trackCard.textContent = ""; // Clear the tracked cards
  } else if (totalValue > 21) {
    alert("Bust!");

    totalValue = 0; // Reset totalValue after bust
    generatedCard.length = 0; // Clear the dealt cards
    showCard.textContent = ""; // Clear the displayed card
    trackCard.textContent = ""; // Clear the tracked cards
  }
};
