//5 - Ever Larger, until not: Create an application that draws a circle to the center of the screen every update frame, starting with a diameter of 1. Using a global variable, change increase the diameter of the circle by 1 every frame. Once the circle gets a diameter of 200, set its diameter back to 1.

let diameter = 1 

function setup(){
    createCanvas(800, 400)
}

function draw(){
    background(100)
    diameter += 1;
    circle(400,200, diameter)
        console.log(diameter )
         if(diameter <= 200){
        console.log("here")
         }
         else{ diameter = 1

         }
    }