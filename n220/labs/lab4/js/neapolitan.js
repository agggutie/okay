let colorc = [];

let colors = ["#FA94C4","#FFDDBD", "#725349"];

function setup(){
    createCanvas(400,400);
    for(let i = 0; i < 3; i++){
    let x = 10 + 30 * i;
    let r = random(10, 40)
        colorc[i] = new circle(x,200,r);
    }
}

function draw(){
    background(50);
    for (let i = 0; i < colorc.length; i++){
        colorc[i].push
    }
}
