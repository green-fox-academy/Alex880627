'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
let a:number = 6;
let b:number = 7;
let c:number = 8;

let surface:number = (a*b*2)+(a*c*2)+(b*c*2);
let volume:number = (a*b*c)

console.log('Surface area: '+surface);
console.log('Volume: '+volume);