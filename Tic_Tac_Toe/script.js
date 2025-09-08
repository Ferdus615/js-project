const Box_container = document.getElementById("boxs");
const Boxes = Box_container.querySelectorAll("div");
const ResetBtn = document.getElementById("reset");
const UpdateText = document.getElementById("update");

const gameStates = ["", "", "", "", "", "", "", "", ""];
let isGameActive = false;
let currentPlayer = "X";

Boxes.forEach((box, index) => {
  box.addEventListener("click", (e) => {
    if (
      isGameActive &&
      e.target.textContent.trim() !== "X" &&
      e.target.textContent.trim() !== "O"
    ) {
      playerSwitch();

      if (currentPlayer === "O") {
        e.target.textContent = "X";
        gameStates[index] = "X";
        UpdateText.textContent = "Now O's turn";
      } else {
        e.target.textContent = "O";
        gameStates[index] = "O";
        UpdateText.textContent = "Now X's turn";
      }

      console.log(gameStates);
      console.log(e.target.id + " " + isGameActive);
    }
  });
});

const playerSwitch = (e) => {
  isGameActive = true;

  if (currentPlayer === "X") {
    currentPlayer = "O";
    console.log(currentPlayer);
  } else {
    currentPlayer = "X";
    console.log(currentPlayer);
  }
};

const resetGame = () => {
  Boxes.forEach((box, index) => {
    box.textContent = gameStates[index];
  });
  isGameActive = true;
};

ResetBtn.addEventListener("click", () => {
  resetGame();
  console.log("The game has been reset!");
});
