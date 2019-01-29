'use strict';
export { }

let fs = require('fs');

// Write a function that takes a filename as string
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function countLines(fileName: any) {
  try {
    let content: string = fs.readFileSync(fileName, 'utf-8');
    let contentArr: any[] = content.split("\n");
    if (fileName) {
      console.log(contentArr.length);
    }
    else {
      console.log('Cannot find the file');
    }
  }
  catch (e) {
  }
  return;
}

countLines('indx.txt');










