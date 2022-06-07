const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    
    if (sentence[i] in results) {
      results[sentence[i]].push(i);
      console.log(sentence[i] in results);

    } else {
      results[sentence[i]] = [i];

    }
  }
  console.log(results);
  return results;
};

module.exports = letterPositions;