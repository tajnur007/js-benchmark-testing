'use strict'

const {runProcess} = require('../utils/helpers');

const original = {
  id: 0, 
  prop: {
    name: 'Kazi Tajnur Islam',
    email: 'tajnur007@gmail.com'
  }
};

function deepCloneTesting() {
  console.log('Inside from deep clone testing.....');
  runProcess(usingJsonMethods, usingStructuredClone);
}

function usingJsonMethods() {
  const deepCopy = JSON.parse(JSON.stringify(original));
}

function usingStructuredClone() {
  const deepCopy = structuredClone(original);
}

module.exports = {
  deepCloneTesting,
};