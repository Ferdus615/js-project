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
createDeck();

// console.log(deckOfCard);
// console.log(deckOfCard.length);

const pickedCard = [];

const randomCardPicker = () => {
  return Math.floor(Math.random() * (suits.length * ranks.length));
};

const cardDrawSim = () => {
  let chooseCard;

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

  pickedCard.push(chooseCard);
  console.log(`pickedCard: ${pickedCard}`);

  const drawCard = deckOfCard[chooseCard];
  console.log(`drawCard: ${drawCard.rank} of ${drawCard.suit} `);

  const cardValue = drawCard.value;
  console.log(`cardValue: ${cardValue}`);

};

cardDrawSim();
cardDrawSim();
cardDrawSim();
cardDrawSim();
cardDrawSim();
