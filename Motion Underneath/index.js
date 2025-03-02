let x=0;
let y=0;
let radius = 50;
let speed = 2;
let direction = 1;

function setup(){
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  
  y = height / 1.3;
  x = width/2;
  strokeWeight(0.3);
  fill("orange");
}

function draw() {
  background(0, 5);
  fill("orange")
  circle(x, y, radius);
  speed *= 1.0;
  x += speed* direction;
  if (x + radius/2 >= width/2 +240 || x- radius/2<= width/2-240) {
   {
    direction *= -1;
   }
  }

  fill("lightblue");
  rectMode(CENTER);
  rect(width/2, height/2, 480, 20);
}




