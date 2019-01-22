'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(list1: string[], list2: string[]) {
    let result: string[] = [];
    if (list1.length > list2.length) {
        for (let i: number = 0; i < list1.length; i++) {
            if (typeof list1[i] != 'string') {
                result.push(list2[i]);
            }
            else {
                result.push(list1[i]);
                result.push(list2[i]);
            }
        }
    }
    else {
            for (let i: number = 0; i < list2.length; i++) {
                if (typeof list2[i] != 'string') {
                    result.push(list1[i]);
                }
            
                else {
                result.push(list2[i]);
                result.push(list1[i]);
            }
        }
    
        return result;
    }


}

console.log(makingMatches(girls, boys));

export = makingMatches;


