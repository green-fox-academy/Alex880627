'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.


let lines: number = 13;
let canvasSizeX: number = canvas.width/2;
let canvasSizeY: number = canvas.height/2;
let altCanvasStartX: number = 0;
let altCanvasStartYvar: number = 300;
let canvasStartXvar: number = canvasSizeX/lines;
let canvasStartY: number = 300;

function drawLine() {
    
    for (let i:number = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.moveTo(canvasStartXvar, canvasStartY);
        ctx.lineTo(canvasSizeX, altCanvasStartYvar);
        ctx.strokeStyle = 'green';
        ctx.stroke();
        
        canvasStartXvar = canvasStartXvar + canvasSizeX / lines;
        altCanvasStartYvar = altCanvasStartYvar + canvasSizeY / lines;

    }

    canvasStartXvar= 300;
    canvasStartY = canvasSizeX/lines;
    canvasSizeX = canvas.width/2;
    canvasSizeY = canvas.height/2;
    altCanvasStartX = 300;
    altCanvasStartYvar = 0; 



    for (let i:number = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.moveTo(canvasStartXvar, canvasStartY);
        ctx.lineTo(altCanvasStartX, canvasSizeY);
        ctx.strokeStyle = 'green';
        ctx.stroke();
        canvasStartY = canvasStartY + canvasSizeX / lines;
        altCanvasStartX = altCanvasStartX + canvasSizeY / lines;
    }
    

   
}


drawLine();


canvasSizeX = canvas.width/2;
canvasSizeY = canvas.height/2;
altCanvasStartX = 0;
altCanvasStartYvar = canvas.width/2;
canvasStartXvar = canvas.height/lines;
canvasStartY = 300;

function drawLine2() {
    
    for (let i:number = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.moveTo(altCanvasStartX + canvasSizeY/lines, canvasSizeY);
        ctx.lineTo(canvasSizeX, canvasStartY);
        ctx.strokeStyle = 'green';
        ctx.stroke();
        
        altCanvasStartX = altCanvasStartX + canvasSizeX/lines;
        canvasStartY = canvasStartY - canvasSizeX / lines;
        

    }

    canvasStartY = 600;
    canvasStartXvar = canvasStartY - canvasSizeX/lines;
    canvasSizeX = canvas.width/2;
    canvasSizeY = 300;
    altCanvasStartX = 300;
    altCanvasStartYvar = canvas.height/2; 



    for (let i:number = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.moveTo(canvasStartXvar, altCanvasStartYvar);
        ctx.lineTo(altCanvasStartX, canvasSizeY);
        ctx.strokeStyle = 'green';
        ctx.stroke();

        canvasSizeY = canvasSizeY + canvasSizeX / lines;
        canvasStartXvar = canvasStartXvar - canvasSizeX / lines;
        
    }
    

   
}


drawLine2();