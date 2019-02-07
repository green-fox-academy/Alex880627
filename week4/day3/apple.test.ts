'use strict';

import {Apple} from './apple';

let test = require('tape');

test('result for the function', (t) => {
  let apple = new Apple;
  let actual:string = apple.getApple();
  let expected:string = 'apple';
  t.equal(actual, expected);
  t.end();
})
