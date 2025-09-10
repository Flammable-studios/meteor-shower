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
  drawShip(shipX);
  if (keyIsDown(37) || keyIsDown(65)) {
    shipX -= 5;
  }
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

// function keyPressed() {
//   if (keyCode === 65 || keyCode === 37) {
//     shipX -=5; //move ship left
//   }
//   if (keyCode === 68 || keyCode === 39) {
//     shipX +=5; //move ship left
//   }
// }