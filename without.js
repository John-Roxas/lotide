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

const without = function(source, itemstoRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let test = false;
    for (let j = 0; j < itemstoRemove.length; j++) {
      if (source[i] === itemstoRemove[j]) {
        test = true;
        console.log("removing item at position " + j + " " + source[i]);
      }
    }
    if (test === false) {
      result.push(source[i]);
    }
  }
  console.log("Filtered array is " + result);
  return result;
};

const words = ["hello", "world", "lighthouse"];
let filteredWords = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(filteredWords, ["hello", "world", "lighthouse"]);

const numbers = [1,2,3];
let filteredNumbers = without(numbers, [3]);
assertArraysEqual(filteredNumbers, [1,2]);

/*
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,2,4]);*/