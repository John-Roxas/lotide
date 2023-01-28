const assertEqual = function(actual, expected) {
  console.assert(actual === expected, actual, "!==", expected);
  if (actual === expected) {
    console.log("Assertion Passed: ", actual, "===", expected);
  }
};

const head = function(arr) {
  // Checking if the array that is passed to the function is empty. If so, it will return a value of undefined and terminate immediately.
  if (arr.length <= 0) {
    return undefined;
  }
  
  // Assuming the above condition passes, the function simply returns the value at the first index of the array.
  return arr[0];
};

// Test cases for the above functions
/*assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");
assertEqual(head([5]), 5);*/
