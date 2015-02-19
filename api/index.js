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
API.sentiment = function (params, callback) {

    var isSimple = ! Array.isArray(params.data);

    var options = utils.extend({}, this.options, {
            service: isSimple ? 'classify' : 'bulkClassifyJson',
            method: isSimple ? 'GET' : 'POST'
        }
    )

    if(isSimple) {
        params = {
            options: options,
            params: {
                json: true,
                qs: params.data
            }
        };
    }
    else {
        params = {
            options: options,
            params: {
                json: true,
                body: params
            }
        };
    }

    var APIRequest = require('../lib/apirequest');
    var apiRequest = APIRequest(params, function(error, result) {
        if(!error) {
            if(isSimple) {
                result = result.body.results;
            }
            else {
                result = result.body.data;
            }
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