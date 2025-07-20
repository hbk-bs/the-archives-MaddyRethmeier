const mytext = "Hello World";

function setup() {
	
	createCanvas(300, 300);
	background("lightgrey");

	colorMode(HSB, 360, 100, 100);
	background(0, 0, 83);
	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;

	noStroke();

	fill(217, 52, 91);
	rect(x(0.42), y(0.3), s(0.18), s(0.18));

	fill(225, 68, 87);
	rect(x(0.24), y(0.3), s(0.18), s(0.18));

	fill(244, 83, 57);
	rect(x(0.6), y(0.3), s(0.18), s(0.18));

	fill(226, 76, 69);
	rect(x(0.42), y(0.12), s(0.18), s(0.18));

	fill(239, 100, 57);
	rect(x(0.42), y(0.48), s(0.18), s(0.18));

	fill(238, 100, 20);
	rect(x(0.42), y(0.66), s(0.18), s(0.18));

	fill(44, 58, 96);
	circle(x(0.15), y(0.15), s(0.15));
}



