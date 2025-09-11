// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shipX = 200;
let shipY;
let mX;
let mY = 20;
let collision = false;
let score = 0;
let lives = 3;

function setup() {
  createCanvas(400, 400);
  background(240);
  ellipseMode(CENTER);
  rectMode(CENTER);
  frameRate(60);
}

function draw() {
  background(30);
  drawShip(shipX, shipY);
  drawMeteor(mX, mY);
  mY += 5;

  if (keyIsDown(37) && shipX >= 20 || keyIsDown(65) && shipX >= 20) {
    shipX -= 5;
  }
  if (keyIsDown(39) && shipX <= 380 || keyIsDown(68) && shipX <= 380) {
    shipX += 5;
  }

  if (mX < shipX + 22.5 && mX > shipX - 22.5 && mY > 350) {
    collision = true;
    score = 0;
    lives -= 1;
    background('red');
  }
}
if (mY === 400) {
  mY = 20
  mX = random(20, 380);
  score += 1;

  fill('white');
  text("Score: " + score, 10, 20);
  text("Lives: " + lives, 10, 35)
}

function drawMeteor() {
  fill(random(1, 255), 0, 0);
  ellipse(mX, mY, 20, 20);
}

function drawShip(x) {
  fill('blue');
  ellipse(x, 345, 20, 30);
  
  fill('white');
  rect(x, 360, 20, 30);

  fill('red');
  rect(x - 10, 380, 5, 20);
  rect(x + 10, 380, 5, 20);
}