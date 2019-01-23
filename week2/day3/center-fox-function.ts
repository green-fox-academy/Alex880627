
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.


function drawRect(boxSize: number) {

    let blue: number = Math.floor((Math.random()) * 256);
    let green: number = Math.floor((Math.random()) * 256);
    let red: number = Math.floor((Math.random()) * 256);
    let rectStartX: number = 400;
    let rectStartY: number = 300;

    ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
    ctx.fillRect(rectStartX - boxSize / 2, rectStartY - boxSize / 2, boxSize, boxSize);
    ctx.fill();





}

drawRect(300);
drawRect(200);
drawRect(100);
