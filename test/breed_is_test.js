'use strict';

var breed = require('../lib/breed.js');

exports['is'] = {
  'is': function(test) {
    test.expect(10);
    test.equal(breed.is(), 'undefined', 'undefined is undefined');
    test.equal(breed.is(null), 'null', 'null is null');
    test.equal(breed.is({}), 'object', 'object is object');
    test.equal(breed.is([]), 'array', 'array is array');
    test.equal(breed.is(1), 'number', 'number is number');
    test.equal(breed.is(function () {}), 'function', 'function is function');
    test.equal(breed.is(''), 'string', 'string is string');
    test.equal(breed.is(new Date()), 'date', 'date is date');
    test.equal(breed.is(/1/), 'regexp', 'regexp is regexp');
    test.equal(breed.is(new Error()), 'error', 'error is error');
    test.done();
  }
};