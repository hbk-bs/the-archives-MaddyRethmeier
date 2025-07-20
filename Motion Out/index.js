class Particle {
  isRandom = false;

  speed = 2;
  xOff;
  yOff;

  x = 0;
  y = 0;
  w = height / 4;
  z = width / 4;

  lifetime;
  isDead = false;

  constructor(_lifetime = 100, _isRandom = false) {
    this.x = width / 2;
    this.y = height / 2;
    this.lifetime = _lifetime;
    this.xOff = random(1000);
    this.yOff = random(1000);
    this.isRandom = _isRandom;

    this.angle = random(TWO_PI);
  }

  display() {
    push();
    translate(this.x, this.y);
    circle(0, 0, 10);
    point(0, 0);
    line(-5, -5, 5, 5);
    line(-5, 5, 5, -5);
    pop();
  }

  update() {
    if (this.isDead === true) {
      return;
    }

    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;

    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.isDead = true;
    }

    this.lifetime -= 1;
    if (this.lifetime <= 0) {
      this.isDead = true;
    }
  }
}

const particles = [];

function setup() {
  const canvas = createCanvas(550, 550);
  canvas.parent("sketch");
  background("white");
}

function draw() {
  background(255, 10);

  const rectWidth = 50; 
  const rectHeight = 50; 
  const rectX = (width - rectWidth) / 2; 
  const rectY = (height - rectHeight) / 2; 
  fill(18,80,196); 
  rect(rectX, rectY, rectWidth, rectHeight); 

  
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.display();
    p.update();
  }

  for (let j = particles.length - 1; j >= 0; j--) {
    if (particles[j].isDead) {
      particles.splice(j, 1);
    }
  }
}

function mouseDragged() {
  const oneParticle = new Particle();
  particles.push(oneParticle);
}

