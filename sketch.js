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
    background('red');
  } if (collision === true) {
    lives -= 1;
  }

  if (mY === 400) {
    mY = 20
    mX = random(20, 380);
    score += 1;
    collision = false;
  }

  if (collision === true) {
    mY = 20
    mX = random(20, 380);
    score = 0;
    collision = false;
  }

  fill('white');
  text("Score: " + score, 10, 20);
  text("Lives: " + lives, 10, 35);

  if (lives === 0) {
    fill(random(1, 255), 0, 0);
    background(30);
    textSize(40);
    text("You lose!", 125, 200);
    textSize(20);
    text("Press R to restart", 125, 250)
    shipX = 500;
  }

  if (keyCode === 82 && keyIsPressed && lives === 0) {
    background(30);
    shipX = 200;
    lives = 3;
    textSize(0);
    score = 0;
    mY = -10;
  }
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