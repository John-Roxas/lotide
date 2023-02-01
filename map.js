const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  //empty for now :)

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};
/*
const results1 = map(words, word => word[0]);
console.log(results1);
*/

const eqArrays = function(arr1, arr2) {
  let test = false;
  // an initial condition to test whether the lengths of the arrays are similar. If they are have different lengths, they are assumed to be different and the function returns false.
  if (arr1.length !== arr2.length) {
    return test;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1 [i] === arr2[i]) {
      test = true;
    } else {
      test = false;
    }
  }
  return test;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("These two arrays are equal");
  } else {
    console.log("These two arrays are not equal");
  }
};

const array1 = ['three','two','one'];

assertArraysEqual(map(array1, item => item[0]),["t","t","o"]);
