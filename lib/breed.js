/*
 * breed
 * https://github.com/hereandnow/node-breed
 *
 * Copyright (c) 2013 Bastian Behrens
 * Licensed under the MIT license.
 */

'use strict';

var types   = ['Null', 'Object', 'Array', 'Date', 'RegExp', 'Error', 'Number', 'Function', 'String', 'Undefined'],

    errors  = ['EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError'];

function Breed () {}

Breed.prototype = {

  get: function (arg) {
    var i, type;
    if ((type = typeof arg) !== 'object') { return type; }
    for(i = 0; i < types.length; i++) {
      if(this['is' + types[i]](arg)) {
        type = types[i].toLowerCase();
        break;
      }
    }
    return type;
  }

};

types.forEach(function (type) {

  Breed.prototype[type.toUpperCase()] = type.toLowerCase();

  Breed.prototype['is' + type] = function (arg) {
    return {}.toString.call(arg) === '[object ' + type + ']';
  };

  Breed.prototype['isnt' + type] = function (arg) {
    return !this['is' + type](arg);
  };

});

errors.forEach(function (err) {

  Breed.prototype[err.toUpperCase()] = err.toLowerCase();

  Breed.prototype['is' + err] = function (arg) {
    return arg.name === err;
  };

  Breed.prototype['isnt' + err] = function (arg) {
    return !this['is' + err](arg);
  };

});

module.exports = exports = new Breed();