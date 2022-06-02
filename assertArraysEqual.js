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


//Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["Hello"], ["Hello"]);
assertArraysEqual(["Goodbye"], ["goodbyE"]);