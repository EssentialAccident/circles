class Outside {
  constructor(count) {
    this.count = count;
    this.rows = [];
    this.cols = [];

    let size = floor(width / (this.count + 1));

    for (var i = 0; i < this.count; i++) {
      this.rows.push(
        new Circle((size * 1.5) + (size * i), size / 2, size * 0.9)
      );
      this.cols.push(
        new Circle(size / 2, (size * 1.5) + (size * i), size * 0.9)
      );
    }
  }

  draw() {
    let circ
    for (circ of this.rows) {
      circ.draw();
    }
    for (circ of this.cols) {
      circ.draw();
    }
  }

}