// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const without = require('./without');
const countLetter = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');


module.exports = {head, tail, middle, assertArraysEqual, assertEqual, eqArrays, without,
countLetter, countOnly, eqObjects, letterPositions, map, takeUntil, findKey};