/**
 */

'use strict';

/**
 * Export extend
 * @type {Object}
 */
module.exports = {
    /**
     * Copy key/values to obj from all other objects passed in
     *
     * @param {object} a the destination object.
     * @return {object} the destination object.
     */
    extend: function(obj) {
        var source, prop;
        for (var i = 1, length = arguments.length; i < length; i++) {
            source = arguments[i];
            for (prop in source) {
                obj[prop] = source[prop];
            }
        }
        return obj;
    }
};
