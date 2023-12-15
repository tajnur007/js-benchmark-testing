'use strict'

const { runProcess } = require('../utils/helpers');

//? The object, which one we would like to create a clone
const obj = {
  id: 0,
  name: 'Kazi Tajnur Islam',
  email: 'tajnur007@gmail.com',
  address: {
    house: 'A/B, Mirpur',
    city: 'Dhaka',
    zipCode: 1234,
    country: 'Bangladesh'
  }
};

function deepCloneWithJSON() {
  try {
    JSON.parse(JSON.stringify(obj));
  } catch (err) {
    throw err;
  }
}

function deepCloneWithStructuredClone() {
  try {
    structuredClone(obj);
  } catch (err) {
    throw 'Node version have to be v17.0.0 or higher to run this process';
  }
}

function runDeepCloneProcess() {
  console.log('\nStarting deep clone test.....');
  runProcess(deepCloneWithJSON, deepCloneWithStructuredClone);
  console.log('Process finished!\n');
}

module.exports = {
  runDeepCloneProcess,
};