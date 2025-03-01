function setup() {
 
  createCanvas(300, 300);
  background("lightgrey");

  stroke("darkblue");
  line(300, 300, 0, 0);
  stroke("green");
  line(0, 300, 300, 0);
  stroke("red");
  line(150, 0, 150, 300);
  stroke("yellow");
  line(0, 150, 300, 150);
  stroke("black");
  strokeWeight(10);
  point(150, 150);
  stroke("cyan");
  strokeWeight(1);
  line(200, 100, 100, 100);
  line(100, 200, 100, 100);
  line(200, 200, 200, 100);
  line(100, 200, 200, 200);
  stroke("magenta");
  line(250, 50, 250, 250);
  line(50, 250, 250, 250);
  line(50, 50, 50, 250);
  line(250, 50, 50, 50);

}
