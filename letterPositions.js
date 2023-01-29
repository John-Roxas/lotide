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

const letterPositions = function(inputString) {
  const results = {};
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== " ") {
      if (!results[inputString[i]]) {
        results[inputString[i]] = [i];
      } else {
        results[inputString[i]].push(i);
      }
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").l, [2, 3]);