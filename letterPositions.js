//Assertion Function
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

//step0. Goal is to find the position of each letter wherever the letter is present in the sentence
//step1. Scan the string
//step2. Find the position of each letter
//step2.1 Account for the possibility of multiple occurences
//step3. Report the final result with the assertions

const letterPositions = function(sentence) {
  const results = {};
  //console.log(results);
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) { //scanning through
    
    if (sentence[i] in results) { //If the letter is has multiple occurences then push it
      results[sentence[i]].push(i);
      console.log(sentence[i] in results);

    } else { //If the letter occurs for the first time or just once
      results[sentence[i]] = [i];

    }
    // console.log(sentence[i]); //keys in the object
    // console.log([i]); //with their index
    
  }
  console.log(results);
  return results;
};


//Test Code
//Use assertArrayEqual to compare the letters and their expected return (goal)
assertArraysEqual(letterPositions("hello").e, [1]); //Asserting if the position of e in "hello" is in index of 1
assertArraysEqual(letterPositions("goodbye").o, [3]);
