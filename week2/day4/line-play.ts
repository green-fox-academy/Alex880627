'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let separate = 1;
let maxWidth: number = 600 / separate;
let lineCount: number = 30;
let zero = 0;
let x1: number = 0;
let x2: number = maxWidth;
let y1: number = 0;
let y2: number = maxWidth;

function drawTheSide1(x1: number, x2: number, y1: number, y2: number, maxWidth: number) {
  for (let i = 0; i < lineCount; i++) {
    ctx.beginPath();
    ctx.moveTo(x1 + maxWidth / lineCount, y1);
    ctx.lineTo(x2, y2 - maxWidth);
    ctx.strokeStyle = 'green';
    ctx.stroke();
    x1 = x1 + maxWidth / lineCount;
    y2 = y2 + maxWidth / lineCount;
  }
}
function drawTheSide2(x1: number, x2: number, y1: number, y2: number, maxWidth: number) {
  for (let a = 0; a < lineCount; a++) {
    ctx.beginPath();
    ctx.moveTo(x1, y1 + maxWidth / lineCount);
    ctx.lineTo(x2 - maxWidth, y2);
    ctx.strokeStyle = 'purple';
    ctx.stroke();
    y1 = y1 + maxWidth / lineCount;
    x2 = x2 + maxWidth / lineCount;
  }
}
function mainDrawTheSides(x1: number, x2: number, y1: number, y2: number, maxWidth: number) {
  drawTheSide1(x1, x2, y1, y2, maxWidth);
  drawTheSide2(x1, x2, y1, y2, maxWidth);
}


mainDrawTheSides(x1,x2,y1,y2,maxWidth);