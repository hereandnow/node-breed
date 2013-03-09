'use strict';

var breed = require('../lib/breed.js');

exports['other'] = {
  'nan': function(test) {
    test.expect(4);
    test.equal(breed.isNaN("hans"), true, 'alphanumeric String isNaN');
    test.equal(breed.isNaN("1"), false, 'numeric String isNaN');
    test.equal(breed.isntNaN("hans"), false, 'alphanumeric String isNaN');
    test.equal(breed.isntNaN("1"), true, 'numeric String isNaN');
    test.done();
  },
  'json': function (test) {
    test.expect(4);
    test.equal(breed.isJSON('{"hans":"wurst"}'), true, 'parseable string is JSON');
    test.equal(breed.isJSON('"hans":"wurst"}'), false, 'not parseable string isnt JSON');
    test.equal(breed.isntJSON('{"hans":"wurst"}'), false, 'alphanumeric String isNaN');
    test.equal(breed.isntJSON('"hans":"wurst"}'), true, 'numeric String isNaN');
    test.done();
  },
  'finite': function (test) {
    test.expect(5);
    test.equal(breed.isFinite(1), true, 'finite number is finite');
    test.equal(breed.isFinite({}), false, 'object is not finite');
    test.equal(breed.isntFinite(1), false, 'finite number is finite');
    test.equal(breed.isntFinite({}), true, 'object is not finite');
    test.equal(breed.isInfinite({}), true, 'object is not finite');
    test.done();
  }
};