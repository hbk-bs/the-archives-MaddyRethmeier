

const radius = 120;
const smallRadius = 80;
let angle = 0;

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('sketch');
  background('black');
  colorMode(HSL, 360, 100, 100, 100);
  angleMode(DEGREES);
}

function draw() {
  background(0, 100);

 
  noFill();
  stroke(0, 0, 100);
  strokeWeight(4);
  circle(width / 2, height / 2, radius * 2); 

  
  stroke(HSL, 30, 100, 50);
  strokeWeight(40);

  push();
  translate(width / 2, height / 2);
  const x = smallRadius * sin(angle);
  const y = smallRadius * cos(angle);
  console.log({ x, y });

  point(x, y); 
  angle += 2; 
  pop();
}
