/**
 * Copyright 2015 Peter Andreas Moelgaard. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var utils = require('../lib/utils');
var Promise = require('bluebird');
var _ = require('lodash');

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

    var isSimple = !Array.isArray(params.data);

    var options = utils.extend({}, this.options, {
            service: isSimple ? 'classify' : 'bulkClassifyJson',
            method: isSimple ? 'GET' : 'POST'
        }
    )

    if (isSimple) {
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

    return new Promise(function (resolve, reject) {

        var APIRequest = require('../lib/apirequest');
        var apiRequest = APIRequest(params, function (error, result) {

            if (!error) {
                if (isSimple) {
                    result = result.body.results;
                }
                else {
                    result = result.body.data;
                }
            }
            
            (callback || _.noop)(error, result);

            error ? reject(error) : resolve(result);
        });

    });
}

/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = API;