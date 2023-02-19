const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  // calls the eqObjects function from another file and runs it. Will write the result of assertation by first determining the output from eqObjects.
  if (eqObjects(actual, expected)) {
    // console.log(`Test Label : ${inspect(actual)}`);
    console.log(`✅✅✅ Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};


module.exports = assertObjectsEqual;