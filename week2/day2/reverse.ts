'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
/* console.log(reverse(reversed)); */

function reverseTheSentence(toReverse:string){
let textToArray:string[] = toReverse.split('');
let separatedArr:string[] = textToArray.reverse();
return separatedArr.join('');

}

console.log(reverseTheSentence(reversed));

/* export = reverse; */

