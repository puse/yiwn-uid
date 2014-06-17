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
