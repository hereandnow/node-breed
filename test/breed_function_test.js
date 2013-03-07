'use strict';

var breed = require('../lib/breed.js');

exports['function'] = {
  'is': function(test) {
    test.expect(10);
    test.equal(breed.isFunction(function () {}), true, 'function is function');
    test.equal(breed.isFunction(), false, 'undefined is not function');
    test.equal(breed.isFunction({}), false, 'object is not function');
    test.equal(breed.isFunction([]), false, 'array is not function');
    test.equal(breed.isFunction(1), false, 'number is not function');
    test.equal(breed.isFunction(new Error()), false, 'error is not function');
    test.equal(breed.isFunction(''), false, 'string is not function');
    test.equal(breed.isFunction(), false, 'null is not function');
    test.equal(breed.isFunction(/1/), false, 'regexp is not function');
    test.equal(breed.isFunction(new Date()), false, 'date is not function');
    test.done();
  },
  'isnt': function(test) {
    test.expect(10);
    test.equal(breed.isntFunction(function () {}), false, 'function is function');
    test.equal(breed.isntFunction(), true, 'undefined is not function');
    test.equal(breed.isntFunction({}), true, 'object is not function');
    test.equal(breed.isntFunction([]), true, 'array is not function');
    test.equal(breed.isntFunction(1), true, 'number is not function');
    test.equal(breed.isntFunction(new Error()), true, 'error is not function');
    test.equal(breed.isntFunction(''), true, 'string is not function');
    test.equal(breed.isntFunction(null), true, 'null is not function');
    test.equal(breed.isntFunction(/1/), true, 'regexp is not function');
    test.equal(breed.isntFunction(new Date()), true, 'date is not function');
    test.done();
  },
  'constant': function (test) {
    test.expect(1);
    test.equal(breed.FUNCTION, 'function', 'constant FUNCTION means function');
    test.done();
  }
};