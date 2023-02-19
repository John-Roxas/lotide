const letterPositions = function(inputString, arg) {
  // Initializes the return value results as an object.
  const results = {};
  for (let i = 0; i < inputString.length; i++) {
    // First if statement checks whether the character at position i is not a space.
    if (inputString[i] !== " ") {
      // If the letter being checked does not exist in the results object, initialize the letter as a new key with value i
      if (!results[inputString[i]]) {
        results[inputString[i]] = [i];
      } else {
        // If the letter being checked does exist in the result object. push position i to the key-value pair.
        results[inputString[i]].push(i);
      }
    }
  }
  // Because we are only concerned with the position of characters that match arg, we only return the the key-value pair with a key matching arg.
  return results[arg];
};
module.exports = letterPositions;
