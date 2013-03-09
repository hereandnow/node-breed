'use strict';

var breed = require('../lib/breed.js');

exports['boolean'] = {
  'is': function(test) {
    test.expect(10);
    test.equal(breed.isBoolean(true), true, 'Boolean is Boolean');
    test.equal(breed.isBoolean(null), false, 'null is not Boolean');
    test.equal(breed.isBoolean(), false, 'undefined is not Boolean');
    test.equal(breed.isBoolean({}), false, 'object is not Boolean');
    test.equal(breed.isBoolean(1), false, 'number is not Boolean');
    test.equal(breed.isBoolean(function () {}), false, 'function is not Boolean');
    test.equal(breed.isBoolean(''), false, 'string is not Boolean');
    test.equal(breed.isBoolean(new Date()), false, 'date is not Boolean');
    test.equal(breed.isBoolean(/1/), false, 'regexp is not Boolean');
    test.equal(breed.isBoolean(new Error()), false, 'error is not Boolean');
    test.done();
  },
  'isnt': function(test) {
    test.expect(10);
    test.equal(breed.isntBoolean(true), false, 'Boolean is Boolean');
    test.equal(breed.isntBoolean(null), true, 'null is not undefined');
    test.equal(breed.isntBoolean(), true, 'undefined is not Boolean');
    test.equal(breed.isntBoolean({}), true, 'object is not Boolean');
    test.equal(breed.isntBoolean(1), true, 'number is not Boolean');
    test.equal(breed.isntBoolean(function () {}), true, 'function is not Boolean');
    test.equal(breed.isntBoolean(''), true, 'string is not Boolean');
    test.equal(breed.isntBoolean(new Date()), true, 'date is not Boolean');
    test.equal(breed.isntBoolean(/1/), true, 'regexp is not Boolean');
    test.equal(breed.isntBoolean(new Error()), true, 'error is not Boolean');
    test.done();
  },
  'constant': function (test) {
    test.expect(1);
    test.equal(breed.BOOLEAN, 'boolean', 'constant Boolean means Boolean');
    test.done();
  }
};

