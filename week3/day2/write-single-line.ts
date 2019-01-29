'use strict';
export { }

let fs = require('fs');


// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"


function writeFile(fileName: string, sent: string) {
  try {
    let content: string = fs.readFileSync(fileName, 'utf-8')
      fs.writeFileSync(fileName, sent);
      console.log(content);
    }
  catch (e) {
  console.log('unable to find filename');
  }
}

writeFile('index.txt','sanyi');



