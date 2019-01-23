'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let box:number[][] = [[10, 10], [290,  10], [290, 290], [10, 290]]

function connect(toConnect:number[][]){

    ctx.beginPath();
    
    for (let i = 0; i < toConnect.length; i++) {
        ctx.moveTo(toConnect[i][i],toConnect[i][i+1]);
        ctx.lineTo(toConnect[i+1][i],toConnect[i+1][i+1]);
    ctx.strokeStyle = 'green';
    ctx.stroke();
    }
    
    

    

}

connect(box);