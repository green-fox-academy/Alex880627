'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial


function factorio(tillNum:number){
    let result:number = 1;
       for(let i:number = 1; i <= tillNum; i++){
        result=result*i;
       
    }
    return result;
   }
   
   console.log(factorio(3));