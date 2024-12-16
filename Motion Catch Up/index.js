let x=0;
let y=0;
let radius = 50;
let speed = 1;

let x2=0;
let radius2= 20;
let speed2= 0.6;




function setup(){
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  
  y = height / 2;
  x = -radius;
  x2 = -radius2;
  strokeWeight(0.3);
 
}

function draw() {
  background(0, 5);
  fill("lightblue");
  circle(x, y, radius);
  speed *= 1.0;
  x += speed;
  if (x > width + radius) {
   x = -radius; 
   speed = 1;
  }
  
  fill("orange");
  circle(x2, y, radius2);
  speed *= 1.0;
  x2 += speed2;
  if (x2> width + radius2) {
    x2= -radius2;
    speed = 1;
  }
}









