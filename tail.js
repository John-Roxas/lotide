

const tail = function(arr) {
  let result = [];
  // COnditional statement that checks two cases: empty array or length 1 array passed to it. It will return an empty array and end the function.
  if (arr.length <= 1) {
    return result;
  }
  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;

};

module.exports = tail;


