let outside;

function setup() {
  createCanvas(800, 800);
  outside = new Outside(10);
}

function draw() {
  background(0);
  outside.draw();
}