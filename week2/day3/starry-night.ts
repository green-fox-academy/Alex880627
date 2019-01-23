'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

function night() {
    let canvasWidth: number = 800;
    let canvasHeight: number = 600;
    

    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
    ctx.fillStyle = 'black';
    

    for (let i = 0; i < 200; i++) {
        let x: number = Math.floor((Math.random()) * 800);
        let y: number = Math.floor((Math.random()) * 600);
         let grey:number = Math.floor((Math.random()) * 256);
         let radius:number = 3;
        let color:string = 'rgb(' + grey + ',' + grey + ',' + grey + ')'; 
        ctx.beginPath();
        ctx.arc(x,y,radius,0,Math.PI*radius,false);
        ctx.fill();
        ctx.fillStyle = color;
        ctx.fill();

    }
}
    night();