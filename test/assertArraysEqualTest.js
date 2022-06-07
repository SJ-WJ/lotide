const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

//Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["Hello"], ["Hello"]);
assertArraysEqual(["Goodbye"], ["goodbyE"]);