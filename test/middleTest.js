// Dont need this assertArraysEqual function anymore!
// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it("should return [2,3] (i.e. the middle two elements) when [1,2,3,4] (an array with an even number of elements) is passed into the function", () => {
    let test = [1,2,3,4];
    assert.deepEqual(middle(test),[2,3]);
  });

  it("should return [2] (i.e. the single middle element) when [1,2,3] (an array with an odd number of elements) is passed into the function", () => {
    let test = [1,2,3];
    assert.deepEqual(middle(test),[2]);
  });

});


