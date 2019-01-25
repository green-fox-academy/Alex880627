'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let col:number = 10;
let row:number = 10;
let maxWidth:number = 600;
let x:number = 0;
let y:number = 0;
let width:number = maxWidth/col;
let height:number = maxWidth/row;

function rectDraw(x:number,y:number,width:number,height:number){
ctx.beginPath();
 ctx.strokeStyle= 'blue';
 ctx.strokeRect(x,y,width,height);
}

for (let i = 0; i < col; i++){
  for (let j = 0; j < row; j++) {
    rectDraw(x,y,width,height); 
    x = i*maxWidth/row;
    y = j*maxWidth/row;
  }
}

