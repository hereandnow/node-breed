'use strict';

var breed = require('../lib/breed.js');

exports['array'] = {
  'is': function(test) {
    test.expect(10);
    test.equal(breed.isArray([]), true, 'array is array');
    test.equal(breed.isArray(null), false, 'null is not array');
    test.equal(breed.isArray(), false, 'undefined is not array');
    test.equal(breed.isArray({}), false, 'object is not array');
    test.equal(breed.isArray(1), false, 'number is not array');
    test.equal(breed.isArray(function () {}), false, 'function is not array');
    test.equal(breed.isArray(''), false, 'string is not array');
    test.equal(breed.isArray(new Date()), false, 'date is not array');
    test.equal(breed.isArray(/1/), false, 'regexp is not array');
    test.equal(breed.isArray(new Error()), false, 'error is not array');
    test.done();
  },
  'isnt': function(test) {
    test.expect(10);
    test.equal(breed.isntArray([]), false, 'array is array');
    test.equal(breed.isntArray(null), true, 'null is not undefined');
    test.equal(breed.isntArray(), true, 'undefined is not array');
    test.equal(breed.isntArray({}), true, 'object is not array');
    test.equal(breed.isntArray(1), true, 'number is not array');
    test.equal(breed.isntArray(function () {}), true, 'function is not array');
    test.equal(breed.isntArray(''), true, 'string is not array');
    test.equal(breed.isntArray(new Date()), true, 'date is not array');
    test.equal(breed.isntArray(/1/), true, 'regexp is not array');
    test.equal(breed.isntArray(new Error()), true, 'error is not array');
    test.done();
  },
  'constant': function (test) {
    test.expect(1);
    test.equal(breed.ARRAY, 'array', 'constant ARRAY means array');
    test.done();
  }
};

