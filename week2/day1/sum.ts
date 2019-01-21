'use strict';

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(tillNum:number){
 let result:number = 0;
    for(let i:number = 0; i <= tillNum; i++){
     result=result+i;
    
 }
 return result;
}

console.log(sum(10));