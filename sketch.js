function setup() {
  createCanvas(400, 400);
  let cols = 10;
  let rows = 10;
  let squareSize = width / cols;
   for (let i= 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * squareSize;
      let y = j * squareSize;

      let randomDirection = random() < 0.5;
      strokeWeight(3);
      if (randomDirection) {
        line(x, y, x + squareSize, y + squareSize);
      } else {
        line(x + squareSize, y, x, y + squareSize);
      }
    }
   }
}