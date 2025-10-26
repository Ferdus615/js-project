// the canvas(paper) and the context(pen)
const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");
const score = document.getElementById("score");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

const up = document.getElementById("up");
const left = document.getElementById("left");
const down = document.getElementById("down");
const right = document.getElementById("right");

const wall = document.getElementById("wall");
const speedy = document.getElementById("speed");
const hard = document.getElementById("hard");
const infite = document.getElementById("infite");

score.textContent = `Score: 0`;

let isWall = false;
let isSpeedy = false;
let isHard = false;
let isInfite = false;

let direction = "RIGHT";
let speed = 100;
let scoreCount = 0;

let gameLoop;
let isGameStarted = false;
let isPaused = false;

// each section of the gameBoard
const tileSize = 20;
const gap = 1;
const segmentSize = tileSize - gap * 2;

const snake = [
  { x: 15 * tileSize, y: 15 * tileSize },
  { x: 14 * tileSize, y: 15 * tileSize },
  { x: 13 * tileSize, y: 15 * tileSize },
];

const applePosition = () => {
  posX = Math.floor((Math.random() * canvas.width) / tileSize);
  posY = Math.floor((Math.random() * canvas.height) / tileSize);
  return {
    x: posX * tileSize,
    y: posY * tileSize,
  };
};

let apple = applePosition();

const drawApple = () => {
  // Calculate the center and radius of the circle
  const centerX = apple.x + tileSize / 2;
  const centerY = apple.y + tileSize / 2;
  const radius = segmentSize / 2;

  ctx.fillStyle = "#f5e612";
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();
};

const drawSnake = () => {
  snake.forEach((segment, index) => {
    if (index === 0) {
      ctx.fillStyle = "#f5e612";
    } else {
      ctx.fillStyle = "#341bef";
    }
    ctx.fillRect(segment.x, segment.y, segmentSize, segmentSize);
  });
};

const updateScore = () => {
  scoreCount++;
  score.textContent = `Score: ${scoreCount}`;
};

const moveSnake = () => {
  const head = { ...snake[0] };

  if (!isWall) {
    if (head.x <= canvas.width || head.y <= canvas.height) {
      switch (direction) {
        case "RIGHT":
          head.x += tileSize;
          if (head.x >= canvas.width) {
            head.x = 0;
          }
          break;
        case "LEFT":
          head.x -= tileSize;
          if (head.x < 0) {
            head.x = canvas.width - tileSize;
          }
          break;
        case "UP":
          head.y -= tileSize;
          if (head.y < 0) {
            head.y = canvas.height - tileSize;
          }
          break;
        case "DOWN":
          head.y += tileSize;
          if (head.y >= canvas.height) {
            head.y = 0;
          }
          break;
      }
    }
  } else {
    if (head.x <= canvas.width || head.y <= canvas.height) {
      switch (direction) {
        case "RIGHT":
          head.x += tileSize;
          if (head.x >= canvas.width) {
            gameOver();
          }
          break;
        case "LEFT":
          head.x -= tileSize;
          if (head.x < 0) {
            gameOver();
          }
          break;
        case "UP":
          head.y -= tileSize;
          if (head.y < 0) {
            gameOver();
          }
          break;
        case "DOWN":
          head.y += tileSize;
          if (head.y >= canvas.height) {
            gameOver();
          }
          break;
      }
    }
  }

  if (!isInfite) {
    snake.unshift(head);
    if (head.x === apple.x && head.y === apple.y) {
      apple = applePosition();
      updateScore();
    } else {
      snake.pop();
    }
  } else {
    snake.unshift(head);
    if (head.x === apple.x && head.y === apple.y) {
      apple = applePosition();
      updateScore();
    }
    snake.pop();
  }
};

const changeDirection = (e) => {
  const key = e.key.toLowerCase();

  if ((key === "arrowleft" || key === "a") && direction !== "RIGHT")
    direction = "LEFT";
  else if ((key === "arrowright" || key === "d") && direction !== "LEFT")
    direction = "RIGHT";
  else if ((key === "arrowup" || key === "w") && direction !== "DOWN")
    direction = "UP";
  else if ((key === "arrowdown" || key === "s") && direction !== "UP")
    direction = "DOWN";

  if (e.code === "Space") {
    e.preventDefault();
    pauseGame();
  }

  if (key === "enter") {
    gameStart();
  }
};

const displayArrowKey = () => {
  up.addEventListener("click", () => {
    if (direction !== "DOWN") {
      direction = "UP";
    }
  });

  left.addEventListener("click", () => {
    if (direction !== "RIGHT") {
      direction = "LEFT";
    }
  });

  down.addEventListener("click", () => {
    if (direction !== "UP") {
      direction = "DOWN";
    }
  });

  right.addEventListener("click", () => {
    if (direction !== "LEFT") {
      direction = "RIGHT";
    }
  });
};

const collisionDetection = () => {
  const head = snake[0];

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
};

const drawGame = () => {
  if (isPaused) {
    pauseScreen();
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawApple();
  moveSnake();
  drawSnake();

  if (collisionDetection()) {
    clearInterval(gameLoop);
    gameOver();
  }
};

const resetGame = () => {
  snake.length = 0;
  snake.push(
    { x: 15 * tileSize, y: 15 * tileSize },
    { x: 14 * tileSize, y: 15 * tileSize },
    { x: 13 * tileSize, y: 15 * tileSize }
  );

  direction = "RIGHT";
  scoreCount = 0;
  score.textContent = scoreCount;
  drawApple();

  console.log("game reset");

  clearInterval(gameLoop);
  gameLoop = setInterval(drawGame, speed);
};

resetBtn.addEventListener("click", () => {
  resetGame();
});

const gameStart = () => {
  isGameStarted = !isGameStarted;

  isGameStarted
    ? (startBtn.textContent = "Finish Game")
    : (startBtn.textContent = "Start Game");

  clearInterval(gameLoop);
  gameLoop = setInterval(drawGame, speed);
  drawStartScreen();
  console.log(`isGameStarted: ${isGameStarted}`);
};

startBtn.addEventListener("click", () => {
  gameStart();
});

const pauseGame = () => {
  if (isGameStarted) {
    isPaused = !isPaused;
    isPaused
      ? (pauseBtn.textContent = "Resume Game")
      : (pauseBtn.textContent = "Pause Game");
    console.log("Paused:", isPaused);
  }
};

const pauseScreen = () => {
  ctx.fillStyle = "rgba(236, 19, 164, 1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "40px Tiny5";
  ctx.textAlign = "center";
  ctx.fillText("PAUSED", canvas.width / 2, canvas.height / 2);

  ctx.fillStyle = "white";
  ctx.font = "20px Tiny5, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(
    "Press 'Space' to Pause/Resume",
    canvas.width / 2,
    canvas.height / 2 + 40
  );
};

pauseBtn.addEventListener("click", () => {
  pauseGame();
});

const gameOver = () => {
  clearInterval(gameLoop);

  ctx.fillStyle = "rgba(236, 19, 164, 1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.font = "40px Tiny5, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);

  ctx.fillStyle = "white";
  ctx.font = "20px Tiny5, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(
    "Please restart the game!",
    canvas.width / 2,
    canvas.height / 2 + 40
  );

  isPaused = false;
  isGameStarted = false;
  console.log("Game Over!");
};

const drawStartScreen = () => {
  if (!isGameStarted) {
    ctx.fillStyle = "white";
    ctx.font = "20px Tiny5, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(
      "Press ENTER to Begin",
      canvas.width / 2,
      canvas.height / 2 - 40
    );
    ctx.font = "30px Tiny5, sans-serif";
    ctx.fillText(
      "Use 'W,A,S,D' or 'Arrow key' to move",
      canvas.width / 2,
      canvas.height / 2
    );
    ctx.font = "20px Tiny5, sans-serif";
    ctx.fillText(
      "Use 'Space' to Pause/Resume",
      canvas.width / 2,
      canvas.height / 2 + 40
    );
  }
};

drawStartScreen();

wall.addEventListener("click", () => {
  if (!isGameStarted) {
    isWall = !isWall;
  }
  isSpeedy = false;
  isHard = false;
  isInfite = false;

  console.log(`isWall: ${isWall}`);
});
// speedy.addEventListener("click", () => {});
// hard.addEventListener("click", () => {});
// infite.addEventListener("click", () => {});

// browser listening to keypress
document.addEventListener("keydown", changeDirection);
document.addEventListener("click", displayArrowKey);
