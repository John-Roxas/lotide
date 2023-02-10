const middle = function(inputArray) {
  // Initial check to determine whether the length of the array is even or odd.
  let result = [];
  if (inputArray.length % 2 === 0) {
    let middlePositionStart =  inputArray.length / 2;
    result.push(inputArray[middlePositionStart - 1]);
    result.push(inputArray[middlePositionStart]);
  } else {
    let middlePositionStart = Math.round((inputArray.length / 2) - 1);
    result.push(inputArray[middlePositionStart]);
  }
  return result;
};
module.exports = middle;

