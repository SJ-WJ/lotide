//Assertion Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};


//step0. Goal is to take in an object and a value, scan them and return the first key which contains the given value
//step1. Scan the objects

const findKeyByValue = function(object,value) {
  for (const key in object) { //Grabbing key

    if (object[key] === value) { // Seeing if the object key matches the value
      return key;
    }
  }
};

//Test code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  kdrama: "Penthouse"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Penthouse"), "kdrama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy");
