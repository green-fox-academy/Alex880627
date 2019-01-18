let lineCount: number = 9;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
let theWals:number = lineCount-2;

    console.log('%%%%%%');
    for (let k:number=0; k<=theWals;k++){
        console.log('%    %');
    }
    console.log('%%%%%%');
