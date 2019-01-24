'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.


let lines: number = 13;
let canvasSizeX: number = canvas.width;
let canvasSizeY: number = canvas.height;
let widthStartX: number = 0;
let widthStartY: number = 0;
let heightStartX: number = canvasSizeX/lines;
let heightStartY: number = 0;


function draw(){
    

    for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.moveTo(heightStartX, heightStartY);
        ctx.lineTo(canvasSizeX, widthStartY);
        ctx.strokeStyle = 'purple';
        ctx.stroke();
        
        heightStartX = heightStartX + canvasSizeX / lines;
        widthStartY = widthStartY + canvasSizeY / lines;

    }

    heightStartX= 0;
    heightStartY = canvasSizeX/lines;
    canvasSizeX = canvas.width;
    canvasSizeY = canvas.height;
    widthStartX = 0;
    widthStartY = 0; 
    

    for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.moveTo(heightStartX, heightStartY);
        ctx.lineTo(widthStartX, canvasSizeY);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        heightStartY = heightStartY + canvasSizeX / lines;
        widthStartX = widthStartX + canvasSizeY / lines;
    }
}


draw();



