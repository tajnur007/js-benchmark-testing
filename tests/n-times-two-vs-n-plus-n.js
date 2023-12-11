'use strict'

const { runProcess } = require('../utils/helpers');

const N = 10;

function runNTimesTwoVsNPlusNProcess() {
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

module.exports = {
  runNTimesTwoVsNPlusNProcess,
};