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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Before we begin, need to check that the number of keys in each object matches!
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let result = false;
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      eqArrays(object1[key], object2[key]);
    }

    if (object1[key] === object2[key]) {
      //console.log(object1[key] + "is equal to " + object2[key]);
      result = true;
    } else {
      result = false;
    }
  }
  return result;


};
/*
const shirtObject = { color: "orange", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false
*/

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);