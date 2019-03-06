'use strict';

// Write a program that prints apple after 3 seconds.

function printApple (word) {
  console.log(word);
}

setTimeout(() => {
  printApple('apple')
}, 3000);