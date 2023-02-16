// Refactored to get the function below with a mentor.

const flatten = function(array) {
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
// console.log(flatten([1,2,[3,[[[[[['']]]]]]]]));

module.exports = flatten;

// This is the old function
// const flatten = function(toBeFlattened, iteratorArray, result = []) {
//   // Initializing the output array
//   if (toBeFlattened.length === 0) {
//     return null;
//   }
//
//   // this if statement only applies in the recursive case. This avoids us losing the flattened array when we call the function
//   if (iteratorArray) {
//     result = iteratorArray;
//   }
//
//   for (let i = 0; i < toBeFlattened.length; i++) {
//     if (Array.isArray(toBeFlattened[i])) {
//       iteratorArray = result;
//       flatten(toBeFlattened[i], iteratorArray);
//     } else {
//       // Pushes the element in the initial array to the result array
//       result.push(toBeFlattened[i]);
//     }
//   }
//   return result;
// };





