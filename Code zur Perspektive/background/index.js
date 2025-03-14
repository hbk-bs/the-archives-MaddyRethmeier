const mytext = "Good Morning🌞";

function setup() {
  
  createCanvas(300, 300);

  background(4, 60, 148);
  fill("lightblue");
  stroke(100);
  text(mytext, 15, 15);
  noStroke();

  fill(100, 164, 243);
  circle(145, 50, 60);

  fill(255, 194);
  circle(145, 50, 40);

  fill(245, 186, 108);
  circle(145, 50, 25);

  stroke(0, 2, 55);
  strokeWeight(175);
  line(0, 150, 300, 150);

  stroke(0, 2, 34);
  strokeWeight(175);
  line(0, 250, 300, 250);


  stroke(193, 20);
  strokeWeight(250);
  line(0, 175, 300, 175);
}


