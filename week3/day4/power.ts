'use strict';
export { }

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

let result: number = 1;
function makePower(num: number, power: number) {
  result = result * num;
  if (power === 1) {
    console.log(result);
  }
  else {
    makePower(num, power - 1);
  }
}

makePower(3,4);