const map = function(array, callback) {
  //empty for now :)

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};
/*
const results1 = map(words, word => word[0]);
console.log(results1);
*/


module.exports = map;