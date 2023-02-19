const findKeyByValue = function(inputObject, filter) {
  let result = "";
  // Checks all values in each key-value pair in inputObject. If the value matches filter, the key is returned as a result.
  for (let key in inputObject) {
    if (inputObject[key] === filter) {
      result = key;
    }
  }
  
  // A final condition to check if the filter is not found in the inputObject key values
  if (result === "") {
    return undefined;
  }
  return result;
};

module.exports = findKeyByValue;