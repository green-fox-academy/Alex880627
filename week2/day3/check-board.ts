'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


let boxSize: number = 50;
let rectStartY: number = -50;
let rectStartX: number = 0;

for (let i = 0; i < 12; i++) {

    if (rectStartX > 60){
        rectStartX = 0;
    
    }
         rectStartY += 50;

    for (let i = 0; i < 10; i++) {


        ctx.fillStyle = 'black';
        ctx.fillRect(rectStartX + i * 2 * boxSize, rectStartY, boxSize, boxSize);
        ctx.fill();

    }

    rectStartX += 50;

    for (let j = 0; j < 10; j++) {

        ctx.fillStyle = 'black';
        ctx.fillRect(rectStartX + (j * 2 * boxSize), rectStartY + boxSize, boxSize, boxSize);
        ctx.fill()
        


    }


}