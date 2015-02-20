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
 * Exports Sentiment140.
 */
module.exports = Sentiment140;
