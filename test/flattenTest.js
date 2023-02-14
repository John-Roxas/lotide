const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it("returns a flattened array than can handle nested arrays at least one level deep", () => {
    let expected = [1, 2, 3, 4, 5, 6];
    let test = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(test),expected);
  });
  it("returns a flattened array than can handle arrays that are nested more than one level deep", () => {
    let expected = [1, 2, 3, 4, 5, 6];
    let test = [1, 2, [3, [4]], 5, [6]];
    assert.deepEqual(flatten(test),expected);
  });
  it("returns null if an empty array is passed into it", () => {
    let expected = null;
    let test = [];
    assert.deepEqual(flatten(test),expected);
  });
});
