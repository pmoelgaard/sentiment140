/**
 */

'use strict';

var Transporter = require('./transporter.js');

/**
 * Create and send request to Sentiment140 API
 * @param  {object}   parameters Parameters used to form request
 * @param  {Function} callback   Callback when request finished or error found
 * @return {Request}             Returns Request object or null
 */
function createAPIRequest(parameters, callback) {

    parameters.options.url += '/'+ parameters.options.context;
    parameters.options.url += '?appid='+ parameters.options.auth;
    delete parameters.options.auth;

    var req = new Transporter(parameters.options).request(parameters.params, function(error, result) {
        callback(error, result);
    });
    return req;
}

/**
 * Exports createAPIRequest
 * @type {Function}
 */
module.exports = createAPIRequest;
