// Assertion Functions
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); //Grabbing the keys
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) { //If the amount of keys are not the same return false
    return false;

  }
  for (const key of keys1) { //Loop through the key
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //Looking for arrays
      if (!eqArrays(object1[key], object2[key])) { //if not equal array return false
        return false;
      }
    } else if (object1[key] !== object2[key]) { //(good practice) If the values not equal
      return false;
    }
      
  } return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

//Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba),true);