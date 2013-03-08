'use strict';

var breed = require('../lib/breed.js');
var util = require('util');

function Person () {}
function Child () {}

exports['register'] = {
  setUp: function(done) {
    util.inherits(Child, Person);
    breed.register(Person, Child);
    done();
  },
  'is': function(test) {
    test.expect(7);
    test.equal(breed.isPerson(new Person()), true, 'Person is Person');
    test.equal(breed.isChild(new Child()), true, 'Child is Child');
    test.equal(breed.isPerson(new Child()), true, 'Child is Person because of inheritance');
    test.equal(breed.isPerson(), false, 'undefined is not Person');
    test.equal(breed.isPerson(null), false, 'null is not Person');
    test.equal(breed.isPerson(new Date()), false, 'Date is not Person');
    test.equal(breed.isChild(new Date()), false, 'Date is not Child');
    test.done();
  },
  'isnt': function(test) {
    test.expect(7);
    test.equal(breed.isntPerson(new Person()), false, 'Person is Person');
    test.equal(breed.isntChild(new Child()), false, 'Child is Child');
    test.equal(breed.isntPerson(new Child()), false, 'Child is Person because of inheritance');
    test.equal(breed.isntPerson(), true, 'undefined is not Person');
    test.equal(breed.isntPerson(null), true, 'null is not Person');
    test.equal(breed.isntPerson(new Date()), true, 'Date is not Person');
    test.equal(breed.isntChild(new Date()), true, 'Date is not Child');
    test.done();
  },
  'constant': function (test) {
    test.expect(2);
    test.equal(breed.PERSON, 'person', 'person is person');
    test.equal(breed.CHILD, 'child', 'child is child');
    test.done();
  }
};