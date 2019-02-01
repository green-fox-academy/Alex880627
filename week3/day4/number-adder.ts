'use strict';
export { }

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
let add:number = 0;

function addFrom(num: number) {
  
  add = add+num;
  if (num != 0) {
    addFrom(num - 1)
  }
  else{
    console.log('the result is: '+add);
  }
  
}

addFrom(50);