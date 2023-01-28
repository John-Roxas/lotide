const assertEqual = function(actual, expected) {
  console.assert(actual === expected, actual, "!==", expected);
  if (actual === expected) {
    console.log("Assertion Passed: ", actual, "===", expected);
  }
};

const tail = function(arr) {
  let result = [];
  // COnditional statement that checks two cases: empty array or length 1 array passed to it. It will return an empty array and end the function.
  if (arr.length <= 1) {
    return result;
  }
  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;

};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
