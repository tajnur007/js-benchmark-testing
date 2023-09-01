'use strict'

const { runDeepCloneProcess } = require('./tests/deep-clone');
const { runForLoopComparisonProcess } = require('./tests/for-loop-comparison');


//? Call imported functions into following IIFE
(function () {
  runDeepCloneProcess();
  runForLoopComparisonProcess();
})();