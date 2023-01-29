// assertEqual function from another exercise
const assertEqual = function(actual, expected) {
  console.assert(actual === expected, actual, "!==", expected);
  if (actual === expected) {
    console.log(`Assertation Passed: ${actual} === ${expected}`);
  }
};

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


const eqObjects = function(object1, object2) {
  // Before we begin, need to check that the number of keys in each object matches!
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let result = false;
  for (let key in object1) {
    // Checks arrays only.
    if (Array.isArray(object1[key])) {
      eqArrays(object1[key], object2[key]);
    }

    // Checks primitive values only, cannot handle objects within objects.
    if (object1[key] === object2[key]) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    // console.log(`Test Label : ${inspect(actual)}`);
    console.log(`✅✅✅ Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

let testObj1 = {
  size: 'small',
  color: 'red'
};

let testObj2 = {
  color: 'red',
  size: 'small'
};

// Cheating with JSON.stringify
// console.log(JSON.stringify(testObj1) === JSON.stringify(testObj2));
assertObjectsEqual(testObj1, testObj2);