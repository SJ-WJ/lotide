//Function Implementation
const assertEqual = require('./assertEqual');

const head = function(array) {
  return array[0];
};


//Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);

assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
