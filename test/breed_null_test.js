'use strict';

var breed = require('../lib/breed.js');

exports['null'] = {
  'is': function(test) {
    test.expect(10);
    test.equal(breed.isNull(null), true, 'null is null');
    test.equal(breed.isNull(), false, 'undefined is not null');
    test.equal(breed.isNull({}), false, 'object is not null');
    test.equal(breed.isNull([]), false, 'array is not null');
    test.equal(breed.isNull(1), false, 'number is not null');
    test.equal(breed.isNull(function () {}), false, 'function is not null');
    test.equal(breed.isNull(''), false, 'string is not null');
    test.equal(breed.isNull(new Date()), false, 'date is not null');
    test.equal(breed.isNull(/1/), false, 'regexp is not null');
    test.equal(breed.isNull(new Error()), false, 'error is not null');
    test.done();
  },
  'isnt': function(test) {
    test.expect(10);
    test.equal(breed.isntNull(null), false, 'null is null');
    test.equal(breed.isntNull(), true, 'undefined is not null');
    test.equal(breed.isntNull({}), true, 'object is not null');
    test.equal(breed.isntNull([]), true, 'array is not null');
    test.equal(breed.isntNull(1), true, 'number is not null');
    test.equal(breed.isntNull(function () {}), true, 'function is not null');
    test.equal(breed.isntNull(''), true, 'string is not null');
    test.equal(breed.isntNull(new Date()), true, 'date is not null');
    test.equal(breed.isntNull(/1/), true, 'regexp is not null');
    test.equal(breed.isntNull(new Error()), true, 'error is not null');
    test.done();
  },
  'constant': function (test) {
    test.expect(1);
    test.equal(breed.NULL, 'null', 'constant NULL means null');
    test.done();
  }
};