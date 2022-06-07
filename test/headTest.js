const assertEqual = require('../assertEqual');
const head = require('../head');

//Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual(head([5,6,7]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");