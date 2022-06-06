//Assertion Functions
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) { // I changed === to !== and it started working, then switch the return statements to make sense
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual,expected) {
  let arrayCompare = eqArrays(actual, expected);
  if (arrayCompare === true) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

//Examples
const words = ["boston", "celtics", "are", "champions"];
const tvShows = ["Prison Break", "Criminal Minds", "Smart Guy", "Lost"];

//Implementation Function
const map = function(array, callback) {
  // console.log('array', array);
  // console.log('callback', callback);
  const results = [];

  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));

  }
  return results;
};


//Test Code
const result1 = map(words, word => word[0]);
console.log(result1);

const result2 = map(tvShows, show => show);
console.log(result2);