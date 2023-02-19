// Takes an array and calls the callback function on each value in the array.
const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;