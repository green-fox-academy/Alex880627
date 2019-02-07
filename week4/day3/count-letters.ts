'use strict';

/* Count Letters
Write a function, that takes a string as an argument and returns a
 dictionary with all letters in the string as keys, and numbers as values that 
 shows how many occurrences there are.
Create a test for that. */

let word:string = 'fekete bikapata kopog a patika pepita kövein';


let dictionary: object = {};
function countLetters(word:string){
let letterArr:any []= word.replace(/ /g,'').split('');

letterArr.forEach(letter => {
  if(dictionary[letter] === undefined){
   dictionary[letter] = 1;
  }
  else{
    dictionary[letter]++;
  } 
  return dictionary;
});
return dictionary;
}

console.log(countLetters(word));


