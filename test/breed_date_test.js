'use strict';

var breed = require('../lib/breed.js');

exports['date'] = {
  'is': function(test) {
    test.expect(10);
    test.equal(breed.isDate(new Date()), true, 'date is date');
    test.equal(breed.isDate(), false, 'undefined is not date');
    test.equal(breed.isDate({}), false, 'object is not date');
    test.equal(breed.isDate([]), false, 'array is not date');
    test.equal(breed.isDate(1), false, 'number is not date');
    test.equal(breed.isDate(function () {}), false, 'function is not date');
    test.equal(breed.isDate(''), false, 'string is not date');
    test.equal(breed.isDate(), false, 'null is not date');
    test.equal(breed.isDate(/1/), false, 'regexp is not date');
    test.equal(breed.isDate(new Error()), false, 'error is not date');
    test.done();
  },
  'isnt': function(test) {
    test.expect(10);
    test.equal(breed.isntDate(new Date()), false, 'date is date');
    test.equal(breed.isntDate(), true, 'undefined is not date');
    test.equal(breed.isntDate({}), true, 'object is not date');
    test.equal(breed.isntDate([]), true, 'array is not date');
    test.equal(breed.isntDate(1), true, 'number is not date');
    test.equal(breed.isntDate(function () {}), true, 'function is not date');
    test.equal(breed.isntDate(''), true, 'string is not date');
    test.equal(breed.isntDate(null), true, 'null is not date');
    test.equal(breed.isntDate(/1/), true, 'regexp is not date');
    test.equal(breed.isntDate(new Error()), true, 'error is not date');
    test.done();
  },
  'constant': function (test) {
    test.expect(1);
    test.equal(breed.DATE, 'date', 'constant DATE means date');
    test.done();
  }
};