'use strict';

let workHours:number = 6;
let semesterWeeks:number = 17;
let weeklyDays:number = 5;

function countCoding(){
 return weeklyDays*semesterWeeks*workHours;
}



let codingHours:number = countCoding();
let studyHours:number = 52;

console.log(codingHours);


function percentageOfCoding(){
    console.log( (codingHours / semesterWeeks)/(studyHours/100) );  
}

percentageOfCoding();