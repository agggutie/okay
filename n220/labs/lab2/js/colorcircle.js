//2 - Canvas size 400x300: Create an application that draws a circle where the mouse is at. (Use  the P5 variables mouseX and mouseY for this). When the mouse is on the right half of the canvas, draw the circle in red. When the mouse is on the left side of the canvas, draw the circle in blue.

function setup(){
    createCanvas(400, 300)
}
function draw(){
    let x = mouseX
    let y = mouseY
    // was trying out variables

    background(100)
    ellipse(x, y, 9, 9)
    if(x >=width/2){ // when the mouse is on the left half of the y - axis fill blue 
        fill(255,0,0)
    } else { fill(0, 0, 255) // if not fill red 
}
}
