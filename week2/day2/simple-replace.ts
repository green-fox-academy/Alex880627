
'use strict';

let example: string = 'In a dishwasher far far away';
let word1:string = 'dishwasher';
let word2:string = 'galaxy';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

function replaceIt(sentence:string, toSearch:string, toChange:string){
let textTomodify:string = sentence;
let textTosearch:string = toSearch;
let textToChange:string = toChange;
return textTomodify.replace(textTosearch,textToChange);
}

console.log(replaceIt(example, word1,word2));
console.log(example);

export = example;

