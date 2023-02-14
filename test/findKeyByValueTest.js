const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('should return the correct key in a given object if an existing value is being passed into the function', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const expected = 'comedy';
    const result = findKeyByValue(bestTVShowsByGenre,'Brooklyn Nine-Nine');
    assert.strictEqual(result,expected);
  });

  it('should return undefined if a value being passed into the function does not exist in the object passed into it', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const expected = undefined;
    const result = findKeyByValue(bestTVShowsByGenre,'Game of Thrones');
    assert.strictEqual(result,expected);
  });
});