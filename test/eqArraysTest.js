const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test Code
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS