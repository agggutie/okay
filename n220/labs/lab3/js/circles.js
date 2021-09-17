var angle = 0.0;
var scalar = .1;
var speed = 0.05;
// from the book
function setup() {
  createCanvas(400, 400);
  fill(0);
  background(204);
}

function draw() {
  var x = 200 + cos(angle) * scalar
  var y = 200 + sin(angle) * scalar;
  ellipse(x, y, .0000000001, .0000000001);
  angle += speed;
  scalar += speed;
}

