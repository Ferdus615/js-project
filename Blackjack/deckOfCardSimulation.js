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
const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

// const createDeck = () => {
//   for (let suit of suits) {
//     for (let rank of ranks) {
//       deckOfCard.push(`${rank} of ${suit}`);
//     }
//   }
// };

const createDeck = () => {
  for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
    for (let ranksIndex = 0; ranksIndex < ranks.length; ranksIndex++) {
      const card = {
        suit: suits[suitsIndex],
        rank: ranks[ranksIndex],
        value: values[ranksIndex],
      };
      deckOfCard.push(`${card.rank} of ${card.suit}`);
    }
  }
};
createDeck();

// console.log(deckOfCard);
// console.log(deckOfCard.length);

const pickedCard = [];

const randomCardPicker = () => {
  return Math.floor(Math.random() * (suits.length * ranks.length));
};

pickedCard.push(randomCardPicker());
pickedCard.push(randomCardPicker());
pickedCard.push(randomCardPicker());
pickedCard.push(randomCardPicker());
pickedCard.push(randomCardPicker());
pickedCard.push(randomCardPicker());
pickedCard.push(randomCardPicker());
pickedCard.push(randomCardPicker());
pickedCard.push(randomCardPicker());
pickedCard.push(randomCardPicker());
pickedCard.push(randomCardPicker());
console.log(`pickedCard: ${pickedCard}`);

const drawCard = deckOfCard[pickedCard];
console.log(drawCard);
