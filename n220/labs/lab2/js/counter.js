// 1 - Counter: Create an application that outputs a number to the console every draw call of P5. This number should start at zero, and increase by one every frame.
// I am asuming that the 0 did not have to start in the same function 

function setup(){
console.log("Start")
console.log(frameCount)
createCanvas(400, 400)
}

function draw(){
console.log(frameCount)
background(30)
textSize(30)
fill(200, 100, 20)
text(frameCount, 180, 175, 200, 200)
}