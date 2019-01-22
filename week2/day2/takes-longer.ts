'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';

/* console.log(quote); */


let splited:string[] = quote.split('');
splited.splice(quote.indexOf('It')+3,0,'always takes longer than" between the words ');
console.log(splited.join(''));
/* console.log(quote2.join('')); */

