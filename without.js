const without = function(source, itemstoRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let test = false;
    for (let j = 0; j < itemstoRemove.length; j++) {
      if (source[i] === itemstoRemove[j]) {
        test = true;
      }
    }
    if (test === false) {
      result.push(source[i]);
    }
  }
  return result;
};

module.export = without;
