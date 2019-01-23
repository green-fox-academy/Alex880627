'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

    


function drawRect(boxSize: number) {
    let blue: number = Math.floor((Math.random()) * 256);
    let green: number = Math.floor((Math.random()) * 256);
    let red: number = Math.floor((Math.random()) * 256);
    let opacity:number = 1;
    
    
    let rectStartX: number = 400;
    let rectStartY: number = 300;
    
    for (let index = 0; index < 10; index++) {
        let color:string = 'rgba(' + red + ',' + green + ',' + blue + ','+opacity+')';   
        opacity -= 0.1; 
        boxSize +=50;
        ctx.fillStyle = color;
        ctx.fillRect(rectStartX - 1.333333*boxSize / 2, rectStartY - boxSize / 2, 1.333333*boxSize, boxSize);
        ctx.fill();
        
    }

}

drawRect(50);

