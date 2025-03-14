
const radius = 120;
let angle = 0;



function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('sketch');
  background('black');
  colorMode (HSL, 360, 100, 100, 100);
  angleMode(DEGREES);
}

function draw() {
  background(0, 100);
  stroke(HSL, 30, 100, 50);
  strokeWeight(40);
 
  push();
  translate(width / 2, height / 2);
  const x = radius * cos(angle);
  const y = radius * sin(angle);
  console.log({ x, y });

  point(x, y);
  angle+=2;
  pop();

  strokeWeight(140);
  fill(HSL, 214, 65, 55);
  stroke(0, 0, 255);
  point(width / 2, height / 2);

}



