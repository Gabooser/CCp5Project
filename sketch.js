function sketch1(f) {
  f.setup = function() {
    f.createCanvas(400, 400);
    f.noLoop();
  };

  f.draw = function() {
    let cols =10;
    let rows = 10;
    let squareSize = f.width / cols;
     for (let i= 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * squareSize;
        let y = j * squareSize;

        let randomDirection = f.random() < 0.5;
        f.strokeWeight(3);
        if (randomDirection) {
          f.line(x, y, x + squareSize, y + squareSize);
        } else {
          f.line(x + squareSize, y, x, y + squareSize);
        }
      }
    }
  };

  f.mousePressed = function() {
    f.redraw();
  };
}

new p5(sketch1);

function sketch2(e) {

}