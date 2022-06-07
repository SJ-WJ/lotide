const assertEqual = require('./assertEqual');

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

module.exports = countLetter;

//Test Code
// const test1 = countLetter("When is this assignment due");
// console.log(test1);
// const test2 = countLetter("It is due Monday");
// console.log(test2);