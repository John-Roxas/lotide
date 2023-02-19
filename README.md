# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jroxas/lotide`

**Require it:**

`const _ = require('@jroxas/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Takes a string of any length and returns the number of non-space characters in it.
* `countOnly(array, target)`: Takes an array and will return the number of times that target appears in the array.
* `eqArrays(array1, array2)`: Compares array1 to array2 and returns either true or false.
* `eqObjects(object1, object2)`: Compares object1 to object2 and returns either true or false.
* `findKey(inputObject, callbackFn)`: Takes an object and returns the key that has a value which satisfies the callback function. 
* `findKeyByValue(object1, object2)`: Compares object1 to object2 and returns either true or false.
* `flatten(array)`: Takes an array of any length and any level of nesting and returns a single depth array.
* `head(array)`: Takes an array of any length and returns the first element in the array.
* `letterPositions(string, character)`: Takes a string and character as arguments and returns the positions where that character exists in the input string.
* `map(array, callbackFn)`: Takes an array and calls the callbackFn on each element of the array.
* `middle(array)`: Takes an array and returns the element(s) in the middle.
* `tail(array)`: Takes an array and returns an array containing every element after the first element.
* `takeUntil(array)`: Takes an array and callback (as a comparator) as parameters and returns all elements in the array that satisfy the callback.
* `without(array1, array2)`: Takes array1 and removes all elements in array1 that appear in array2. The final filtered array is returned.

