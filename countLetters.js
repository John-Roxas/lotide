const countLetters = function(toBeCounted) {
  let count = {};
  for (const letter of toBeCounted) {
    if (letter !== " ") {
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};

module.exports = countLetters;