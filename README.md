# breed

Breed is a Helper Module which makes working with working with types and typeof easy as easy as it should be.

Breed currently supports following types (see more detail in documentation below)

* Null
* Object
* Array
* Date
* RegExp
* Error
* Number
* Function
* String
* Undefined
* Error
* EvalError
* InternalError
* RangeError
* ReferenceError
* SyntaxError
* TypeError
* URIError


## Getting Started
Install the module with: `npm install breed`

```
var breed = require('breed');
breed.isArray([]); // true
breed.isntArray([]); // false
breed.get([]) // 'array'
breed.ARRAY // 'array'

```

## Documentation

###General-purpose constructors

###### Array

```
breed.isArray([]) // true
breed.isntArray([]) // false
breed.ARRAY // 'array'
```

###### Boolean

```
breed.isBoolean(true) // true
breed.isntBoolean(true) // false
breed.BOOLEAN // 'boolean'
```

###### Date

```
breed.isDate(new Date()) // true
breed.isntDate(new Date()) // false
breed.DATE // 'date'
```
###### Function

```
breed.isFunction(function () {}) // true
breed.isntFunction(function () {}) // false
breed.FUNCTION // 'function'
```

###### Number

```
breed.isNumber(1) // true
breed.isntNumber(1) // false
breed.NUMBER // 'number'
```

###### Object

```
breed.isObject({}) // true
breed.isntObject({}) // false
breed.OBJECT // 'object'
```
###### RegExp

```
breed.isRegExp(/1/) // true
breed.isntRegExp(/1/) // false
breed.REGEXP // 'regexp'
```
###### String

```
breed.isString('') // true
breed.isntString('') // false
breed.STRING // 'string'
```

###Error Constructors

* Error
* EvalError
* RangeError
* ReferenceError
* SyntaxError
* TypeError
* URIError

###### Examples

```
breed.isError(new Error()) // true
breed.isError(new TypeError()) // true
breed.isError(new EvalError()) // true
breed.isError(new RangeError()) // true
breed.isntError(new Error()) // false
breed.isRangeError(new RangeError()) // true
breed.ERROR // 'error'
breed.RANGEERROR // 'rangeerror'
breed.TYPEERROR // 'typeerror'
```

###Other

###### Null

```
breed.isNull(null) // true
breed.isntNull(null) // false
breed.NULL // 'null'
```
###### Undefined

```
breed.isUndefined() // true
breed.isntUndefined() // false
breed.UNDEFINED // 'undefined'
```

## Examples

```
var breed = require('breed');

if (breed.isRegExp(/1/) ) {
  // do your Stuff
}

// or you could use the constants
if (breed.get(/1/) === breed.REGEXP) {
  // do your Stuff
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/):

```
$ grunt default
```

## TODOs
* Support Typed array constructors
* isJSON, isNaN

## Release History

* 0.1.0 Initial Release

## License
Copyright (c) 2013 Bastian Behrens
Licensed under the MIT license.
