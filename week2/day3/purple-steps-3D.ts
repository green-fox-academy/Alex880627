'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


function drawRect(boxNumber:number) {
    let color:string = 'purple';
    let distortion:number =  1.3333333;
    let rectStartX: number = 0;
    let rectStartY: number = 0;
    let boxSize:number = 40;
    
        

    for (let index = 0; index < boxNumber; index++) {
        setTimeout(function(){

       
        
        ctx.fillStyle = color;
        ctx.strokeStyle = 'black';
        ctx.fillRect(rectStartX, rectStartY, distortion*boxSize, boxSize);
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(rectStartX,rectStartY)
        ctx.lineTo(rectStartX+distortion*boxSize,rectStartY);
        ctx.lineTo(rectStartX+distortion*boxSize, rectStartY+boxSize);
        ctx.lineTo(rectStartX, rectStartY+boxSize);
        ctx.lineTo(rectStartX,rectStartY);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        
        
        rectStartX = rectStartX + boxSize*distortion; 
        rectStartY = rectStartY + boxSize;
        boxSize = boxSize + 20;
        

        }, 500*index)
    }

}



drawRect(10);
