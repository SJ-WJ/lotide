const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


//Test Code
// const words = ["boston", "celtics", "are", "champions"];
// const tvShows = ["Prison Break", "Criminal Minds", "Smart Guy", "Lost"];

// const result1 = map(words, word => word[0]);
// console.log(result1);

// const result2 = map(tvShows, show => show);
// console.log(result2);