

function setup() {
	
	createCanvas(300, 300);
	background(100);
	colorMode(HSL, 360, 100, 100, 100);

	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;

	rectMode(CENTER);
	fill(320, 50, 50, 80);
	rect(x(0.5), y(0.5), s(0.9), s(0.9));
	fill(320 - 180, 40, 70, 90);
	rect(x(0.4), y(0.35), s(0.99), s(0.4));
	fill(240, 80, 60, 100);
	rect(x(0.6), y(0.7), s(0.9), s(0.9));
}