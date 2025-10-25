const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");

const tileSize = 20;
const gap = 1;
const segmentSize = tileSize - gap * 2;

const snake = [
  { x: 6 * tileSize, y: 15 * tileSize },
  { x: 5 * tileSize, y: 15 * tileSize },
  { x: 4 * tileSize, y: 15 * tileSize },
];

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

drawSnake();
