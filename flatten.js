// Refactored to get the function below with a mentor.

const flatten = function(array) {
  if (array.length === 0) {
    return null;
  }

  let result = [];

  array.forEach(element => {
    if (Array.isArray(element)) {
      // need to use concat instead of push because we want the result from our recursive function to add to the previous.
      result = result.concat(flatten(element));
      // result.push(flattenImproved(element));
    } else {
      result.push(element);
    }
  });

  return result;
};


module.exports = flatten;