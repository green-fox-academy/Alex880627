'use strict';

import { strict } from "assert";

export { }

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.
let sent: string = 'axaaaxaxaxaa';
let letterChange: string = 'y';
let result = 0;
let lengthOfSent: number = sent.length;

/* console.log(lengthOfSent); */

function changeChar(lengthOfSent:number) {
  let changedString: string = sent.replace(/x/g, letterChange);
  if(lengthOfSent === 0){
    return console.log((result));
  }
  else if (changedString.charAt(lengthOfSent-1) === letterChange) {
    result++;
      changeChar(lengthOfSent=lengthOfSent-1);
  }
  else{
     changeChar(lengthOfSent=lengthOfSent-1);
  }
}
changeChar(lengthOfSent);

