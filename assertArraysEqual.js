// const eqArrays = function(arr1, arr2) {
//   let test = false;
//   // an initial condition to test whether the lengths of the arrays are similar. If they are have different lengths, they are assumed to be different and the function returns false.
//   if (arr1.length !== arr2.length) {
//     return test;
//   }
//
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1 [i] === arr2[i]) {
//       test = true;
//     } else {
//       test = false;
//     }
//   }
//   return test;
// };
const eqArrays = require('./eqArrays');
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertation Passed: These two arrays are equal: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${(arr1)} !== ${(arr2)}`);
  }
};

module.exports = assertArraysEqual;
