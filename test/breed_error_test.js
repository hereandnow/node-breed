'use strict';

var breed = require('../lib/breed.js');

exports['error'] = {
  'is': function(test) {
    test.expect(10);
    test.equal(breed.isError(new Error()), true, 'error is error');
    test.equal(breed.isError(), false, 'undefined is not error');
    test.equal(breed.isError({}), false, 'object is not error');
    test.equal(breed.isError([]), false, 'array is not error');
    test.equal(breed.isError(1), false, 'number is not error');
    test.equal(breed.isError(function () {}), false, 'function is not error');
    test.equal(breed.isError(''), false, 'string is not error');
    test.equal(breed.isError(), false, 'null is not error');
    test.equal(breed.isError(/1/), false, 'regexp is not error');
    test.equal(breed.isError(new Date()), false, 'date is not error');
    test.done();
  },
  'isnt': function(test) {
    test.expect(10);
    test.equal(breed.isntError(new Error()), false, 'error is error');
    test.equal(breed.isntError(), true, 'undefined is not error');
    test.equal(breed.isntError({}), true, 'object is not error');
    test.equal(breed.isntError([]), true, 'array is not error');
    test.equal(breed.isntError(1), true, 'number is not error');
    test.equal(breed.isntError(function () {}), true, 'function is not error');
    test.equal(breed.isntError(''), true, 'string is not error');
    test.equal(breed.isntError(null), true, 'null is not error');
    test.equal(breed.isntError(/1/), true, 'regexp is not error');
    test.equal(breed.isntError(new Date()), true, 'date is not error');
    test.done();
  },
  'constant': function (test) {
    test.expect(1);
    test.equal(breed.ERROR, 'error', 'constant ERROR means error');
    test.done();
  },
  'error constructors are error': function (test) {
    test.expect(6);
    test.equal(breed.isError(new EvalError()), true, 'EvalError is error');
    test.equal(breed.isError(new RangeError()), true, 'RangeError is error');
    test.equal(breed.isError(new ReferenceError()), true, 'ReferenceError is error');
    test.equal(breed.isError(new SyntaxError()), true, 'SyntaxError is error');
    test.equal(breed.isError(new TypeError()), true, 'TypeError is error');
    test.equal(breed.isError(new URIError()), true, 'URIError is error');
    test.done();
  },
  'error constructors exact': function (test) {
    test.expect(8);
    test.equal(breed.isEvalError(new EvalError()), true, 'EvalError is EvalError');
    test.equal(breed.isEvalError(new RangeError()), false, 'RangeError isnt isEvalError');
    test.equal(breed.isReferenceError(new ReferenceError()), true, 'ReferenceError is ReferenceError');
    test.equal(breed.isEvalError(new SyntaxError()), false, 'SyntaxError isnt isEvalError');
    test.equal(breed.isEvalError(new TypeError()), false, 'TypeError isnt isEvalError');
    test.equal(breed.isURIError(new URIError()), true, 'URIError is URIError');
    test.equal(breed.RANGEERROR, 'rangeerror', 'RangeError constant check');
    test.equal(breed.TYPEERROR, 'typeerror', 'TypeError constant check');
    test.done();
  }
};