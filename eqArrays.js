const eqArrays = function(arr1, arr2, test) {
  
  // an initial condition to test whether the lengths of the arrays are similar. If they are have different lengths, they are assumed to be different and the function returns false.
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // the initial if statement will check if an element in the array is an element. If so, it will call itself to run the function once more!
    if (Array.isArray(arr1[i])) {
      test = eqArrays(arr1[i],arr2[i]);
    } else if (arr1 [i] === arr2[i]) {
      test = true;
    } else {
      test = false;
    }
    if (test === false) {
      // If we encounter at least one false test, we can conclude that the arrays passed into it are not equal and we can exit the function prematurely. i.e. there is no longer a
      // need to test the remaining elements in the array.
      return false;
    }
  }
  return test;
};

module.exports = eqArrays;


