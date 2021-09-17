var angle = 0.0;
var scalar = .1;
var speed = 0.05;

function setup() {
    createCanvas(400, 400)
    background(100)
}

function draw() {
     //border for ellipse 
    stroke(255)
    //from the book
    var x = 200 + cos(angle) * scalar
    var y = 200 + sin(angle) * scalar;
    fill(random(100), 0, random(150))
        ellipse(x, y, 10, 10);
        angle += speed;
        scalar += speed;
    //for loop that creates ellipses until it reaches the width and height of the canvas
    var x = 200 + cos(angle) * scalar
    var y = 200 + sin(angle) * scalar;
    stroke(random(100), 0, random(150))
    line(x, y, 5, 5);
    angle += speed;
    scalar += speed;
    }
