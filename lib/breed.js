/*
 * Breed
 *
 * A Helper Module which makes working with types and typeof easy as easy as it should be
 *
 * http://hereandnow.github.com/node-breed/
 *
 * Copyright (c) 2013 Bastian Behrens
 * Licensed under the MIT license.
 */

'use strict';

var natives = ['Undefined', 'Number', 'Function', 'String', 'Boolean'],

    types   = ['Object', 'Date', 'RegExp', 'Error'],

    errors  = ['EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError'];

/**
 * The Main Breed-Class
 */
function Breed () {
  this.instances = {};
}

/**
 * Contains all primitives that can't be checked via instanceof
 *
 * @param {String}, {Function}
 * @private
 */
function extend (name, isFunction) {
  Breed.prototype[name.toUpperCase()] = name.toLowerCase();
  Breed.prototype['is' + name] = isFunction;
  Breed.prototype['isnt' + name] = function (arg) {
    return !this['is' + name](arg);
  };
}

/**
 * Extend Breed
 */
Breed.prototype = {

  /**
   * returns the typeof the argument as a string
   *
   * @param {*}
   * @return {String}
   */
  is: function (arg) {
    var type;
    if ((type = typeof arg) !== 'object') { return type; }
    return {}.toString.call(arg).slice(8, -1).toLowerCase();
  },

  /**
   * register as much functions as you want
   *
   * @param {...Function}
   */
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
  }

};

/**
 * isArray: use native Array.isArray
 */
extend('Array', function (arg) {
  return Array.isArray(arg);
});

/**
 * isNull: just check for null
 */
extend('Null', function (arg) {
  return arg === null;
});

/**
 * isJSON: try to parse the arg
 */
extend('JSON', function (arg) {
  try { JSON.parse(arg); } catch(e) { return false; }
  return true;
});

/**
 * isNaN, isFinite: call the global functions directly
 */
['NaN', 'Finite'].forEach(function (type) {
  extend(type, function (arg) {
    return global['is' + type](arg);
  });
});
Breed.prototype.isInfinite = Breed.prototype.isntFinite;

/**
 * isUndefined, ...: native typeof-operator
 */
natives.forEach(function (native) {
  extend(native, function (arg) {
    return typeof arg === native.toLowerCase();
  });
});

/**
 * isObject, isDate, ...: Objects
 */
types.forEach(function (type) {
  extend(type, function (arg) {
    return {}.toString.call(arg).slice(8, -1) === type;
  });
});

/**
 * isRangeError, isTypeError, ...: Errors
 */
errors.forEach(function (err) {
  extend(err, function (arg) {
    return (arg || {}).name === err;
  });
});

module.exports = exports = new Breed();