'use strict'

const { runProcess } = require('../utils/helpers');

const animals = ['horse', 'rabbit', 'cat', 'dog', 'bear', 'sheep'];

function runIfElseIfVsSwitchCaseProcess() {
  console.log('\nStarting if-else-if ladder vs switch-case test.....');
  runProcess(usingIfElseIfLadder, usingSwitchCase);
  console.log('Process finished!\n');
}

function usingIfElseIfLadder() {
  let count = 0;

  for (let animal of animals) {
    if (animal === 'horse') {
      count += 5;
    } else if (animal === 'rabbit') {
      count *= 3;
    } else if (animal === 'cat') {
      count -= 7;
    } else if (animal === 'dog') {
      count /= 2;
    } else if (animal === 'bear') {
      count++;
    } else {
      count *= count;
    }
  }
}

function usingSwitchCase() {
  let count = 0;

  for (let animal of animals) {
    switch (animal) {
      case 'horse':
        count += 5;
        break;
      case 'rabbit':
        count *= 3;
        break;
      case 'cat':
        count -= 7;
        break;
      case 'dog':
        count /= 2;
        break;
      case 'bear':
        count++;
        break;
      default:
        count *= count;
        break;
    }
  }
}

module.exports = {
  runIfElseIfVsSwitchCaseProcess,
};