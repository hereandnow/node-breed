# Breed

## About

Breed is a Helper Module which makes working with types and typeof easy as easy as it should be.

You are even able to extend Breed with your own Functions.

You can find the [complete Documentation here](http://hereandnow.github.com/node-breed/)


Install the module with: `npm install breed`

```
var breed = require('breed');
function Person () {}
breed.register(Person);
breed.isObect(new Person()); // true
breed.isPerson(new Person()); // true
breed.isArray(new Person()); // false
breed.isntPerson(new Person()); // false
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/):

- Available Tasks:
  - jshint
  - nodeunit
  - default (jshint + nodeunit)


## Release History

- 0.2.0 Second Release
   - Implement JSON, NaN, Finite
   - author breed.register()
   - rename breed.get() to breed.is()


* 0.1.0 Initial Release

## License
Copyright (c) 2013 Bastian Behrens
Licensed under the MIT license.
