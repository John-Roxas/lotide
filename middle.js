const middle = function(inputArray) {
  // Initial check to determine whether the length of the array is even or odd.
  let result = [];
  // In the case of arrays with an even number of elements, this function returns two elements perceived to be in the middle.
  if (inputArray.length % 2 === 0) {
    let middlePositionStart =  inputArray.length / 2;
    result.push(inputArray[middlePositionStart - 1]);
    result.push(inputArray[middlePositionStart]);
    // In the case of arrays with an odd number of elements, this function returns one single element in the middle.
  } else {
    let middlePositionStart = Math.round((inputArray.length / 2) - 1);
    result.push(inputArray[middlePositionStart]);
  }
  return result;
};
module.exports = middle;

