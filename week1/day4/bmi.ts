'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;

function bmiCalculator (){
return massInKg/(heightInM*heightInM);
}

console.log(bmiCalculator());