'use strict'

const TESTING_LIMITS = [
  1000,         // 10^3
  10000,        // 10^4
  100000,       // 10^5
  1000000,      // 10^6
  10000000,     // 10^7
];

const LIMIT_STRINGS = {
  '1000': 'Time consumed for 10^3 times: ',
  '10000': 'Time consumed for 10^4 times: ',
  '100000': 'Time consumed for 10^5 times: ',
  '1000000': 'Time consumed for 10^6 times: ',
  '10000000': 'Time consumed for 10^7 times: ',
};

module.exports = {
  TESTING_LIMITS,
  LIMIT_STRINGS,
};