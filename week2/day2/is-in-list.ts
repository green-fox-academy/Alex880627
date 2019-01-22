'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"



let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(numbers: number[]) {
    let numbers2: number[] = [4, 8, 12, 16]
    let result:boolean;
    for (let i: number; i < numbers.length; i++) {
            result = numbers.some(function(num){
                 if(num === numbers2[i]){
                     return true;
                 }
                 else{
                     return false;
                 };
            })
        }
        return result;
    }


console.log(checkNums(listOfNumbers));

export = checkNums;

