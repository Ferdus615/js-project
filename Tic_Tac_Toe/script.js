const Box_container = document.getElementById("boxs");
const Boxes = Box_container.querySelectorAll("div");
const ResetBtn = document.getElementById("reset");
const UpdateText = document.getElementById("update");

const gameBoard = ["", "", "", "", "", "", "", "", ""];
let isGameActive = false;
let currentPlayer = "X";

const winConditions = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
];

Boxes.forEach((box, index) => {
  box.addEventListener("click", (e) => {
    if (
      isGameActive &&
      e.target.textContent.trim() !== "X" &&
      e.target.textContent.trim() !== "O"
    ) {
      e.target.textContent = currentPlayer;
      gameBoard[index] = currentPlayer;

      const Winner = checkWinner(gameBoard);
      if (Winner) {
        UpdateText.textContent = `Congratulations, ${Winner} has won!`;
        isGameActive = false;
        return
      }

      if (!gameBoard.includes("")) {
        UpdateText.textContent = "Whoops!, It's a draw!";
        isGameActive = false;
        return
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
      UpdateText.textContent = `Now ${currentPlayer}'s turn`;

      console.log(gameBoard);
      console.log(e.target.id + " " + isGameActive);
    }
  });
});

const checkWinner = () => {
  for (let cond of winConditions) {
    const [a, b, c] = cond;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      console.log(`Winning condition: ${cond}`);
      return gameBoard[a];
    }
  }
  return null;
};

const resetGame = () => {
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = "";
  }

  Boxes.forEach((box) => {
    box.textContent = "";
  });

  isGameActive = true;
  currentPlayer = "X";
  UpdateText.textContent = "New Game! X's turn.";
};

ResetBtn.addEventListener("click", () => {
  resetGame();
  console.log("The game has been reset!");
});
