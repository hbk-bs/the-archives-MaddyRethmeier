let circles = [];
let radius = 15;
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']; 

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");

  let spacing = height / (circles.length + 1); 

  for (let i = 0; i < 6; i++) { 
    let yValue = spacing * (i + 1); 
    circles.push({
      x: 0, 
      y: yValue,
      speedX: 1,  
      speedY: 1,  
      color: colors[i] 
    });
  }

  strokeWeight(0.3);
}

function draw() {
  background(0, 5);

  for (let i = 0; i < circles.length; i++) {
    let circleObj = circles[i];

    fill(circleObj.color);
    circle(circleObj.x, circleObj.y, radius);

    circleObj.x += circleObj.speedX; 
    circleObj.y -= circleObj.speedY; 

    if (circleObj.x > width + radius) {
      circleObj.x = 0; 
      circleObj.speedX = 1; 
    }

    if (circleObj.y < -radius) {
      circleObj.y = height + radius;
    }
  }
}