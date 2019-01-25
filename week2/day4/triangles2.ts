'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let lineCount: number = 15;
let maxWidth: number = 600;
let oneTriangleSide: number = maxWidth / lineCount;
let oneTriangleHeight: number = Math.sqrt((oneTriangleSide) * (oneTriangleSide) - (oneTriangleSide / 2) * (oneTriangleSide / 2));

function drawTri(x1: number, y1: number) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + oneTriangleHeight, y1);
    ctx.lineTo(x1 + 0.5 * oneTriangleHeight, y1 - oneTriangleHeight);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    
}

function drawBigTri() {

    let xVertical: number = 0;
    let yVertical: number = 600;
    
        for (let a: number = 0; a < lineCount; a++) {
            setTimeout(function(){
            for (let i: number = lineCount - 1 * a; i > 0; i--) {
                drawTri(xVertical + i * oneTriangleHeight, yVertical);
            }
            yVertical = yVertical - oneTriangleHeight;
            xVertical = xVertical + 0.5 * oneTriangleHeight;
    
        },a*1000)
    }
    

}

drawBigTri();