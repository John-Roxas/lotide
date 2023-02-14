const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it("should return the correct number of a repeated name in an array", () => {
    let testArray = ['one', 'one', 'two'];
    let testArg = {'one' : true};
    let testResult = countOnly(testArray, testArg);
    let expected = 2;
    assert.strictEqual(testResult['one'], expected);
  });

  it("should return undefined if pass in a testArg does not exist in the testArray", () => {
    let testArray = ['one', 'one', 'two'];
    let testArg = {'three' : true};
    let testResult = countOnly(testArray, testArg);
    let expected = undefined;
    assert.strictEqual(testResult['three'], expected);
  });
});
