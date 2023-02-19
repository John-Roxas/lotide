const eqObjects = function(object1, object2, result) {
  // This only does something in the recursive case
  if (result === false) {
    return false;
  }
  for (let key in object1) {
    // This if function tests every key/ value pair in object 1 whether it is an object or not. If so, it calls the original function.
    // Need to differentiaite between things that appeared to be objects but weren't actually objects
    if (typeof object1[key] === 'object' && object1[key].constructor === Object) {
      result = eqObjects(object1[key],object2[key]);
    } else if (String(object1[key]) === String(object2[key])) {
      console.log(object1[key], object2[key]);
      result = true;
    } else {
      result = false;
      // The function should immediately return false and break out of the function
      return result;
    }
  }
  // console.log(result);
  return result;
};
module.exports = eqObjects;