import {anagram} from './anagram'

let test = require('tape');

test('test output for annagram exercise with string with no spaces', (t) => {
  let sent1 = 'banaan';
  let sent2 = 'banana';
  let actual:boolean = anagram(sent1,sent2);
  let expected:boolean = true;
  t.equal(actual, expected, );
  t.end();
})

test('test output for the case anagram with numbers', (t) => {
  let sent1 = 'ba2naan';
  let sent2 = 'banan2a';
  let actual:boolean = anagram(sent1,sent2);
  let expected:boolean = true;
  t.equal(actual, expected);
  t.end();
});


test('test output for the case anagram with numbers, spaces', (t) => {
  let sent1 = 'ba2na an';
  let sent2 = 'ba nan2a';
  let actual:boolean = anagram(sent1,sent2);
  let expected:boolean = true;
  t.equal(actual, expected, );
  t.end();
});


test('test output for the case anagram with numbers, multiplyspaces', (t) => {
  let sent1 = 'ba2 na an';
  let sent2 = 'ba na n2 a';
  let actual:boolean = anagram(sent1,sent2);
  let expected:boolean = true;
  t.equal(actual, expected, );
  t.end();
});