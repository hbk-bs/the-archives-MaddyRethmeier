function setup() {
  createCanvas(500, 500);
  background("black");
  colorMode(HSL, 360, 100, 100, 100);

  const x = (n) => width * n;
  const y = (n) => height * n;
  const s = (n) => width * n;

  let colorCount = 0;
  const myColors = [];
  let h = 350;
  let step = 40;
  while (colorCount < 5) {
    const c = color(h - step, 86, 86, 90);
    myColors.push(c);
    colorCount++;

    console.log(myColors);
  }
  const c1 = myColors[0];
  const c2 = color(350 - 180, 60, 70, 50);
  const c3 = color(300, 50, 60, 50);
  const c4 = color(45, 70, 40, 50);

  rectMode(CENTER);
  fill(235, 98, 20, 90);
  rect(x(0.5), y(0.5), s(0.3), s(0.1));
  fill(123, 50, 40, 50);
  rect(x(0.55), y(0.5), s(0.1), s(0.25));
  fill(c1);
  rect(x(0.5), y(0.57), s(0.1), s(0.1));
  fill(c2);
  rect(x(0.48), y(0.49), s(0.09), s(0.1));
  fill(200, 70, 50, 60);
  rect(x(0.6), y(0.47), s(0.23), s(0.1));
  fill(c3);
  rect(x(0.45), y(0.56), s(0.2), s(0.09));
  fill(c4);
  rect(x(0.45), y(0.35), s(0.25), s(0.2));
 
}
