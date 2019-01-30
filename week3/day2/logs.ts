'use strict';
export { }

let fs = require('fs');


// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

function returnUniq(filePath: string) {
  let splitArray: any[] = fs.readFileSync(filePath, 'utf-8').split('/');
  let multiArr: any[][] = [];
  let uniqueIp: any[] = [];
  splitArray.map(function (each) {
    return multiArr.push(each.split('  '));
  })
 for (let i = 0; i < splitArray.length; i++) {
   for (let a = 1; a < splitArray.length; a++) {
     if(multiArr[i][2]===multiArr[a][2]){
       uniqueIp.push(multiArr[i][2]);
     }
     else{
       continue;
     }
   }
 }
 console.log(uniqueIp);
}

returnUniq('files.txt');
