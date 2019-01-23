'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

let mainNumber:string = prompt('What is the number');
let num1:number =parseInt(mainNumber);

for (let i:number = 0; i < num1 -1; i++){
    let arr1:any= [];
     let numToAdd:number = parseInt(prompt('What is the next number?'));
     arr1.push(numToAdd);

     console.log(arr1);
    }
