'use strict'

const { runDeepCloneProcess } = require('./tests/deep-clone');
const { runForLoopComparisonProcess } = require('./tests/for-loop-comparison');
const { runOddEvenComparisonProcess } = require('./tests/odd-even-comparison');
const { runTernaryOperatorVsIfElseProcess } = require('./tests/ternary-operator-vs-if-else');


//? Call imported functions into following IIFE
(function () {
  // runDeepCloneProcess();
  // runForLoopComparisonProcess();
  // runTernaryOperatorVsIfElseProcess();
  runOddEvenComparisonProcess();
})();