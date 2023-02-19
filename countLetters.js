const countLetters = function(toBeCounted) {
  // Initializes the count object which will be our return value for the function.
  let count = {};
  
  for (const letter of toBeCounted) {
    // First if statement checks for space characters (This function does not count spaces)
    if (letter !== " ") {
      if (count[letter]) {
        // If the letter already exists in the count object, add 1 to the key-value pair.
        count[letter] += 1;
        // if the function encounters a letter that does not exist in the count object, it will initialize it as a key with the value of 1
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};

module.exports = countLetters;