const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  
  const inspect = require('util').inspect;
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

module.exports = assertObjectsEqual;

//Test Code
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(eqObjects(ab, ba),true);