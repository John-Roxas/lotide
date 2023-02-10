const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 7], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 8], [1, 2, 3, 8]), true); // => should PASS