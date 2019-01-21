'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...parameters:any[]){
    parameters.forEach(elementOnArray => {
        console.log(elementOnArray);
    });
console.log(parameters);
}

printParams('Sanyi', 'Béla', 'Laci','maci');
