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
Object.defineProperty(exports, "__esModule", { value: true });
var extend = require("extend");
var request = require("request");
var stream_1 = require("stream");
var helper_1 = require("./helper");
// tslint:disable-next-line:no-var-requires
var pkg = require('../package.json');
var isBrowser = typeof window === 'object';
var globalTransactionId = 'x-global-transaction-id';
/**
 * @private
 * @param {string} path
 * @param {Object} params
 * @returns {string}
 */
function parsePath(path, params) {
    if (!path || !params) {
        return path;
    }
    return Object.keys(params).reduce(function (parsedPath, param) {
        var value = encodeURIComponent(params[param]);
        return parsedPath.replace(new RegExp("{" + param + "}"), value);
    }, path);
}
/**
 * Check if the service/request have error and try to format them.
 * @param  {Function} cb the request callback
 * @private
 * @returns {request.RequestCallback}
 */
function formatErrorIfExists(cb) {
    return function (error, response, body) {
        // eslint-disable-line complexity
        // If we have an error return it.
        if (error) {
            // first ensure that it's an instanceof Error
            if (!(error instanceof Error)) {
                body = error;
                error = new Error(error.message || error.error || error);
                error.body = body;
            }
            if (response && response.headers) {
                error[globalTransactionId] = response.headers[globalTransactionId];
            }
            cb(error, body, response);
            return;
        }
        try {
            // in most cases, request will have already parsed the body as JSON
            body = JSON.parse(body);
        }
        catch (e) {
            // if it fails, just return the body as-is
        }
        // for api-key services
        if (response.statusMessage === 'invalid-api-key') {
            var error_1 = {
                error: response.statusMessage,
                code: response.statusMessage === 'invalid-api-key' ? 401 : 400,
            };
            if (response.headers) {
                error_1[globalTransactionId] = response.headers[globalTransactionId];
            }
            cb(error_1, null);
            return;
        }
        // If we have a response and it contains an error
        if (body && (body.error || body.error_code)) {
            // visual recognition sets body.error to a json object with code/description/error_id instead of putting them top-left
            if (typeof body.error === 'object' && body.error.description) {
                var errObj = body.error; // just in case there's a body.error.error...
                Object.keys(body.error).forEach(function (key) {
                    body[key] = body.error[key];
                });
                Object.keys(body.error).forEach(function (key) {
                    body[key] = body.error[key];
                });
                body.error = errObj.description;
            }
            else if (typeof body.error === 'object' && typeof body.error.error === 'object') {
                // this can happen with, for example, the conversation createSynonym() API
                body.rawError = body.error;
                body.error = JSON.stringify(body.error.error); //
            }
            // language translaton returns json with error_code and error_message
            error = new Error(body.error || body.error_message || 'Error Code: ' + body.error_code);
            error.code = body.error_code;
            Object.keys(body).forEach(function (key) {
                error[key] = body[key];
            });
            body = null;
        }
        // If we still don't have an error and there was an error...
        if (!error && (response.statusCode < 200 || response.statusCode >= 300)) {
            // The JSON stringify for the error below is for the Dialog service
            // It stringifies "[object Object]" into the correct error (PR #445)
            error = new Error(typeof body === 'object' ? JSON.stringify(body) : body);
            error.code = response.statusCode;
            body = null;
        }
        // ensure a more descriptive error message
        if (error && (error.code === 401 || error.code === 403)) {
            error.body = error.message;
            error.message = 'Unauthorized: Access is denied due to invalid credentials.';
        }
        if (error && response && response.headers) {
            error[globalTransactionId] = response.headers[globalTransactionId];
        }
        cb(error, body, response);
        return;
    };
}
exports.formatErrorIfExists = formatErrorIfExists;
/**
 * Creates the request.
 * 1. Merge default options with user provided options
 * 2. Checks for missing parameters
 * 3. Encode path and query parameters
 * 4. Call the api
 * @private
 * @returns {ReadableStream|undefined}
 * @throws {Error}
 */
function sendRequest(parameters, _callback) {
    var missingParams = null;
    var options = extend(true, {}, parameters.defaultOptions, parameters.options);
    var path = options.path, body = options.body, form = options.form, formData = options.formData, qs = options.qs;
    // Missing parameters
    if (parameters.options.requiredParams) {
        // eslint-disable-next-line no-console
        console.warn(new Error('requiredParams set on parameters.options - it should be set directly on parameters'));
    }
    missingParams = helper_1.getMissingParams(parameters.originalParams || extend({}, qs, body, form, formData, path), parameters.requiredParams);
    if (missingParams) {
        if (typeof _callback === 'function') {
            return _callback(missingParams);
        }
        else {
            var errorStream_1 = new stream_1.PassThrough();
            setTimeout(function () {
                errorStream_1.emit('error', missingParams);
            }, 0);
            return errorStream_1;
        }
    }
    // Form params
    if (formData) {
        // Remove keys with undefined/null values
        // Remove empty objects
        // Remove non-valid inputs for buildRequestFileObject,
        // i.e things like {contentType: <contentType>}
        Object.keys(formData).forEach(function (key) {
            // tslint:disable-next-line:no-unused-expression
            (formData[key] == null ||
                helper_1.isEmptyObject(formData[key]) ||
                (formData[key].hasOwnProperty('contentType') && !formData[key].hasOwnProperty('data'))) &&
                delete formData[key];
        });
        // Convert file form parameters to request-style objects
        Object.keys(formData).forEach(function (key) { return formData[key].data != null && (formData[key] = helper_1.buildRequestFileObject(formData[key])); });
        // Stringify arrays
        Object.keys(formData).forEach(function (key) { return Array.isArray(formData[key]) && (formData[key] = formData[key].join(',')); });
        // Convert non-file form parameters to strings
        Object.keys(formData).forEach(function (key) {
            return !helper_1.isFileParam(formData[key]) &&
                !Array.isArray(formData[key]) &&
                typeof formData[key] === 'object' &&
                (formData[key] = JSON.stringify(formData[key]));
        });
    }
    // Path params
    options.url = parsePath(options.url, path);
    delete options.path;
    // Headers
    options.headers = extend({}, options.headers);
    if (!isBrowser) {
        options.headers['User-Agent'] = pkg.name + "-nodejs-" + pkg.version + ";" + (options.headers['User-Agent'] || '');
    }
    // Query params
    if (options.qs && Object.keys(options.qs).length > 0) {
        // dialog doesn't like qs params joined with a `,`
        if (!parameters.defaultOptions.url.match(/dialog\/api/)) {
            Object.keys(options.qs).forEach(function (key) { return Array.isArray(options.qs[key]) && (options.qs[key] = options.qs[key].join(',')); });
        }
        options.useQuerystring = true;
    }
    // Add service default endpoint if options.url start with /
    if (options.url.charAt(0) === '/') {
        options.url = parameters.defaultOptions.url + options.url;
    }
    // Compression support
    options.gzip = true;
    return request(options, formatErrorIfExists(_callback));
}
exports.sendRequest = sendRequest;
//# sourceMappingURL=requestwrapper.js.map