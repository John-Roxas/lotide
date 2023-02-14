const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('should return the correct letter positions in an array of a specified character in a given string', () => {
    let testString = 'hello';
    let testLetter = 'l';
    let expected = [2, 3];
    assert.deepEqual(letterPositions(testString, testLetter), expected);
  });
  it('should return undefined if an empty string is passed into the function and we are looking for a specific character', () => {
    let testString = '';
    let testLetter = 'l';
    let expected = undefined;
    assert.deepEqual(letterPositions(testString, testLetter), expected);
  });
  it('should return undefined if a string is passed into the function and we are looking for a specific character that does not exist in the string', () => {
    let testString = 'hello';
    let testLetter = 's';
    let expected = undefined;
    assert.deepEqual(letterPositions(testString, testLetter), expected);
  });

});