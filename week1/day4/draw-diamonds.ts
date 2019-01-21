'use strict';


// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

// this counts the breakingpoint

let lineCount: number = 17;
let breakPoint: number;

if (lineCount % 2 === 1) {
    breakPoint = ((lineCount - 1) / 2) + 1;
}
else { breakPoint = (lineCount / 2) }

console.log(breakPoint);

//It is checking the if the number is odd or even
let oddOreven: number = 5;
if (breakPoint % 2 === 1) {
    oddOreven = 0;
}
else {
    oddOreven = 1;
}


for (let i: number = 0; i <= breakPoint; i++) {
    let row: string = '';

    for (let j: number = 1; j <= (breakPoint - i); j++) {
        row += ' ';
    }

    for (let k: number = 1; k <= (i * 2) + 1; k++) {
        row += '*';

    }

    console.log(row);

}

for (let i: number = breakPoint; i >= 0; i--) {
    let row2: string = '';

    for (let k: number = 1; k <= (breakPoint - i) + oddOreven; k++) {
        row2 += ' ';
    }

    for (let j: number = 1; j <= ((i * 2) + 1) - (2 * oddOreven); j++) {
        row2 += '*';
    }

    console.log(row2);

}