const flatten = function(toBeFlattened, iteratorArray) {
  // Initializing the output array
  if (toBeFlattened.length === 0) {
    return null;
  }
  let result = [];

  // A little hamfisted, but this if statement only applies in the recursive case
  if (iteratorArray) {
    result = iteratorArray;
  }

  // Original M1W1 Implementation (Handles arrays that are at most two levels deep)
  for (let i = 0; i < toBeFlattened.length; i++) {
    if (Array.isArray(toBeFlattened[i])) {
      iteratorArray = result;
      flatten(toBeFlattened[i], iteratorArray);
    } else {
      // Pushes the element in the initial array to the result array
      result.push(toBeFlattened[i]);
    }
  }
  return result;
};

console.log(flatten([1,2,[3,[[[[[[4]]]]]]]]));

module.exports = flatten;


