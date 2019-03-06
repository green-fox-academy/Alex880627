'use strict';

const mapWith = (array, callback) => {
let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i])); 
  }

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return result;
}
const addOne = (number) => {
  return number + 1;
}

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

function removeSecondLetter(word){
 let array1 = word.split('');
 let result = '';
  for (let i = 0; i < array1.length; i++) {
    if(i%2 === 0){
      result+=array1[i];
    }    
  }
  return result;
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']