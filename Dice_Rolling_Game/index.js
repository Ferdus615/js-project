function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");

  const diceValues = [];
  const imagesOfDice = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6 + 1);
    diceValues.push(value);
    imagesOfDice.push(`<img src="dice/${value}.png" alt="Dice ${value}">`);
  }
  diceResult.textContent = `Dice: ${diceValues.join(", ")}`;
  diceImages.innerHTML = imagesOfDice.join("");
}
