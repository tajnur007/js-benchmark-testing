'use strict'

const { runDeepCloneProcess } = require('./tests/deep-clone');
const { runForLoopComparisonProcess } = require('./tests/for-loop-comparison');
const { runIfElseIfVsSwitchCaseProcess } = require('./tests/if-else-if-vs-switch-case');
const { runOddEvenComparisonProcess } = require('./tests/odd-even-comparison');
const { runTernaryOperatorVsIfElseProcess } = require('./tests/ternary-operator-vs-if-else');


//? Call imported functions into following IIFE
(function () {
  // runDeepCloneProcess();
  // runForLoopComparisonProcess();
  // runTernaryOperatorVsIfElseProcess();
  // runOddEvenComparisonProcess();
  runIfElseIfVsSwitchCaseProcess();
})();