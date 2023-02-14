// assertEqual function is from a previous assignment!
const assertEqual = function(actual, expected) {
  console.assert(actual === expected, actual, "!==", expected);
  if (actual === expected) {
    console.log(`Assertation Passed: ${actual} === ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
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

// Test cases, copied from compass module 1 week 2 - Implement countOnly in Lotide
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// console.log("(... assertation output follows ...)");
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);