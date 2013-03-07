'use strict';

var breed = require('../lib/breed.js');

exports['get'] = {
  'get': function(test) {
    test.expect(10);
    test.equal(breed.get(), 'undefined', 'undefined is undefined');
    test.equal(breed.get(null), 'null', 'null is null');
    test.equal(breed.get({}), 'object', 'object is object');
    test.equal(breed.get([]), 'array', 'array is array');
    test.equal(breed.get(1), 'number', 'number is number');
    test.equal(breed.get(function () {}), 'function', 'function is function');
    test.equal(breed.get(''), 'string', 'string is string');
    test.equal(breed.get(new Date()), 'date', 'date is date');
    test.equal(breed.get(/1/), 'regexp', 'regexp is regexp');
    test.equal(breed.get(new Error()), 'error', 'error is error');
    test.done();
  }
};