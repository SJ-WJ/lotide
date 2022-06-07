// Function Implementation
const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {

  for (let i = 0; i < array.length; i++) {
    const middleNums = Math.floor(array.length / 2);
     
    if (array.length <= 2) {
      return [];
    }
    if (array.length % 2 === 0) {
      return [array[middleNums - 1], array[middleNums]];
    }
    if (array.length % 2 === 1) {
      return [array[middleNums]];
    }
  }
};

module.exports = middle;
