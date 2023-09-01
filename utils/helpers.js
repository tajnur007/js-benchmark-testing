'use strict'

const {
  TESTING_LIMITS,
  LIMIT_STRINGS,
} = require('./constants');

function runProcess(...functions) {
  for (let func of functions) {
    decorateFunctionName(func.name);

    for (let limit of TESTING_LIMITS) {
      try {
        const startTime = Date.now();
        const limitString = LIMIT_STRINGS[limit];

        while (limit--) func();

        const endTime = Date.now();
        console.log(limitString, endTime - startTime, 'ms');
      } catch (err) {
        console.error('Error:', err);
        break;
      }
    }

    decorateFunctionName(func.name, false);
  }
}

function decorateFunctionName(name, isStarting = true) {
  name = '---  Testing `' + name + '()` method  ---';

  let len = name.length;
  let lineString = '';

  while (len--) lineString += '-';

  if (isStarting) {
    console.log();  // Line break
    console.log(lineString);
    console.log(name);
  }

  console.log(lineString);
}

module.exports = {
  runProcess,
};