let y = [0,133,266];

let colors = ["#FA94C4","#FFDDBD", "#725349"];

function setup(){
    createCanvas(400,400);
    

}

function draw(){
    background(0);

    for(var i = 0; i < 3; i++){ // adds 1 to the i interger
        noStroke()
        fill(colors[i])
        rect(0, y[i], 400, 133.33)
    }
}
