// const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] when ['Hello', 'Lighthouse', 'Labs'] is passed into the function", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("should return an empty array [] when an empty array [] is passed into the function", () => {
    assert.deepEqual(tail([]), []);
  });

  it("should return an empty array [] when an array with one element [1] is passed into the function", () => {
    assert.deepEqual(tail([1]), []);
  });
});

// Test code from the original tail.js file!
// const words = ["Hello", "Lighthouse", "Labs"];
