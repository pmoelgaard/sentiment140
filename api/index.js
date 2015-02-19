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

    var APIRequest = require('../lib/apirequest');
    var apiRequest = APIRequest(parameters, function(error, result) {
        if(!error) {
            result = result.body;
        }
        callback(error, result);
    });
    return apiRequest;
}

/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = API;