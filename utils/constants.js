'use strict'

const TESTING_LIMIT_EXPONENTS = [3, 4, 5, 6, 7];

export const TESTING_LIMITS = TESTING_LIMIT_EXPONENTS.map(exp => 10 ** exp);

export const LIMIT_STRINGS = {};
TESTING_LIMIT_EXPONENTS.forEach(exp => {
  const key = 10 ** exp;
  LIMIT_STRINGS[key.toString()] = `Time consumed for 10^${exp} times: `;
});
