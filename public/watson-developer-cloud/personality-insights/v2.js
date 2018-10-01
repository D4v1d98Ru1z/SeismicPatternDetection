"use strict";
/**
 * Copyright 2014 IBM Corp. All Rights Reserved.
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var pick = require("object.pick");
var base_service_1 = require("../lib/base_service");
var helper_1 = require("../lib/helper");
var PersonalityInsightsV2 = /** @class */ (function (_super) {
    __extends(PersonalityInsightsV2, _super);
    /**
     * Construct a PersonalityInsightsV2 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version_date - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/personality-insights/api'). The base url may differ between Bluemix regions.
     * @param {string} [options.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {string} [options.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {boolean} [options.use_unauthenticated] - Set to `true` to avoid including an authorization header. This option may be useful for requests that are proxied.
     * @param {Object} [options.headers] - Default headers that shall be included with every request to the service.
     * @param {boolean} [options.headers.X-Watson-Learning-Opt-Out] - Set to `true` to opt-out of data collection. By default, all IBM Watson services log requests and their results. Logging is done only to improve the services for future users. The logged data is not shared or made public. If you are concerned with protecting the privacy of users' personal information or otherwise do not want your requests to be logged, you can opt out of logging.
     * @constructor
     * @returns {PersonalityInsightsV2}
     * @throws {Error}
     */
    function PersonalityInsightsV2(options) {
        return _super.call(this, options) || this;
    }
    /**
     * @param {Object} params - The parameters to call the service
     * @param {string} text - The text to analyze.
     * @param {Object} contentItems - A JSON input (if 'text' is not provided).
     * @param {boolean} include_raw - include raw results
     * @param {boolean} accept_language - The language expected for the output.
     * @param {string} language - The language of the input.
     * @param callback The callback.
     * @returns {ReadableStream|void}
     */
    PersonalityInsightsV2.prototype.profile = function (params, callback) {
        var _params = params || {};
        // support for the new snake_case
        if (_params['content_items']) {
            _params['contentItems'] = _params['content_items'];
        }
        if (!_params.text && !_params.contentItems) {
            callback(new Error('Missing required parameters: text or content_items'));
            return;
        }
        // Content-Type
        var contentType = null;
        if (_params.text) {
            contentType = helper_1.isHTML(_params.text) ? 'text/html' : 'text/plain';
        }
        else {
            contentType = 'application/json';
        }
        var headers = {
            'Content-type': contentType,
            'Accept-language': _params.accept_language || _params.acceptLanguage || 'en',
            Accept: undefined
        };
        // service bug: language in header overrides language in each JSON content item, so we can't set it on those requests
        // (also, content-language doesn't really make sense on JSON)
        if (_params.language || _params.text) {
            headers['Content-language'] = _params.language || 'en';
        }
        var parameters = {
            options: {
                method: 'POST',
                url: '/v2/profile',
                body: _params.text || pick(_params, ['contentItems']),
                json: true,
                qs: pick(_params, ['include_raw']),
                headers: headers
            },
            defaultOptions: this._options
        };
        if (_params.csv) {
            parameters.options.headers.Accept = 'text/csv';
            if (_params.csv_headers) {
                parameters.options.qs.headers = 'true';
            }
        }
        return this.createRequest(parameters, callback);
    };
    PersonalityInsightsV2.URL = 'https://gateway.watsonplatform.net/personality-insights/api';
    return PersonalityInsightsV2;
}(base_service_1.BaseService));
PersonalityInsightsV2.prototype.name = 'personality_insights';
PersonalityInsightsV2.prototype.serviceVersion = 'v2';
module.exports = PersonalityInsightsV2;
//# sourceMappingURL=v2.js.map