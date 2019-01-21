'use strict';


// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let lengthOfTheTable:number = 4;
let arr1: number[] = [];

for (let i: number = 4; i > 0; i--) {
    arr1.push(0);
}
for (let i: number = 1; i < 5; i++) {
    arr1[arr1.length - i] = 1;
    console.log(arr1);
}






