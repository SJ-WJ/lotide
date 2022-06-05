// Assertion Functions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) { //Included this new if, if lengths are not the same no reason to compare, then return false
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) { // I changed === to !== and it started working, then switch the return statements to make sense
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); //Grabbing the keys
  // console.log(key1);
  const keys2 = Object.keys(object2);
  // console.log(key2);

  if (keys1.length !== keys2.length) { //If the amount of keys are not the same return false
    // console.log(ab, ba, abc);
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

//Test Code (Primitives)
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false

//Test Code (Arrays)
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false