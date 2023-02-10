const assertEqual = require('../assertEqual');
const head = require('../head');


// Copied into headTest.js
// Test cases for the above functions
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");
assertEqual(head([5]), 5);