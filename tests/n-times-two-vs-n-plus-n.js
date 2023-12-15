'use strict'

import { runProcess } from '../utils/helpers.js';

const N = 10;

export function runNTimesTwoVsNPlusNProcess() {
  console.log('\nStarting N * 2 vs N + N test.....');
  runProcess(usingNTimesTwo, usingNPlusN);
  console.log('Process finished!\n');
}

function usingNTimesTwo() {
  const result = N * 2;
}

function usingNPlusN() {
  const result = N + N;
}
