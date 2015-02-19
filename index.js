/**
 * Author: Peter Andreas Moelgaard, hello@petermolgaard.com
 */

'use strict';

var utils = require('./lib/utils');

/**
 * A module for interacting with Sentiment140 API
 * @module sentiment140
 */

/**
 * Sentiment140 constructor.
 * @param {object} options Options to be passed in
 * @constructor
 */
function Sentiment140(options) {

    this.options = utils.extend(
        {},
        options,
        { url: 'http://www.sentiment140.com/api' }
    );

    /**
     * Load the apis from apis index file
     * This file holds all version information
     * @private
     */
    var api = require('./api');
    this.addAPI(api);
}

/**
 * Add API endpoints to object
 *
 * @param {Array} api Api to be added
 * @private
 */
Sentiment140.prototype.addAPI = function(api) {
    for (var apiName in api) {
        this[apiName] = api[apiName].bind(this);
    }
};

/**
 * Exports googleapis.
 */
module.exports = Sentiment140;
