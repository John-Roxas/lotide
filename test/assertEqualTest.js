// assertEqual.js

const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual("One", "One");

// const assertEqual = function(actual, expected) {
//   console.assert(actual === expected, actual, "!==", expected);
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertation Failed: ${(actual)} !== ${(expected)}`);
//   }
// };
//
// module.exports = assertEqual;