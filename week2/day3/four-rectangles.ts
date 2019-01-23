'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function drawRect(){


for (let index = 0; index < 4; index++) {

    let rectxMax:number = Math.floor((Math.random())*150)
let rectyMax:number = Math.floor((Math.random())*150);

    let rectStartX:number = Math.floor((Math.random())*800);
    let rectStartY:number = Math.floor((Math.random())*600);
     let blue:number = Math.floor((Math.random())*256);
     let green:number = Math.floor((Math.random())*256);
     let red:number = Math.floor((Math.random())*256);

    ctx.fillRect(rectStartX,rectStartY,rectxMax,rectyMax);
    ctx.fillStyle= 'rgb('+red+','+green+','+blue+')';
    ctx.fill();
    
    
}

}

drawRect();