# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @SJ-WJ/lotide`

**Require it:**

`const _ = require('@SJ-WJ/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Asserts array functions determining if they match or not
* `assertEqual`: Asserts values determining if they match or not
* `assertObjectsEqual`: Asserts objects determining if they match or not
* `countLetters`: Counts each letter and each instance the letter is present
* `countOnly`: Counts a specifed amount
* `eqArrays`: Compares arrays
* `eqObjects`: Compares objects
* `findKey`: Returns value of key once the callback returns a truthy value
* `findKeyByValue`: Returns the key if the values match
* `head`: Returns the first element of an array
* `index`: List of all functions used in lotide
* `letterPositions`: Returns the indices of each letter 
* `map`: Creates a new array
* `middle`: Returns the middle elements of an array
* `tail`: Returns all elements of the array except the first one
* `takeUntil`: Returns array from first index up until stated point
* `without`: Removes elements from arrays