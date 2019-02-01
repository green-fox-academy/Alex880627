'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidth: number = 600;

let x: number = 0;
let y: number = 0;

function drawRect( x: number, y: number, canvasWidth: number) {
  ctx.strokeStyle = 'red';
  ctx.strokeRect(x, y, canvasWidth, canvasWidth);
  if(canvasWidth>20){
    drawRect(x + canvasWidth/3, y, canvasWidth/3);
    drawRect(x, y+canvasWidth/3, canvasWidth/3);
    drawRect(x + canvasWidth/3, y + canvasWidth/3*2, canvasWidth/3);
    drawRect(x + canvasWidth/3*2, y + canvasWidth/3, canvasWidth/3);
  }  
  else{console.log('fck');}
}
drawRect(0,0,canvasWidth)



