const eqObjects = require('./eqObjects');

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
  size: 'large'
};

// Cheating with JSON.stringify
// console.log(JSON.stringify(testObj1) === JSON.stringify(testObj2));
assertObjectsEqual(testObj1, testObj2);