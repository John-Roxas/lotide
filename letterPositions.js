const letterPositions = function(inputString, arg) {
  const results = {};
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== " ") {
      if (!results[inputString[i]]) {
        results[inputString[i]] = [i];
      } else {
        results[inputString[i]].push(i);
      }
    }
  }
  return results[arg];
};
module.exports = letterPositions;
