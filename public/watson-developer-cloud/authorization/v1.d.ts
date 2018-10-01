/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
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
import { BaseService } from '../lib/base_service';
declare class AuthorizationV1 extends BaseService {
    static URL: string;
    name: any;
    serviceVersion: any;
    /**
     * Authorization Service
     *
     * Generates temporary auth tokens for use in untrusted environments.
     * Tokens expire after one hour.
     *
     * @param {Object} options
     * @param {String} options.username
     * @param {String} options.password
     * @param {String} [options.url] url of the service for which auth tokens are being generated
     * @constructor
     */
    constructor(options: any);
    /**
     * If using an RC service, get an IAM access token. If using a CF service,
     * get a percent-encoded authorization token based on resource query string param
     *
     * @param {Object} [options]
     * @param {String} [options.url] defaults to url supplied to constructor (if any)
     * @param {Function(err, token)} callback - called with a %-encoded token if CF
     */
    getToken(params: any, callback: any): any;
}
export = AuthorizationV1;
