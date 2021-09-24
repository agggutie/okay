let y = [0, 100,200,300,400,500,];
let x = [0,110,220,320,420,520]
let back = ["#D7D8C9","#A4A68A", "#F2BE24","#57523E", "#D94C1A"]

let colors = ["#D7D854","#A4A68A", "#F2BE24","#57523E", "#D94C1A" ];

function setup(){
    createCanvas(600,600);
}

function draw(){
    for(var i = 0; i < 6; i++){
    background(back[i])
    {

    for(var i = 0; i < 6; i++){ // adds 1 to the i interger
        noStroke()
        fill(colors[i])
        rect(x[i], y[i], 400, 133.33)
    }
}
}
}