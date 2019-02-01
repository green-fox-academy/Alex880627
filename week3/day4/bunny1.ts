'use strict';
export { }

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

let result = 0;

function countBunnyEar(bunny: number) {
  if (bunny === 0) {
    console.log(result);
  }
  else {
    result = result + 2;
    countBunnyEar(bunny - 1);
  }
}

countBunnyEar(77);