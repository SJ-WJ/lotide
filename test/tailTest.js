const assertEqual = require('../assertEqual');
const tail = require('../tail');

//Test Code
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 2); // original array should still have 3 elements!