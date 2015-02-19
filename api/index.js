/**
 */
'use strict';

var utils = require('../lib/utils');

var API = {};

/**
 * bulkClassifyJson
 *
 * @desc Returns the results.
 *
 * @memberOf! bulkClassifyJson(v1)
 *
 * @param  {object} params - Parameters for request
 * @param  {callback} callback - The callback that handles the response.
 * @return {object} Request object
 */
API.bulkClassifyJson = function (params, callback) {

    var options = utils.extend({}, this.options, {
            context: 'bulkClassifyJson',
            method: 'POST'
        }
    );

    var parameters = {
        options: options,
        params: {
            json: true,
            body: params
        }
    };

    var createAPIRequest = require('../lib/apirequest');
    return createAPIRequest(parameters, callback);
}

/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = API;