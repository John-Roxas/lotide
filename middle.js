const eqArrays = function(arr1, arr2) {
  let test = false;
  // an initial condition to test whether the lengths of the arrays are similar. If they have different lengths, they are assumed to be different and the function returns false.
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("These two arrays are equal");
  } else {
    console.log("These two arrays are not equal");
  }
};

const middle = function(inputArray) {
  // Initial check to determine whether the length of the array is even or odd.
  let result = [];
  if (inputArray.length % 2 === 0) {
    let middlePositionStart =  inputArray.length / 2;
    result.push(inputArray[middlePositionStart - 1]);
    result.push(inputArray[middlePositionStart]);
  } else {
    let middlePositionStart = Math.round((inputArray.length / 2) - 1);
    result.push(inputArray[middlePositionStart]);
  }
  return result;
};

assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10,11,12]),[6,7]);
