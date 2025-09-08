const Box_container = document.getElementById("boxs");
const Boxes = Box_container.querySelectorAll("div");
const ResetBtn = document.getElementById("reset");

const gameStates = ["", "", "", "", "", "", "", "", ""];
let isGameActive = false;
let currentPlayer = "X";

Boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (
      isGameActive &&
      e.target.textContent.trim() !== "X" &&
      e.target.textContent.trim() !== "O"
    ) {
      playerSwitch();

      if (currentPlayer === "O") {
        e.target.textContent = "X";
      } else {
        e.target.textContent = "O";
      }

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
