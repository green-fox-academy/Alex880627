'use strict';
export { }

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

let result = 0;

function countBunnyEar(bunny: number) {
  if (bunny % 2 === 1) {
    result = result + 3;
    countBunnyEar(bunny - 1);
  }
  else {
    if (bunny === 0) {
      console.log(result);
    }
    else {
      result = result + 2;
      countBunnyEar(bunny - 1);
    }
  }
}

countBunnyEar(18);