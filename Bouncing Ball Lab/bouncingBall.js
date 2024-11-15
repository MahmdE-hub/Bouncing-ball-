const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Ball properties
let x = 200; // Initial x position
let y = 150; // Initial y position
let dx = 2;  // Horizontal speed
let dy = 2;  // Vertical speed
let ballRadius = 15; // Radius of the ball

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawBall();

    // Update the ball's position
    x += dx;
    y += dy;

    // Check for collisions with the walls
    if (y + ballRadius > canvas.height || y - ballRadius < 0) {
      dy = -dy; // Reverse the vertical direction
    }

    if (x + ballRadius > canvas.width || x - ballRadius < 0) {
      dx = -dx; // Reverse the horizontal direction
    }
  }

  setInterval(update, 20); // Update the canvas every 20 milliseconds
