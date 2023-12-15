'use strict'

// Importing test modules
import { runDeepCloneProcess } from './tests/deep-clone.js';
import { runForLoopComparisonProcess } from './tests/for-loop-comparison.js';
import { runIfElseIfVsSwitchCaseProcess } from './tests/if-else-if-vs-switch-case.js';
import { runNTimesTwoVsNPlusNProcess } from './tests/n-times-two-vs-n-plus-n.js';
import { runOddEvenComparisonProcess } from './tests/odd-even-comparison.js';
import { runTernaryOperatorVsIfElseProcess } from './tests/ternary-operator-vs-if-else.js';


// Call imported functions into following IIFE
(function () {
  // Running each test
  runDeepCloneProcess();
  runForLoopComparisonProcess();
  runTernaryOperatorVsIfElseProcess();
  runOddEvenComparisonProcess();
  runIfElseIfVsSwitchCaseProcess();
  runNTimesTwoVsNPlusNProcess();
})();