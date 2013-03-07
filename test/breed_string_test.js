'use strict';

var breed = require('../lib/breed.js');

exports['string'] = {
  'is': function(test) {
    test.expect(10);
    test.equal(breed.isString(''), true, 'string is string');
    test.equal(breed.isString(), false, 'undefined is not string');
    test.equal(breed.isString({}), false, 'object is not string');
    test.equal(breed.isString([]), false, 'array is not string');
    test.equal(breed.isString(1), false, 'number is not string');
    test.equal(breed.isString(new Error()), false, 'error is not string');
    test.equal(breed.isString(function () {}), false, 'function is not string');
    test.equal(breed.isString(), false, 'null is not string');
    test.equal(breed.isString(/1/), false, 'regexp is not string');
    test.equal(breed.isString(new Date()), false, 'date is not string');
    test.done();
  },
  'isnt': function(test) {
    test.expect(10);
    test.equal(breed.isntString(''), false, 'string is string');
    test.equal(breed.isntString(), true, 'undefined is not string');
    test.equal(breed.isntString({}), true, 'object is not string');
    test.equal(breed.isntString([]), true, 'array is not string');
    test.equal(breed.isntString(1), true, 'number is not string');
    test.equal(breed.isntString(new Error()), true, 'error is not string');
    test.equal(breed.isntString(function () {}), true, 'function is not string');
    test.equal(breed.isntString(null), true, 'null is not string');
    test.equal(breed.isntString(/1/), true, 'regexp is not string');
    test.equal(breed.isntString(new Date()), true, 'date is not string');
    test.done();
  },
  'constant': function(test) {
    test.expect(1);
    test.equal(breed.STRING, 'string', 'constant STRING means string');
    test.done();
  }
};