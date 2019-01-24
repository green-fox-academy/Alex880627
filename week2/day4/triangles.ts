'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.



 function triangleDraw(x1:number,y1:number,x2:number,y2:number){
    let lineCount:number = 25;
    let maxWidth:number = 600;
    let oneTriangleSide: number = maxWidth / lineCount;
    let oneTriangleHeight: number = Math.sqrt((oneTriangleSide) * (oneTriangleSide) - (oneTriangleSide / 2) * (oneTriangleSide / 2));

    for (let i: number = 0; i < lineCount; i++) {
        
        ctx.beginPath();
        ctx.moveTo(x1, y2 - oneTriangleHeight);
        ctx.lineTo(x2, y2 - oneTriangleHeight);
        ctx.stroke();


        x1 = x1 + 0.5 * oneTriangleSide;
        x2 = x2 - 0.5 * oneTriangleSide;
        y2 = y2 - oneTriangleHeight;
       
    }

 }

 triangleDraw(0,600,600,600);
