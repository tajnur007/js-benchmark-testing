'use strict'

const { runProcess } = require('../utils/helpers');

const animals = ['horse', 'rabbit', 'cat', 'dog', 'bear', 'sheep'];

function runIfElseIfVsSwitchCaseProcess() {
  console.log('Starting if-else-if ladder vs switch-case test.....');
  runProcess(usingIfElseIfLadder, usingSwitchCase);
  console.log('Process finished!\n');
}

function usingIfElseIfLadder() {
  let count = 0;

  for (let animal of animals) {
    if (animal === 'horse') {
      count++;
    } else if (animal === 'rabbit') {
      count++;
    } else if (animal === 'cat') {
      count++;
    } else if (animal === 'dog') {
      count++;
    } else if (animal === 'bear') {
      count++;
    } else {
      count++;
    }
  }
}

function usingSwitchCase() {
  let count = 0;

  for (let animal of animals) {
    switch (animal) {
      case 'horse':
        count++;
        break;
      case 'rabbit':
        count++;
        break;
      case 'cat':
        count++;
        break;
      case 'dog':
        count++;
        break;
      case 'bear':
        count++;
        break;
      default:
        count++;
        break;
    }
  }
}

module.exports = {
  runIfElseIfVsSwitchCaseProcess,
};