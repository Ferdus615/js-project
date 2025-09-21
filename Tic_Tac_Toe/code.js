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

// Gives you the initial instruction to start the game.
UpdateText.textContent = `To start playing click New Game button!`;

// mainfunction that runs the code (event delegation)
Boxes.forEach((box, index) => {
  // event listner to update the board on click (event delegation)
  box.addEventListener("click", (e) => {
    console.log("Clicked:" + " " + e.target.id);

    // logic for updating the board.
    if (isGameActive && e.target.textContent === "") {
      // update the main array
      gameBoard[index] = currentPlayer;
      console.log(gameBoard);

      // on click place the correct player
      e.target.textContent = currentPlayer;
      currentPlayer = currentPlayer === "✖" ? "𐤏" : "✖";

      // check for winner
      const winner = checkWinner(gameBoard);
      winner
        ? ((UpdateText.textContent = `'${winner.winner}'  has won the game. Congratulations!`),
          (isGameActive = false))
        : (UpdateText.textContent = `Now ${currentPlayer}'s turn!`);

      // check for draw
      if (!gameBoard.includes("")) {
        UpdateText.textContent = "Whoops!, it's a draw!";
        e.target.style.backgroundColor = "hotpink";
        isGameActive = false;
      }
    }

    // highligh the winning segments
    const highlightWinner = checkWinner(gameBoard);
    if (highlightWinner) {
      highlightWinner.winningArray.forEach((index) => {
        const winningBox = Boxes[index];

        winningBox.style.backgroundColor = "aqua";
      });
    }
  });

  const mouseover = box.addEventListener("mouseover", (e) => {
    if (isGameActive) {
      e.target.style.backgroundColor = "orange";
    }
  });

  const mouseout = box.addEventListener("mouseout", (e) => {
    if (isGameActive) {
      e.target.style.backgroundColor = "hotpink";
    }
  });
});

// fucntion to check for the winner
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

// reset btn
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
    box.style.backgroundColor = "hotpink";
  });
};
