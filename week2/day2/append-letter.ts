'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];


function appendA(list:string[]){
    let result:string[]=[];
    list.map(eachMember=>{
        result.push(eachMember.concat('a'));
    })
    return result;
}

console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

export = appendA;

