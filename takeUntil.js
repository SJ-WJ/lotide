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

//Implementation Function
const takeUntil = function(array, callback) {
  
  let sliceArray = [];
  for (const value of array) { //scanning until callback conditions is present
    if (callback(value)) {
      break; //once callback returns truthy value then stop looping

    }sliceArray.push(value);

  } return sliceArray;
};


//Test Code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);