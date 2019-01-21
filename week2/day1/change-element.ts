'use strict';

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[] = [1, 2, 3, 8, 5, 6];

let numList2: number[] = numList.map(number => {
    if (number > 6) {
        return 4;
    }
    else {
        return number;
    }
});


console.log(numList2);
