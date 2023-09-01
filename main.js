'use strict'

//? Import your testing files/funcions here
const { runDeepCloneProcess } = require('./tests/deep-clone');


//? Call imported functions into following IIFE
(function () {
  runDeepCloneProcess();
})();