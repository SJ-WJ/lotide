const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  
  let sliceArray = [];
  for (const value of array) {
    if (callback(value)) {
      break;

    }sliceArray.push(value);

  } return sliceArray;
};

module.exports = takeUntil;