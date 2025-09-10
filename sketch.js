// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let shipX = 200;
let shipY;
let mX;
let mY;
let collision = false;

function setup() {
  createCanvas(400, 400);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  frameRate(60);
}

function draw() {
  background(30);
  drawShip(shipX, shipY);
  drawMeteor(mX, mY);

  if (keyIsDown(37) && shipX >= 20 || keyIsDown(65) && shipX >= 20) {
    shipX -= 5;
  }
  if (keyIsDown(39) && shipX <= 380 || keyIsDown(68) && shipX <= 380) {
    shipX += 5;
  }

  if (mX <= shipX + 22.5 && mY > 350) {
    collision = true;
  }
  if (mX >= shipX - 22.5 && mY > 350) {
    collision = true;
  }
}

function drawMeteor() {
  
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