//Assertion Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};



//step0. Input a string array (a sentence) then output the letters present and the amount of times they exist within the sentence (goal)
//step1. We want to take into account each letter in the sentence so scan the array
//step2.

const countLetter = function(string) {
  const lettersAmount = {};

  for (const letters of string) {
    if (letters === " ") {
      continue;
    }
    
    if (lettersAmount[letters]) {
      lettersAmount[letters] += 1;

    } else {
      lettersAmount[letters] = 1;
 
    }
  } return lettersAmount;
};



//Test Code
const test1 = countLetter("When is this assignment due");
console.log(test1);
const test2 = countLetter("It is due Monday");
console.log(test2);