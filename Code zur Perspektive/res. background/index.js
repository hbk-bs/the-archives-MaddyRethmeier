
const mytext = "Good Morning🌞";

function setup() {
	// this is function scope
	// setup is executed once
	createCanvas(300, 300);

	colorMode(HSB, 360, 100, 100);
	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;

	background(222, 76, 66);

	fill(200, 20, 90);
	text(mytext, x(0.05), y(0.05));
	noStroke();
	fill(213, 51, 100);
	circle(x(0.5), y(0.12), s(0.23));
	fill(47, 55, 90);
	circle(x(0.5), y(0.12), s(0.15));

	fill(31, 55, 90);
	circle(x(0.5), y(0.12), s(0.11));

	fill(17, 55, 90);
	circle(x(0.5), y(0.12), s(0.08));

	fill(238, 99, 22);
	rect(x(0), y(0.15), s(1), s(1));

	fill(238, 99, 28);
	rect(x(0), y(0.15), s(1), s(0.3));
}




