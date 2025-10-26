// the canvas(paper) and the context(pen)
const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");
const score = document.getElementById("score");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

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
  ctx.fillStyle = "red";
  ctx.fillRect(apple.x, apple.y, segmentSize, segmentSize);
};

const updateScore = () => {
  scoreCount++;
  score.textContent = scoreCount;
};

const moveSnake = () => {
  const head = { ...snake[0] };

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

  snake.unshift(head);
  if (head.x === apple.x && head.y === apple.y) {
    apple = applePosition();
    updateScore();
  } else {
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
    isPaused = !isPaused;
  }
};

const drawSnake = () => {
  snake.forEach((segment, index) => {
    if (index === 0) {
      ctx.fillStyle = "skyblue";
    } else {
      ctx.fillStyle = "blue";
    }
    ctx.fillRect(segment.x, segment.y, segmentSize, segmentSize);
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
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "40px Bitcount Grid Single, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("PAUSED", canvas.width / 2, canvas.height / 2);
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

  clearInterval(gameLoop);
  gameLoop = setInterval(drawGame, speed);
  console.log("game started");
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

pauseBtn.addEventListener("click", () => {
  pauseGame();
});

function gameOver() {
  clearInterval(gameLoop); // stop the loop

  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.font = "40px Bitcount Grid Single, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);

  // Optional: console log or alert
  console.log("Game Over!");
}

// browser listening to keypress
document.addEventListener("keydown", changeDirection);
