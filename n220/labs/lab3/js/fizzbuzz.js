function setup(){
    createCanvas(800, 800)
    background(200)
}

function draw(){
    for( x = 11; x < 800; x += 32){
        fill(0, 0, 0)
         circle(x, 400, 10)
    }
    
}