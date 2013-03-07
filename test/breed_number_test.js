'use strict';

var breed = require('../lib/breed.js');

exports['number'] = {
  'is': function(test) {
    test.expect(10);
    test.equal(breed.isNumber(1), true, 'number is number');
    test.equal(breed.isNumber(), false, 'undefined is not number');
    test.equal(breed.isNumber({}), false, 'object is not number');
    test.equal(breed.isNumber([]), false, 'array is not number');
    test.equal(breed.isNumber(function() {}), false, 'function is not number');
    test.equal(breed.isNumber(new Error()), false, 'error is not number');
    test.equal(breed.isNumber(''), false, 'string is not number');
    test.equal(breed.isNumber(), false, 'null is not number');
    test.equal(breed.isNumber(/1/), false, 'regexp is not number');
    test.equal(breed.isNumber(new Date()), false, 'date is not number');
    test.done();
  },
  'isnt': function(test) {
    test.expect(10);
    test.equal(breed.isntNumber(1), false, 'number is number');
    test.equal(breed.isntNumber(), true, 'undefined is not number');
    test.equal(breed.isntNumber({}), true, 'object is not number');
    test.equal(breed.isntNumber([]), true, 'array is not number');
    test.equal(breed.isntNumber(function() {}), true, 'function is not number');
    test.equal(breed.isntNumber(new Error()), true, 'error is not number');
    test.equal(breed.isntNumber(''), true, 'string is not number');
    test.equal(breed.isntNumber(null), true, 'null is not number');
    test.equal(breed.isntNumber(/1/), true, 'regexp is not number');
    test.equal(breed.isntNumber(new Date()), true, 'date is not number');
    test.done();
  },
  'constant': function(test) {
    test.expect(1);
    test.equal(breed.NUMBER, 'number', 'constant NUMBER means number');
    test.done();
  }
};