const assertEqual = function(actual, expected) {
    console.assert(actual === expected, actual, "!==", expected);
    if (actual === expected) {
      console.log(`Assertation Passed: ${actual} === ${expected}`);
    }
    else {
        console.log(`Assertation Failed`)
    }
  };


const findKey = function(inputObject, callbackFn) {
    let result = "";
    for (const key in inputObject) {

        if (callbackFn(inputObject[key])) {
           result = key;
           return result; 
        }
        // Testing whether this method to loop through nested objects works. console.log (`${key} => ${inputObject[key].stars}`);
    }
}

assertEqual( findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma")// => "noma"

