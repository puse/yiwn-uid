# uid

Simple prefixed unique ID generator.

## Installation

Using [component](https://github.com/component/component)

    $ component install yiwn/uid

Using [npm](http://npmjs.org/) for [browserify](http://browserify.org/)

    $ npm install yiwn-uid

## Usage

Example:

```js
var uid = require('yiwn-uid');

uid('user-'); // ~> 'user-a14e';
```

By default, it generates a 4 char-wide random combination of hexadecimal symbols, backed by `Math.random()`.

```js
uid(); // ~> 'a14e'
```

Supply a string as first argument to prefix generated uid with it.

If supplied a number as second argument for uid's random part to have that exact length. If `prefix` argument is omitted, it'll take the first numeric argument as length.

```js
uid('ns-'); // ~> 'ns-a14e'
uid('ns-', 6); // -> like 'ns-a14e22'
uid(6); // -> like 'a14e22'
```

## Test

Run tests with [mocha-phantomjs](https://github.com/metaskills/mocha-phantomjs)

    $ make test

## Origins

Mostly from [this blog post](http://note19.com/2007/05/27/javascript-guid-generator/).

## License

The MIT License

