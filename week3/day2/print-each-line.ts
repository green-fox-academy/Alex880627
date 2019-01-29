'use strict';
export { }

let fs = require('fs');


// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

function readFile(file: string) {
  
  try {
    let content: string = fs.readFileSync(file, 'utf-8');
    if (content) {
      console.log(content);
    }
    else {
      throw new Error('Not really finding the filename');
    }
  }
  catch (error) {
    console.log(error.message);
  }
}

readFile('index.tx');



