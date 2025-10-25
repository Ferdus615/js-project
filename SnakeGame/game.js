// the canvas(paper) and the context(pen)
const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");
const score = document.getElementById("score");
const reset = document.getElementById("resetBtn");

let direction = "RIGHT";
let speed = 100;
let scoreCount = 0;

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
  }
  snake.pop();
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

const drawGame = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawApple();
  moveSnake();
  drawSnake();
};

// browser listening to keypress
document.addEventListener("keydown", changeDirection);
setInterval(drawGame, speed);
