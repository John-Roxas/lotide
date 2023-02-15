const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true when two identical objects with nested objects are passed into it', () => {
    let obj1 = {a: 1, b: {c: 1 }};
    let obj2 = {a: 1, b: {c: 1 }};
    assert.strictEqual(eqObjects(obj1,obj2),true);
  });
  it('should return true when two identical objects without nested objects are passed into it', () => {
    let obj1 = {a: 1, b: 1};
    let obj2 = {a: 1, b: 1};
    assert.strictEqual(eqObjects(obj1,obj2),true);
  });
  it('should return false when two different objects without nested objects are passed into it', () => {
    let obj1 = {a: 1, b: 1};
    let obj2 = {a: 1, b: 2};
    assert.strictEqual(eqObjects(obj1,obj2),false);
  });
  it('should return false when two different objects with nested objects are passed into it', () => {
    let obj1 = {a: 1, b: {c: 1 }};
    let obj2 = {a: 1, b: {c: 2 }};
    assert.strictEqual(eqObjects(obj1,obj2),false);
  });


});