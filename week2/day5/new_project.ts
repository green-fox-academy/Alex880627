'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let center:number = 300;
let canvasSize = 600;
let x: number = center;
let y: number = center;
let radius:number = 50;
let relX: number = 4;
let relY: number = 4;


function ball() {
  ctx.clearRect(0, 0, 600, 600);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'red';
  ctx.fill();
}

function animateIt() {
  requestAnimationFrame(animateIt);
  
  ball();

  if (y >= canvasSize-radius || y <= center-radius){
    relY = -relY;
  }
    y = y + relY;

}

animateIt();