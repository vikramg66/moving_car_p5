// Car position and speed variables
let carX = 0;
let carY;
let carSpeed = 0;

function setup() {
  createCanvas(700, 400);
  // Start car in the middle vertically
  carY = height / 2;
}

function draw() {
  // ===== DRAW BACKGROUND =====
  background(135, 206, 235); // Sky

  // ===== BILLBOARD =====
  fill(255);
  rect(390, 175, 20, 60);
  fill(250, 208, 8);
  rect(300, 80, 200, 100, 20);
  fill(0);
  textSize(24);
  textAlign(CENTER);
  text('KEEP MOVING', 400, 140);

  // ===== DRAW GRASS =====
  fill(34, 139, 34);
  rect(0, height / 2 + 50, width, height);

  // ===== DRAW ROAD =====
  fill(70);
  rect(0, carY + 30, width, 60);

  // Road lines
  stroke(255, 255, 0);
  strokeWeight(3);
  for (let i = 0; i < width; i += 40) {
    line(i, carY + 60, i + 20, carY + 60);
  }
  noStroke();

  // ===== HANDLE CAR SPEED =====
  if (keyIsDown(RIGHT_ARROW)) {
    carSpeed += 0.1; // accelerate forward
  }
  if (keyIsDown(LEFT_ARROW)) {
    carSpeed -= 0.1; // accelerate backward / reverse
  }

  // Constrain speed (-5 for reverse, 10 max forward)
  carSpeed = constrain(carSpeed, -5, 1000);

  // ===== DRAW CAR =====
  drawCar(carX, carY);

  // ===== MOVE CAR =====
  carX += carSpeed;

  // Screen wrapping
  if (carX > width + 50) {
    carX = -100;
  } else if (carX < -100) {
    carX = width + 50;
  }
}

// Function to draw the car
function drawCar(x, y) {
  // Car body
  fill(255, 0, 0);
  rect(x, y, 100, 40, 5);

  // Car top
  fill(200, 0, 0);
  rect(x + 20, y - 25, 60, 30, 5);

  // Windows
  fill(135, 206, 250);
  rect(x + 25, y - 20, 20, 18);
  rect(x + 55, y - 20, 20, 18);

  // Wheels
  fill(0);
  circle(x + 25, y + 40, 20);
  circle(x + 75, y + 40, 20);

  // Wheel rims
  fill(150);
  circle(x + 25, y + 40, 10);
  circle(x + 75, y + 40, 10);

  // Headlight
  fill(255, 255, 0);
  circle(x + 95, y + 15, 8);
}