// the canvas(paper) and the context(pen)
const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");

let direction = "RIGHT";
let speed = 100;

// each section of the gameBoard
const tileSize = 20;
const gap = 1;
const segmentSize = tileSize - gap * 2;

const snake = [
  { x: 14 * tileSize, y: 15 * tileSize },
  { x: 13 * tileSize, y: 15 * tileSize },
  { x: 12 * tileSize, y: 15 * tileSize },
];

const drawApple = () => {
  const pX = Math.floor(Math.random() * 30);
  const pY = Math.floor(Math.random() * 30);

  ctx.fillStyle = "red";
  ctx.fillRect(pX * tileSize, pY * tileSize, segmentSize, segmentSize);
};

const moveSnake = () => {
  const head = { ...snake[0] };

  if (direction === "RIGHT") {
    head.x += tileSize;
    if (head.x > canvas.width) {
      head.x = 0 * tileSize;
    }
  }

  snake.unshift(head);
  snake.pop();
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
  moveSnake();
  // drawApple();
  drawSnake();
};

setInterval(drawGame, speed);
