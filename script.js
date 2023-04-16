// Game elements
const snakeElement = document.getElementById('snake');
const foodElement = document.getElementById('food');

// Initial snake position
let snakeX = 0;
let snakeY = 0;

// Initial food position
let foodX = 0;
let foodY = 0;

// Direction of the snake
let directionX = 0;
let directionY = 0;

// Initialize the game
function init() {
  snakeX = 50;
  snakeY = 100;
  directionX = 30;
  directionY = 0;
  moveSnake();
  generateFood();
}

// Move the snake
function moveSnake() {
  snakeX += directionX;
  snakeY += directionY;
  snakeElement.style.left = snakeX + 'px';
  snakeElement.style.top = snakeY + 'px';
  setTimeout(moveSnake, 100);
}

// Generate new food position
function generateFood() {
  foodX = Math.floor(Math.random() * 50);
  foodY = Math.floor(Math.random() * 50);
  foodElement.style.left = foodX + 'px';
  foodElement.style.top = foodY + 'px';
}

// Update direction based on key input
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    directionX = 0;
    directionY = -10;
  } else if (event.key === 'ArrowDown') {
    directionX = 0;
    directionY = 10;
  } else if (event.key === 'ArrowLeft') {
    directionX = -10;
    directionY = 0;
  } else if (event.key === 'ArrowRight') {
    directionX = 10;
    directionY = 0;
  }
});

// Start the game
init();