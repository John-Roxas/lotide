
const findKey = function(inputObject, callbackFn) {
  let result = "";
  // initialize the keys variable to be an array of all keys in inputObject.
  let keys = Object.keys(inputObject);

  for (let key of keys) {
    // This if statement returns the value of the key that satisfies the callback function passed into it.
    if (callbackFn(inputObject[key])) {
      result = key;
      return result;
    }
  }
};

module.exports = findKey;