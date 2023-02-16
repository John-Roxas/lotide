const findKeyByValue = function(inputObject, filter) {
  let result = "";
  for (let key in inputObject) {
    if (inputObject[key] === filter) {
      result = key;
      // console.log(key);
    }
  }
  
  // A final condition to check if the filter is not found in the inputObject key values
  if (result === "") {
    return undefined;
  }

  console.log(result);
  return result;
};

module.exports = findKeyByValue;