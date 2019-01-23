'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.



function drawLine(x: number, y: number) {

    let centerX: number = 400;
    let centerY: number = 300;
    ctx.moveTo(x, y)
    ctx.lineTo(centerX, centerY);
    ctx.stroke();

}

let edgeY: number = 0
let edgeX: number = 0
let edgeXmax: number = 800;
let edgeYmax: number = 600;

 for (let i = 0; i < edgeXmax / 20; i++) {

    

   drawLine(edgeX, edgeY);

   edgeX += 20;

}

for (let i = 0; i < edgeYmax / 20; i++) {

    drawLine(edgeX, edgeY);

    edgeY += 20;

}


for (let i = 0; i < edgeXmax / 20; i++) {

    drawLine(edgeX, edgeY);

    edgeX -= 20;

}

for (let i = 0; i < edgeYmax / 20; i++) {

    drawLine(edgeX, edgeY);

    edgeY -= 20;

}
