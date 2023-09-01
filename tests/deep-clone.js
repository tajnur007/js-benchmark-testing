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

function usingJsonMethods() {
  try {
    JSON.parse(JSON.stringify(obj));
  } catch (err) {
    throw err;
  }
}

function usingStructuredClone() {
  try {
    structuredClone(obj);
  } catch (err) {
    throw 'Node version have to be v17.0.0 or higher to run this process';
  }
}

function runDeepCloneProcess() {
  console.log('Starting deep clone test.....');
  runProcess(usingJsonMethods, usingStructuredClone);
  console.log('Process finished!\n');
}

module.exports = {
  runDeepCloneProcess,
};