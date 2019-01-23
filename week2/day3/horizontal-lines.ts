'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.


function drawLine(x:number,y:number){

    

    let altx:number = x+50;
    let alty:number = y;

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

