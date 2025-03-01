const mytext = "Hello World";
let done = false;
let x1 = 10;
let y1 = 10;
function setup() {

  createCanvas(300, 300);
  background(0);
  const x = (n) => width * n;
  const y = (n) => height * n;
  const s = (n) => width * n;

  colorMode(HSL, 360, 100, 100, 100);
  fill(220, 50, 60, 30);
  rect(x(0.02), y(0.02), s(0.96));
  fill(320, 60, 50, 60);
  rect(x(0.2), y(0.2), s(0.6));
  fill(110, 60, 50, 80);
  rect(x(0.3), y(0.3), s(0.4));

  fill(250, 80, 40, 70);
  rect(x(0.4), y(0.4), s(0.2));

  let count = 0;
  while (done === false) {
    fill(44, 0, 100, 40);
    circle(x1, y1, 5);

    if (x1 < width - 10) {
      x1 = x1 + 10;
    } else {
      x1 = count % 2 === 1 ? 15 : 10;
      x1 = 10;
      if (y1 < height - 10) {
        y1 = y1 + 10;
      } else {
        done = true;
        y1 = 10;
      }
    }
    count++;
  }
}


