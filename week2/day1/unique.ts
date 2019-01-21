'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr: any[]) {
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = 0; j < arr.length; j++) {
            
            if (arr[i] === arr[j]) {
                let e:number = 0;
                e++
                if (e===1){
                    continue;
                }
                else {
                    arr.splice(j, 1);
                }
                return arr;
            }
            
        }


    }
    
}


console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]));



