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


let lineCount: number = 8;


for (let i: number = 0; i <= lineCount; i++) {
    let row: string = '';

    for (let j: number = 1; j <= (lineCount - i); j++) {
        row += ' ';
    }

    for (let k: number = 1; k <= (i*2)+1; k++) {
            row += '*';

    }

    console.log(row);

}

