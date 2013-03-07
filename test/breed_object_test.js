'use strict';

var breed = require('../lib/breed.js');

exports['object'] = {
  'is': function(test) {
    test.expect(10);
    test.equal(breed.isObject({}), true, 'object is object');
    test.equal(breed.isObject(null), false, 'null is not object');
    test.equal(breed.isObject(), false, 'undefined is not object');
    test.equal(breed.isObject([]), false, 'array is not object');
    test.equal(breed.isObject(1), false, 'number is not object');
    test.equal(breed.isObject(function () {}), false, 'function is not object');
    test.equal(breed.isObject(''), false, 'string is not object');
    test.equal(breed.isObject(new Date()), false, 'date is not object');
    test.equal(breed.isObject(/1/), false, 'regexp is not object');
    test.equal(breed.isObject(new Error()), false, 'error is not object');
    test.done();
  },
  'isnt': function(test) {
    test.expect(10);
    test.equal(breed.isntObject({}), false, 'object is object');
    test.equal(breed.isntObject(null), true, 'null is not undefined');
    test.equal(breed.isntObject(), true, 'undefined is not object');
    test.equal(breed.isntObject([]), true, 'array is not object');
    test.equal(breed.isntObject(1), true, 'number is not object');
    test.equal(breed.isntObject(function () {}), true, 'function is not object');
    test.equal(breed.isntObject(''), true, 'string is not object');
    test.equal(breed.isntObject(new Date()), true, 'date is not object');
    test.equal(breed.isntObject(/1/), true, 'regexp is not object');
    test.equal(breed.isntObject(new Error()), true, 'error is not object');
    test.done();
  },
  'constant': function (test) {
    test.expect(1);
    test.equal(breed.OBJECT, 'object', 'constant OBJECT means object');
    test.done();
  }
};