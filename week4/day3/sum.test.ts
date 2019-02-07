'use strict';

import {SumExercise} from './sum';

let test = require('tape');

test('test the output with numberarray for the class SumExercise', (t) => {
  let arr1: number[] = [6, 6, 6, 6, 6];
  let sum1 = new SumExercise(arr1);
  let actual:number = sum1.sum();
  let expected:number = 30;
  t.equal(actual, expected, );
  t.end();
})

test('test the output with null', (t) => {
  let arr1: any[] = [null];
  let sum1 = new SumExercise(arr1);
  let actual:number = sum1.sum();
  let expected:number = 0;
  t.equal(actual, expected, );
  t.end();
})

test('test the output with string', (t) => {
  let arr1: any[] = ['string'];
  let sum1 = new SumExercise(arr1);
  let actual:number = sum1.sum();
  let expected:number = 0;
  t.equal(actual, expected, );
  t.end();
})

test('test the output with one element', (t) => {
  let arr1: any[] = [6];
  let sum1 = new SumExercise(arr1);
  let actual:number = sum1.sum();
  let expected:number = 6;
  t.equal(actual, expected, );
  t.end();
})
