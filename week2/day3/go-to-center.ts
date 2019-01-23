
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function drawLine(x:number,y:number){

    let altx:number = 400;
    let alty:number = 300;

    ctx.beginPath();
    ctx.moveTo(x,y)
    ctx.lineTo(altx,alty);
    ctx.strokeStyle = 'red';
    ctx.stroke();

}

for(let i:number = 1; i <4;i++){
    let x:number = Math.floor((Math.random())*800);
    let y:number = Math.floor((Math.random())*600);

drawLine(x,y);
}

