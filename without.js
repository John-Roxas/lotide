const without = function(source, itemstoRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let test = false;
    for (let j = 0; j < itemstoRemove.length; j++) {
      // Checks whether the element at position i of array source matches any of the elements in array itemstoRemove. If so, it will not be pushed to the result array.
      if (source[i] === itemstoRemove[j]) {
        test = true;
      }
    }
    // Only non-matching elements (i.e. elements that do not exist in the itemsToRemove array) will be sent to the result array.
    if (test === false) {
      result.push(source[i]);
    }
  }
  return result;
};
module.exports = without;
