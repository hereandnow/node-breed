# Breed

Breed is a Helper Module which makes working with types and typeof easy as easy as it should be.

You are even able to extend Breed with [registering your own Classes](#register-your-own-classes-1) and do checks like this:

```
function Person () {}
breed.register(Person);
breed.isPerson(new Person()); // true
```


##Table of Contents


- [Getting Started](#getting-started)
- [Documentation](#documentation)
  - [Basic Supported Types](#basic-supported-types-1)
  - [is… and isnt…](#is-and-isnt)
  - [is](#is)
  - [Constants](#constants)
  - [Register your own Classes](#register-your-own-classes-1)
- [Examples](#examples)
  - [Basic Supported Types](#basic-supported-types-2)
  - [Register your own Classes](#register-your-own-classes-2)
- [Contributing](#contributing)
- [Release History](#release-history)
- [License](#license)


## Getting Started
Install the module with: `npm install breed`

```
var breed = require('breed');
breed.isArray([]); // true
breed.isntArray([]); // false
breed.is([]) // 'array'
breed.ARRAY // 'array'

```

## Documentation

### Basic Supported Types

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
* JSON
* Finite
* NaN
* Error
* EvalError
* InternalError
* RangeError
* ReferenceError
* SyntaxError
* TypeError
* URIError

### is… and isnt...

Breed always has for every Type 2 Functions:

```
breed.is...
breed.isnt...
```

for example:

```
breed.isFunction()
breed.isntFunction()

// or

breed.isUndefined()
breed.isntUndefined()

// or

breed.isJSON()
breed.isntJSON()

// … and so on
```

There is 1 exceptional Case where isInfinite is just a little bit nicer than isntFinite, so both Cases are supported:

```
breed.isntFinite() === breed.isInfinite()
```

### - is

You are also able to check via breed's is-Function which will always return the type as a String:

```
breed.is([]) // 'array'
breed.is(1) // 'number'
breed.is({}) // 'object'
...
```

### Constants

Every type has its 'Constant' Variable (always uppercase) whos value is always lowercase:

```
breed.ARRAY // 'array'
breed.NUMBER // 'number'
breed.OBJECT // 'object'
...
```

So you can combine it with the is-Function:

```
breed.is([]) === breed.ARRAY // true
breed.is(1) === breed.NUMBER // true
breed.is({}) === breed.OBJECT // true
...
```

### Register your own Classes

Just add as much Classes as you want:

```
breed.register(*functions)
```

The best about that is, that breed.register even supports Inheritance (see the example: [Register your own Classes](#register-your-own-classes-1))


## Examples

### Basic Supported Types
```

// some Functions
breed.isObject({}) // true
breed.isFunction(function () {}) // true
breed.isntDate(new Date()) // false
breed.isntUndefined() // false

// errors all have the super-constructor Error
breed.isRangeError(new RangeError()) // true
breed.isError(new RangeError()) // true

// some constants
breed.ERROR // 'error'
breed.RANGEERROR // 'rangeerror'
breed.DATE // 'date'
breed.ARRAY // 'array'
```

### Register your own Classes
```
var breed = require('breed');
var util = require('util');

// your code creates some Functions
function Person () {}
function Child () {}
function Mom () {}
util.inherits(Child, Person);
util.inherits(Mom, Person);

// register your classes
breed.register(Person, Child, Mom);

// do typechecking
breed.isPerson(new Person()) // true
breed.isChild(new Child()) // true
breed.isPerson(new Child()) // true
breed.isMom(new Mom()) // true
breed.isPerson(new Mom()) // true
breed.isntChild(new Mom()) // true

// constants
breed.PERSON // 'person'
breed.CHILD // 'child'
breed.MOM // 'mom'
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/):

- Available Tasks:
  - jshint
  - nodeunit
  - default (jshint + nodeunit)


## Release History

- 0.2.0 Second Release
   - Implement JSOn, NaN, Finite
   - author breed.register()
   - rename breed.get() to breed.is()


* 0.1.0 Initial Release

## License
Copyright (c) 2013 Bastian Behrens
Licensed under the MIT license.
