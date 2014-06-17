/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  if (!('exports' in module) && typeof module.definition === 'function') {
    module.client = module.component = true;
    module.definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

/**
 * Define a module's exports immediately with `exports`.
 *
 * @param {String} name
 * @param {Generic} exports
 * @api private
 */

require.define = function (name, exports) {
  require.modules[name] = {
    exports: exports
  };
};
require.register("uid", function (exports, module) {
module.exports = require("uid/lib/uid.js");

});

require.register("uid/lib/uid.js", function (exports, module) {
module.exports = random;

/**
 * Previously generated IDs
 */

var prev = [];

/**
 * Generates a random hex string with given length.
 *
 * @param {Number} l [optional]
 * @returns {string}
 */

function generate(l) {
    // exclude chance of 0
    var r = (1 + Math.random()) * l | 0,
        t = r.toString(16).substring(1);

    t = ~prev.indexOf(t)
        ? generate(l+1)
        : t;

    prev.push(t);

    return t;
}

/**
 * Generate a random ID with given (optional) characteristics.
 *
 * @param  {String} prefix [optional]
 * @param  {Number} digits [optional]
 * @return {String}
 */

function random(prefix, digits) {
    if (typeof prefix == 'number')
        digits = prefix, prefix = '';

    prefix = prefix || '';
    digits = digits || 4;

    var l = Math.pow(16, digits);

    return prefix + generate(l);
}

});

require("uid")
