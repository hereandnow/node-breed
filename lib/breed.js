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

function Breed () {
  this.instances = {};
}

function extend (name, isFunction) {
  Breed.prototype[name.toUpperCase()] = name.toLowerCase();
  Breed.prototype['is' + name] = isFunction;
  Breed.prototype['isnt' + name] = function (arg) {
    return !this['is' + name](arg);
  };
}

Breed.prototype = {

  is: function (arg) {
    var i, type;
    if ((type = typeof arg) !== 'object') { return type; }
    for(i = 0; i < types.length; i++) {
      if(this['is' + types[i]](arg)) {
        type = types[i].toLowerCase();
        break;
      }
    }
    return type;
  },

  register: function () {
    var _this = this,
        args = Array.prototype.slice.call(arguments);
    args.forEach(function (type) {
      if (_this.isFunction(type)) {
        _this.instances[type.name] = type;
        extend(type.name, function (arg) {
          return (arg || (arg = {})).constructor.name === type.name || (arg instanceof _this.instances[type.name]);
        });
      }
    });
  },

  isNaN: function (arg) {
    return isNaN(arg);
  },

  isntNaN: function (arg) {
    return !isNaN(arg);
  },

  isFinite: function (arg) {
    return isFinite(arg);
  },

  isntFinite: function (arg) {
    return !isFinite(arg);
  },

  isInfinite: function (arg) {
    return this.isntFinite(arg);
  },

  isJSON: function (arg) {
    try {
      JSON.parse(arg);
    } catch(e) {
      return false;
    }
    return true;
  },

  isntJSON: function (arg) {
    return !this.isJSON(arg);
  },

  JSON: 'json',

  NAN: 'nan',

  FINITE: 'finite'

};

types.forEach(function (type) {
  extend(type, function (arg) {
    return {}.toString.call(arg) === '[object ' + type + ']';
  });
});

errors.forEach(function (err) {
  extend(err, function (arg) {
    return (arg || {}).name === err;
  });
});

module.exports = exports = new Breed();