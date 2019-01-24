'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let x1: number = 0;
let y1: number = 600;
let x1: number = 0;
let y1: number = 600;
let x2: number = 0;
let y2: number = 600;
let lineCount: number = 10;
let maxWidth: number = 600;
let oneTriangleSide: number = maxWidth / lineCount;
let oneTriangleHeight: number = Math.sqrt((oneTriangleSide) * (oneTriangleSide) - (oneTriangleSide / 2) * (oneTriangleSide / 2));



for (let i = 0; i < lineCount; i++) {


    for (let a = lineCount; a > 0; a--) {

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1 + oneTriangleHeight, y1);
        ctx.lineTo(x1 + 0.5 * oneTriangleHeight, y1 - oneTriangleHeight);
        ctx.lineTo(x1, y1);
        ctx.stroke();    
    }

    y1 = y1 - oneTriangleHeight;
    x1 = x1 + 0.5 * oneTriangleHeight;

}
