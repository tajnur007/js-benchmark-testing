'use strict'

const { TESTING_LIMITS, LIMIT_STRINGS } = require('./constants');

/**
 * Every function will be called until reach limit.
 * @param  {Array<Function>} functions - Array of functions to be tested.
 */
function runProcess(...functions) {
  coreProcess(functions);
}

/**
 * Every function will be called only once by passing limit as param.
 * @param  {Array<Function>} functions - Array of functions to be tested.
 */
function runProcessOnce(...functions) {
  coreProcess(functions, true);
}

/**
 * Executes a set of functions and measures their performance under different limits.
 * @param {Array<Function>} functions - Array of functions to be tested.
 * @param {boolean} isCallOnce - If true, each function is called once; otherwise, called multiple times.
 */
function coreProcess(functions, isCallOnce = false) {
  for (let func of functions) {
    decorateFunctionName(func.name);

    for (let limit of TESTING_LIMITS) {
      try {
        const startTime = performance.now();
        const limitString = LIMIT_STRINGS[limit];

        if (isCallOnce) {
          runFunctionOnce(func, limit);
        } else {
          runFunctionMultipleTimes(func, limit);
        }

        const endTime = performance.now();
        console.log(`${limitString} ${endTime - startTime} ms`);
      } catch (err) {
        console.error('Error:', err);
        break;
      }
    }

    decorateFunctionName(func.name, false);
  }
}

/**
 * Runs a function once with the specified limit.
 * @param {Function} func - The function to be executed.
 * @param {number} limit - The limit parameter for the function.
 */
function runFunctionOnce(func, limit) {
  func(limit);
}

/**
 * Runs a function multiple times with the specified limit.
 * @param {Function} func - The function to be executed.
 * @param {number} limit - The limit parameter for the function.
 */
function runFunctionMultipleTimes(func, limit) {
  while (limit--) func();
}

/**
 * Decorate output with the given function name or only a line string
 * @param {string} name - Name of a function.
 * @param {boolean} isStarting - If true, function name will be show as output; otherwise, only a line will be draw.
 */
function decorateFunctionName(name, isStarting = true) {
  name = `---  Testing \`${name}()\` method  ---`;

  const lineString = '-'.repeat(name.length);

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