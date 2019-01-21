'use strict';

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

let firstList: number[] = [1, 2, 3];

let secondList: number[] = [4, 5];

function compareArr(a: number[], b: number[]) {
    if (a.length < b.length) {
        console.log('The second List has more elements than the firstone');
    }
    else {
        console.log('The first list has more elements than the secondone');
    }
}

compareArr(firstList,secondList);