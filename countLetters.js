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