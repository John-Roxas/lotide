const assertEqual = function(actual, expected) {
  console.assert(actual === expected, actual, "!==", expected);
  if (actual === expected) {
    console.log(`Assertation Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  let test = false;
  // an initial condition to test whether the lengths of the arrays are similar. If they are have different lengths, they are assumed to be different and the function returns false.
  if (arr1.length != arr2.length) {
    return test;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1 [i] === arr2[i]) {
      test = true;
    }
    else {
      test = false;
    }
  }
  return test;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 7], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 8], [1, 2, 3, 8]), true); // => should PASS
