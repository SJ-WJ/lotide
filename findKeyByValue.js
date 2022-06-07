const assertEqual = require('./assertEqual');

const findKeyByValue = function(object,value) {
  for (const key in object) {

    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

//Test code
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire",
//   kdrama: "Penthouse"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Penthouse"), "kdrama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy");
