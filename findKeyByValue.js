//
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


// Test case from LHL Compass Module 1 Week 2
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

module.exports = findKeyByValue;

// findKeyByValue(bestTVShowsByGenre, "The Expanse");
//
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
