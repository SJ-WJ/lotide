// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};
console.log(tail([9,6,7]));

//Test Code

const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 2); // original array should still have 3 elements!