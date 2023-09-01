'use strict'

const { runProcessOnce } = require('../utils/helpers');

function runForLoopComparisonProcess() {
  console.log('Starting loop comparison test.....');
  runProcessOnce(usingForOf, usingForEach, usingCashedFor);
  console.log('Process finished!\n');
}

function usingForOf(limit) {
  let sum = 0;
  const nums = new Array(limit).fill(1);

  for (let num of nums) {
    sum += num;
  }
}

function usingForEach(limit) {
  let sum = 0;
  const nums = new Array(limit).fill(1);

  nums.forEach(num => {
    sum += num;
  });
}

function usingCashedFor(limit) {
  let sum = 0;
  const nums = new Array(limit).fill(1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
}

module.exports = {
  runForLoopComparisonProcess,
};