class Circle {

  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color(random(100, 255), random(100, 200), random(100, 200), 255);
  }

  draw() {
    stroke(this.color);
    noFill();
    circle(this.x, this.y, this.radius);
  }
}