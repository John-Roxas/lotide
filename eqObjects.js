const eqObjects = function(object1, object2, result) {
  // let result;
  

  for (let key in object1) {
    // This if function tests every key/ value pair in object 1 whether it is an object or not. If so, it callts the original function.
    if (typeof object1[key] === 'object' && object1[key].constructor === Object) {
      result = eqObjects(object1[key],object2[key]);
      result;
    } else if (String(object1[key]) === String(object2[key])) {
      result = true;
    } else {
      result = false;
    }
  }
  // console.log(result);
  return result;
};

let obj1 = {a: 1, b: {c: 1 }};
let obj2 = {a: 1, b: {c: 1 }};
console.log(eqObjects(obj1,obj2));
module.exports = eqObjects;