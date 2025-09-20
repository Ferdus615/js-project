const Box_container = document.getElementById("boxs");
const Boxes = Box_container.querySelectorAll("div");
const ResetBtn = document.getElementById("reset");
const UpdateText = document.getElementById("update");

const gameBoard = ["", "", "", "", "", "", "", "", ""];
let isGameActive = false; // change it to "false"
let currentPlayer = "✖";

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

UpdateText.textContent = `Please click the New Game button to start playing!`;

Boxes.forEach((box, index) => {
  box.addEventListener("click", (e) => {
    console.log("Clicked:" + " " + e.target.id);

    if (isGameActive && e.target.textContent === "") {
      gameBoard[index] = currentPlayer;
      console.log(gameBoard);

      e.target.textContent = currentPlayer;

      currentPlayer = currentPlayer === "✖" ? "𐤏" : "✖";

      const winner = checkWinner(gameBoard);
      winner
        ? ((UpdateText.textContent = `'${winner.winner}'  has won the game. Congratulations!`),
          (isGameActive = false))
        : (UpdateText.textContent = `Now ${currentPlayer}'s turn!`);
    }

    const highlightWinner = checkWinner(gameBoard);
    if (highlightWinner) {
      highlightWinner.winningArray.forEach((index) => {
        const winningBox = Boxes[index];

        winningBox.style.backgroundColor = "crimson";
      });
    }
  });
});

const checkWinner = () => {
  for (condition of winConditions) {
    const [a, b, c] = condition;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      console.log(`The winning combinations are: ${condition}`);
      return { winner: gameBoard[a], winningArray: condition };
    }
  }
  return null;
};

ResetBtn.addEventListener("click", () => {
  reset();
  currentPlayer = "✖";
  isGameActive = true;
  UpdateText.textContent = `Now ${currentPlayer}'s turn!`;
  console.log("The game has STARTED!");
});

const reset = () => {
  gameBoard.forEach((item, index) => {
    gameBoard[index] = "";
  });

  Boxes.forEach((box) => {
    box.textContent = "";
    box.style.backgroundColor = "black";
  });
};
