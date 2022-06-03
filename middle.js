//Assertion Functions
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
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

//step0. presents the elements in the middle portion of any array (goal)
//step1. Determine the middle of an array, create an empty value
//step1.1 loop the array, this part determines how long an array is
//Note: middle of an array would leave out the first element and last element
//step2. if middle exists, update the empty value
//final return the array of values


const middle = function(array) {

  for (let i = 0; i < array.length; i++) {
    const middleNums = Math.floor(array.length / 2);
     
    if (array.length <= 2) { //For arrays of 1 or 2 elements return empty
      return [];
    }
    if (array.length % 2 === 0) { //For even numbers we want the two middle numbers. Example [1, 2, 3, 4]); // => [2, 3]
      return [array[middleNums - 1], array[middleNums]];
    }
    if (array.length % 2 === 1) { //For odd numbers we want the middle number. Example ([1, 2, 3, 4, 5]) // => [3]
      return [array[middleNums]];
    }
  }
};

//Test Code
console.log(middle([1]));// => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));// => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
