'use strict'

const {
  TESTING_LIMITS,
  LIMIT_STRINGS,
} = require('./constants');

function runProcess(...functions) {
  for (let func of functions) {
    decorateFunctionName(func.name);

    TESTING_LIMITS.forEach(limit => {
      const startTime = Date.now();
      const limitString = LIMIT_STRINGS[limit];

      while (limit--) func();

      const endTime = Date.now();
      console.log(limitString, endTime - startTime, 'ms');
    });

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