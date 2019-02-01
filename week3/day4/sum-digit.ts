'use strict';
export { }

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

let result:number = 0;

function addDigits(num: number) {
  if (num < 10) {
    return console.log(num+result);
  }
  else{
    result = result + num%10;
    num = Math.floor(num/10);
    addDigits(num);
  }
}

addDigits(88888);


