const deckOfCard = [];

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

const createDeck = () => {
  for (let suit of suits) {
    for (let rank of ranks) {
      deckOfCard.push(`${rank} of ${suit}`);
    }
  }
};

createDeck();
console.log(deckOfCard);
