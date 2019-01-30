'use strict';

import { readFileSync } from "fs";

export { }

let fs = require('fs');

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyCat(fileFrom: string, fileTo: string) {
  try {
    let content: string = fs.readFileSync(fileFrom, 'utf-8');
    fs.writeFileSync(fileTo,content);
    console.log(readFileSync(fileTo,'utf-8'));
  }
  catch(error){
console.log('fuck');
  }
}

copyCat('index.txt','index2.txt');