'use strict'

import { runProcess } from '../utils/helpers.js';

// Storing 1 to 1000 numbers into an array
const nums = new Array(1000).fill(0).map((v, i) => i + 1);

export function runOddEvenComparisonProcess() {
  console.log('\nStarting odd-even test using % and & operator.....');
  runProcess(usingModulusOperator, usingAmpersandOperator);
  console.log('Process finished!\n');
}

function usingModulusOperator() {
  let isEven;

  for (let num of nums) {
    isEven = (num % 2) ? false : true;
  }
}

function usingAmpersandOperator() {
  let isEven;

  for (let num of nums) {
    isEven = (num & 1) ? false : true;
  }
}
