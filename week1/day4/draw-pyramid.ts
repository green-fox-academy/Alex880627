'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is


let lineCount: number = 4;


for (let i: number = 1; i <= lineCount; i++) {
    let row: string = '';

    for (let j: number = 1; j <= (lineCount - i); j++) {
        row += ' ';
    }

    for (let k: number = 1; k <= i; k++) {
        if (k === 1) {
            row += '*';
        }
        else {
            row += '**';
        }


    }

    console.log(row);

}

