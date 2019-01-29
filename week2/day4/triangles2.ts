'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let lineCount: number = 20;
let maxWidth: number = 600;
let oneTriangleSide: number = maxWidth / lineCount;
let oneTriangleHeight: number = Math.sqrt((oneTriangleSide) * (oneTriangleSide) - (oneTriangleSide / 2) * (oneTriangleSide / 2));

function drawTri(x1: number, y1: number) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + oneTriangleSide, y1);
    ctx.lineTo(x1 + 0.5 * oneTriangleSide, y1 - oneTriangleHeight);
    ctx.lineTo(x1, y1);
    ctx.stroke();

}
let xVertical: number = -30;
let yVertical: number = 600;

function drawBigTri() {

 

    for (let a: number = 0; a < lineCount; a++) {
        setTimeout(function () {
            for (let i: number = lineCount - 1 * a; i > 0; i--) {
                drawTri(xVertical + i * oneTriangleSide, yVertical);
            }
        yVertical = yVertical - oneTriangleHeight;
        xVertical = xVertical + 0.5 * oneTriangleSide;
        }, a * 600)
    }
}

drawBigTri();