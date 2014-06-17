# uid

Simple prefixed unique ID generator.

## Installation

Using [component](https://github.com/component/component)

    $ component install hiwn/uid

Using [npm](http://npmjs.org/) for [browserify](http://browserify.org/)

    $ npm install hiwn-uid

## Usage

Import to your script with `require`

```js
var uid = require('hiwn-uid');
```

By default, it generates a 4 char-wide reandom combination of hexadecimal symbols.

```js
uid(); // -> like 'a14e' 
```

Supply a string as first argument to prefix generated uid with it.

```js
uid('ns-'); // -> like 'ns-a14e'
```

Supply a number as second argument for uid's random part to have that exact length. If `prefix` argument is omitted, it'll take the first numeric argument as length.

```js
uid('ns-', 6); // -> like 'ns-a14e22'
uid(6); // -> like 'a14e22'
```

## Test

Run tests with [mocha-phantomjs](https://github.com/metaskills/mocha-phantomjs)

    $ make test

## License

The MIT License

