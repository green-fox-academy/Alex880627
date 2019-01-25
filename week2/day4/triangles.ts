'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.



let lineCount: number = 18;
let maxWidth: number = 600;
let oneTriangleSide: number = maxWidth / lineCount;
let oneTriangleHeight: number = Math.sqrt((oneTriangleSide) * (oneTriangleSide) - (oneTriangleSide / 2) * (oneTriangleSide / 2));
let hardTodefineCoordinate: number = Math.sqrt((maxWidth) * (maxWidth) - (maxWidth / 2) * (maxWidth / 2)) + oneTriangleHeight;

function triangleDraw(x1: number, y1: number, x2: number, y2: number) {
    for (let i: number = 0; i < lineCount; i++) {
        setTimeout(function () {
            ctx.beginPath();
            ctx.moveTo(x1, y1 - oneTriangleHeight);
            ctx.lineTo(x2, y2 - oneTriangleHeight);
            ctx.stroke();

            x1 = x1 + 0.5 * oneTriangleSide;
            y1 = y1 - oneTriangleHeight;
            x2 = x2 - 0.5 * oneTriangleSide;
            y2 = y2 - oneTriangleHeight;
        }, 600 * i);

    }

}

function triangleDraw2(x1: number, y1: number, x2: number, y2: number) {


    for (let i: number = 0; i < lineCount; i++) {

        setTimeout(function () {
            ctx.beginPath();
            ctx.moveTo(x1, y1 + oneTriangleHeight);
            ctx.lineTo(x2, y2 + oneTriangleHeight);
            ctx.stroke();

            x1 = x1 + 0.5 * oneTriangleSide;
            y1 = y1 + oneTriangleHeight;
            x2 = x2 + oneTriangleSide;
            y2 = y2;
        }, i * 600);
    }
}


function triangleDraw3(x1: number, y1: number, x2: number, y2: number) {
    for (let i: number = 0; i < lineCount; i++) {
        setTimeout(function () {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2 - oneTriangleHeight);
            ctx.stroke();

            x1 = x1 - 0.5 * oneTriangleSide;
            y1 = y1 + oneTriangleHeight;
            x2 = x2 - oneTriangleSide;
            y2 = y2;
        }, i * 600);

    }

}


        triangleDraw(0, maxWidth, maxWidth, maxWidth);
        triangleDraw2(maxWidth / 2, maxWidth - hardTodefineCoordinate - oneTriangleHeight, 0, maxWidth - 2 * oneTriangleHeight);
        triangleDraw3(maxWidth / 2, maxWidth - hardTodefineCoordinate, maxWidth, maxWidth);

