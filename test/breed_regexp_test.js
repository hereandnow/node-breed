'use strict';

var breed = require('../lib/breed.js');

exports['regexp'] = {
  'is': function(test) {
    test.expect(10);
    test.equal(breed.isRegExp(/1/), true, 'regexp is regexp');
    test.equal(breed.isRegExp(), false, 'undefined is not regexp');
    test.equal(breed.isRegExp({}), false, 'object is not regexp');
    test.equal(breed.isRegExp([]), false, 'array is not regexp');
    test.equal(breed.isRegExp(1), false, 'number is not regexp');
    test.equal(breed.isRegExp(new Error()), false, 'error is not regexp');
    test.equal(breed.isRegExp(''), false, 'string is not regexp');
    test.equal(breed.isRegExp(), false, 'null is not regexp');
    test.equal(breed.isRegExp(function () {}), false, 'function is not regexp');
    test.equal(breed.isRegExp(new Date()), false, 'date is not regexp');
    test.done();
  },
  'isnt': function(test) {
    test.expect(10);
    test.equal(breed.isntRegExp(/1/), false, 'regexp is regexp');
    test.equal(breed.isntRegExp(), true, 'undefined is not regexp');
    test.equal(breed.isntRegExp({}), true, 'object is not regexp');
    test.equal(breed.isntRegExp([]), true, 'array is not regexp');
    test.equal(breed.isntRegExp(1), true, 'number is not regexp');
    test.equal(breed.isntRegExp(new Error()), true, 'error is not regexp');
    test.equal(breed.isntRegExp(''), true, 'string is not regexp');
    test.equal(breed.isntRegExp(null), true, 'null is not regexp');
    test.equal(breed.isntRegExp(function () {}), true, 'function is not regexp');
    test.equal(breed.isntRegExp(new Date()), true, 'date is not regexp');
    test.done();
  },
  'constant': function(test) {
    test.expect(1);
    test.equal(breed.REGEXP, 'regexp', 'constant REGEXP means regexp');
    test.done();
  }
};