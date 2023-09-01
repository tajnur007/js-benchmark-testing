'use strict'

const {
  TESTING_LIMITS,
  LIMIT_STRINGS,
} = require('./constants');

//? Every function will be called until reach limit
function runProcess(...functions) {
  coreProcess(functions);
}

//? Every function will be called only once by passing limit as param
function runProcessOnce(...functions) {
  coreProcess(functions, true);
}

/**
 *? Handling how process will be called based on passing the
 *? isCallOnce param. This method will serve for both the 
 *? runProcess() and runProcessOnce() methods.
 */
function coreProcess(functions, isCallOnce = false) {
  for (let func of functions) {
    decorateFunctionName(func.name);

    for (let limit of TESTING_LIMITS) {
      try {
        const startTime = Date.now();
        const limitString = LIMIT_STRINGS[limit];

        if (isCallOnce) {
          func(limit);
        } else {
          while (limit--) func();
        }

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
  runProcessOnce
};