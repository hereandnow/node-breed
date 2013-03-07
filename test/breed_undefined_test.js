'use strict';

var breed = require('../lib/breed.js');

exports['undefined'] = {
  'is': function(test) {
    test.expect(10);
    test.equal(breed.isUndefined(), true, 'undefined is undefined');
    test.equal(breed.isUndefined(null), false, 'null is not undefined');
    test.equal(breed.isUndefined({}), false, 'object is not undefined');
    test.equal(breed.isUndefined([]), false, 'array is not undefined');
    test.equal(breed.isUndefined(1), false, 'number is not undefined');
    test.equal(breed.isUndefined(function () {}), false, 'function is not undefined');
    test.equal(breed.isUndefined(''), false, 'string is not undefined');
    test.equal(breed.isUndefined(new Date()), false, 'date is not undefined');
    test.equal(breed.isUndefined(/1/), false, 'regexp is not undefined');
    test.equal(breed.isUndefined(new Error()), false, 'error is not undefined');
    test.done();
  },
  'isnt': function(test) {
    test.expect(10);
    test.equal(breed.isntUndefined(), false, 'undefined is undefined');
    test.equal(breed.isntUndefined(null), true, 'null is not undefined');
    test.equal(breed.isntUndefined({}), true, 'object is not undefined');
    test.equal(breed.isntUndefined([]), true, 'array is not undefined');
    test.equal(breed.isntUndefined(1), true, 'number is not undefined');
    test.equal(breed.isntUndefined(function () {}), true, 'function is not undefined');
    test.equal(breed.isntUndefined(''), true, 'string is not undefined');
    test.equal(breed.isntUndefined(new Date()), true, 'date is not undefined');
    test.equal(breed.isntUndefined(/1/), true, 'regexp is not undefined');
    test.equal(breed.isntUndefined(new Error()), true, 'error is not undefined');
    test.done();
  },
  'constant': function (test) {
    test.expect(1);
    test.equal(breed.UNDEFINED, 'undefined', 'constant UNDEFINED means undefined');
    test.done();
  }
};