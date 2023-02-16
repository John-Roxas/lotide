const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        // If the key exists, this adds one to the counter!
        results[item] += 1;
      } else {
        // This else statement initializes a key if it does not already exist!
        results[item] = 1;
      }
    }
  }
  console.log(results);
  return results;
};
module.exports = countOnly;