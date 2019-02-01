'use strict';
export { }
// Write a recursive function that takes one parameter: n and counts down from n.

function countFrom(num: number) {
  console.log(num);
  if (num != 0) {
    countFrom(num - 1)
  }
  else{
    console.log('done');
  }
}

countFrom(5);