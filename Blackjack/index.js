const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + 1);
};

const showCard = document.getElementById("showCard");
const dealcard = () => {
  const newCard = randomNumber(1, 13);
  showCard.textContent = newCard;

  switch (newCard) {
    case 1:
      showCard.textContent = "A";
      break;
    case 2:
      showCard.textContent = "2";
      break;
    case 3:
      showCard.textContent = "3";
      break;
    case 4:
      showCard.textContent = "4";
      break;
    case 5:
      showCard.textContent = "5";
      break;
    case 6:
      showCard.textContent = "6";
      break;
    case 7:
      showCard.textContent = "7";
      break;
    case 8:
      showCard.textContent = "8";
      break;
    case 9:
      showCard.textContent = "9";
      break;
    case 10:
      showCard.textContent = "10";
      break;
    case 11:
      showCard.textContent = "J";
      break;
    case 12:
      showCard.textContent = "Q";
      break;
    case 13:
      showCard.textContent = "K";
      break;
    default:
      showCard.textContent = "Error";
      break;
  }
};
