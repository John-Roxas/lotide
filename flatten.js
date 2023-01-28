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

const flatten = function(toBeFlattened) {
  let result = [];
  for (let i = 0; i < toBeFlattened.length; i++) {
    if (Array.isArray(toBeFlattened[i])) {
      for (let j = 0; j < toBeFlattened[i].length; j++) {
        result.push(toBeFlattened[i][j]);
      }
    } else {
      result.push(toBeFlattened[i]);
    }
  }
  return result;
};

/*
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]; */
