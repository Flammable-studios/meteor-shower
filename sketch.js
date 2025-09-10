// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(400, 400);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  frameRate(15);
}

function draw() {
  background(30);
  drawShip(200);
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