'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawRect(){


    for (let index = 0; index < 3; index++) {
    
        let rectxMax:number = Math.floor((Math.random())*150)
    let rectyMax:number = Math.floor((Math.random())*150);
    
        let rectStartX:number = Math.floor((Math.random())*800);
        let rectStartY:number = Math.floor((Math.random())*600);
    
    
        ctx.fillRect(rectStartX,rectStartY,50,50);
        ctx.fill();
        
        
    }
    
    
    }
    
    drawRect();