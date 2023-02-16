
const findKey = function(inputObject, callbackFn) {
  let result = "";
  let keys = Object.keys(inputObject);

  for (let key of keys) {
    if (callbackFn(inputObject[key])) {
      result = key;
      return result;
    }
  }
};

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");// => "noma"

const callback2 = function(x) {
  if (x['stars'] === 2) {
    return true;
  }
};

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, callback2);

console.log(result);