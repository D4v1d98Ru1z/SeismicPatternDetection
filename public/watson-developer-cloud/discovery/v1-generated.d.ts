/**
 * Copyright 2018 IBM All Rights Reserved.
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
/// <reference types="node" />
import { RequestResponse } from 'request';
import { BaseService } from '../lib/base_service';
import { FileObject } from '../lib/helper';
/**
 * The IBM Watson&trade; Discovery Service is a cognitive search and content analytics engine that you can add to applications to identify patterns, trends and actionable insights to drive better decision-making. Securely unify structured and unstructured data with pre-enriched content, and use a simplified query language to eliminate the need for manual filtering of results.
 */
declare class DiscoveryV1 extends BaseService {
    static URL: string;
    name: string;
    serviceVersion: string;
    /**
     * Construct a DiscoveryV1 object.
     *
     * @param {Object} options - Options for the service.
     * @param {string} options.version - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/discovery/api'). The base url may differ between Bluemix regions.
     * @param {string} [options.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {string} [options.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {string} [options.iam_access_token] - An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.
     * @param {string} [options.iam_apikey] - An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.
     * @param {string} [options.iam_url] - An optional URL for the IAM service API. Defaults to 'https://iam.bluemix.net/identity/token'.
     * @param {boolean} [options.use_unauthenticated] - Set to `true` to avoid including an authorization header. This option may be useful for requests that are proxied.
     * @param {Object} [options.headers] - Default headers that shall be included with every request to the service.
     * @param {boolean} [options.headers.X-Watson-Learning-Opt-Out] - Set to `true` to opt-out of data collection. By default, all IBM Watson services log requests and their results. Logging is done only to improve the services for future users. The logged data is not shared or made public. If you are concerned with protecting the privacy of users' personal information or otherwise do not want your requests to be logged, you can opt out of logging.
     * @constructor
     * @returns {DiscoveryV1}
     * @throws {Error}
     */
    constructor(options: DiscoveryV1.Options);
    /*************************
     * environments
     ************************/
    /**
     * Create an environment.
     *
     * Creates a new environment for private data. An environment must be created before collections can be created.
     *
     * **Note**: You can create only one environment for private data per service instance. An attempt to create another
     * environment results in an error.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.name - Name that identifies the environment.
     * @param {string} [params.description] - Description of the environment.
     * @param {string} [params.size] - Size of the environment.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createEnvironment(params: DiscoveryV1.CreateEnvironmentParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Environment>): NodeJS.ReadableStream | void;
    /**
     * Delete environment.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteEnvironment(params: DiscoveryV1.DeleteEnvironmentParams, callback?: DiscoveryV1.Callback<DiscoveryV1.DeleteEnvironmentResponse>): NodeJS.ReadableStream | void;
    /**
     * Get environment info.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getEnvironment(params: DiscoveryV1.GetEnvironmentParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Environment>): NodeJS.ReadableStream | void;
    /**
     * List environments.
     *
     * List existing environments for the service instance.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.name] - Show only the environment with the given name.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listEnvironments(params?: DiscoveryV1.ListEnvironmentsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.ListEnvironmentsResponse>): NodeJS.ReadableStream | void;
    /**
     * List fields across collections.
     *
     * Gets a list of the unique fields (and their types) stored in the indexes of the specified collections.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string[]} params.collection_ids - A comma-separated list of collection IDs to be queried against.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listFields(params: DiscoveryV1.ListFieldsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.ListCollectionFieldsResponse>): NodeJS.ReadableStream | void;
    /**
     * Update an environment.
     *
     * Updates an environment. The environment's **name** and  **description** parameters can be changed. You must specify
     * a **name** for the environment.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} [params.name] - Name that identifies the environment.
     * @param {string} [params.description] - Description of the environment.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateEnvironment(params: DiscoveryV1.UpdateEnvironmentParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Environment>): NodeJS.ReadableStream | void;
    /*************************
     * configurations
     ************************/
    /**
     * Add configuration.
     *
     * Creates a new configuration.
     *
     * If the input configuration contains the **configuration_id**, **created**, or **updated** properties, then they are
     * ignored and overridden by the system, and an error is not returned so that the overridden fields do not need to be
     * removed when copying a configuration.
     *
     * The configuration can contain unrecognized JSON fields. Any such fields are ignored and do not generate an error.
     * This makes it easier to use newer configuration files with older versions of the API and the service. It also makes
     * it possible for the tooling to add additional metadata and information to the configuration.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.name - The name of the configuration.
     * @param {string} [params.description] - The description of the configuration, if available.
     * @param {Conversions} [params.conversions] - The document conversion settings for the configuration.
     * @param {Enrichment[]} [params.enrichments] - An array of document enrichment settings for the configuration.
     * @param {NormalizationOperation[]} [params.normalizations] - Defines operations that can be used to transform the
     * final output JSON into a normalized form. Operations are executed in the order that they appear in the array.
     * @param {Source} [params.source] - Object containing source parameters for the configuration.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createConfiguration(params: DiscoveryV1.CreateConfigurationParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Configuration>): NodeJS.ReadableStream | void;
    /**
     * Delete a configuration.
     *
     * The deletion is performed unconditionally. A configuration deletion request succeeds even if the configuration is
     * referenced by a collection or document ingestion. However, documents that have already been submitted for
     * processing continue to use the deleted configuration. Documents are always processed with a snapshot of the
     * configuration as it existed at the time the document was submitted.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.configuration_id - The ID of the configuration.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteConfiguration(params: DiscoveryV1.DeleteConfigurationParams, callback?: DiscoveryV1.Callback<DiscoveryV1.DeleteConfigurationResponse>): NodeJS.ReadableStream | void;
    /**
     * Get configuration details.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.configuration_id - The ID of the configuration.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getConfiguration(params: DiscoveryV1.GetConfigurationParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Configuration>): NodeJS.ReadableStream | void;
    /**
     * List configurations.
     *
     * Lists existing configurations for the service instance.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} [params.name] - Find configurations with the given name.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listConfigurations(params: DiscoveryV1.ListConfigurationsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.ListConfigurationsResponse>): NodeJS.ReadableStream | void;
    /**
     * Update a configuration.
     *
     * Replaces an existing configuration.
     *   * Completely replaces the original configuration.
     *   * The **configuration_id**, **updated**, and **created** fields are accepted in the request, but they are
     * ignored, and an error is not generated. It is also acceptable for users to submit an updated configuration with
     * none of the three properties.
     *   * Documents are processed with a snapshot of the configuration as it was at the time the document was submitted
     * to be ingested. This means that already submitted documents will not see any updates made to the configuration.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.configuration_id - The ID of the configuration.
     * @param {string} params.name - The name of the configuration.
     * @param {string} [params.description] - The description of the configuration, if available.
     * @param {Conversions} [params.conversions] - The document conversion settings for the configuration.
     * @param {Enrichment[]} [params.enrichments] - An array of document enrichment settings for the configuration.
     * @param {NormalizationOperation[]} [params.normalizations] - Defines operations that can be used to transform the
     * final output JSON into a normalized form. Operations are executed in the order that they appear in the array.
     * @param {Source} [params.source] - Object containing source parameters for the configuration.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateConfiguration(params: DiscoveryV1.UpdateConfigurationParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Configuration>): NodeJS.ReadableStream | void;
    /*************************
     * testYourConfigurationOnADocument
     ************************/
    /**
     * Test configuration.
     *
     * Runs a sample document through the default or your configuration and returns diagnostic information designed to
     * help you understand how the document was processed. The document is not added to the index.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} [params.configuration] - The configuration to use to process the document. If this part is
     * provided, then the provided configuration is used to process the document. If the **configuration_id** is also
     * provided (both are present at the same time), then request is rejected. The maximum supported configuration size is
     * 1 MB. Configuration parts larger than 1 MB are rejected.
     * See the `GET /configurations/{configuration_id}` operation for an example configuration.
     * @param {string} [params.step] - Specify to only run the input document through the given step instead of running
     * the input document through the entire ingestion workflow. Valid values are `convert`, `enrich`, and `normalize`.
     * @param {string} [params.configuration_id] - The ID of the configuration to use to process the document. If the
     * **configuration** form part is also provided (both are present at the same time), then the request will be
     * rejected.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.file] - The content of the document to ingest. The maximum
     * supported file size is 50 megabytes. Files larger than 50 megabytes is rejected.
     * @param {string} [params.metadata] - If you're using the Data Crawler to upload your documents, you can test a
     * document against the type of metadata that the Data Crawler might send. The maximum supported metadata file size is
     * 1 MB. Metadata parts larger than 1 MB are rejected.
     * Example:  ``` {
     *   "Creator": "Johnny Appleseed",
     *   "Subject": "Apples"
     * } ```.
     * @param {string} [params.file_content_type] - The content type of file.
     * @param {string} [params.filename] - The filename for file.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    testConfigurationInEnvironment(params: DiscoveryV1.TestConfigurationInEnvironmentParams, callback?: DiscoveryV1.Callback<DiscoveryV1.TestDocument>): NodeJS.ReadableStream | void;
    /*************************
     * collections
     ************************/
    /**
     * Create a collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.name - The name of the collection to be created.
     * @param {string} [params.description] - A description of the collection.
     * @param {string} [params.configuration_id] - The ID of the configuration in which the collection is to be created.
     * @param {string} [params.language] - The language of the documents stored in the collection, in the form of an ISO
     * 639-1 language code.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createCollection(params: DiscoveryV1.CreateCollectionParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Collection>): NodeJS.ReadableStream | void;
    /**
     * Delete a collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteCollection(params: DiscoveryV1.DeleteCollectionParams, callback?: DiscoveryV1.Callback<DiscoveryV1.DeleteCollectionResponse>): NodeJS.ReadableStream | void;
    /**
     * Get collection details.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getCollection(params: DiscoveryV1.GetCollectionParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Collection>): NodeJS.ReadableStream | void;
    /**
     * List collection fields.
     *
     * Gets a list of the unique fields (and their types) stored in the index.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listCollectionFields(params: DiscoveryV1.ListCollectionFieldsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.ListCollectionFieldsResponse>): NodeJS.ReadableStream | void;
    /**
     * List collections.
     *
     * Lists existing collections for the service instance.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} [params.name] - Find collections with the given name.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listCollections(params: DiscoveryV1.ListCollectionsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.ListCollectionsResponse>): NodeJS.ReadableStream | void;
    /**
     * Update a collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.name - The name of the collection.
     * @param {string} [params.description] - A description of the collection.
     * @param {string} [params.configuration_id] - The ID of the configuration in which the collection is to be updated.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateCollection(params: DiscoveryV1.UpdateCollectionParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Collection>): NodeJS.ReadableStream | void;
    /*************************
     * expansions
     ************************/
    /**
     * Create or update expansion list.
     *
     * Create or replace the Expansion list for this collection. The maximum number of expanded terms per collection is
     * `500`.
     * The current expansion list is replaced with the uploaded content.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {Expansion[]} params.expansions - An array of query expansion definitions.
     *
     *  Each object in the **expansions** array represents a term or set of terms that will be expanded into other terms.
     * Each expansion object can be configured as bidirectional or unidirectional. Bidirectional means that all terms are
     * expanded to all other terms in the object. Unidirectional means that a set list of terms can be expanded into a
     * second list of terms.
     *
     *  To create a bi-directional expansion specify an **expanded_terms** array. When found in a query, all items in the
     * **expanded_terms** array are then expanded to the other items in the same array.
     *
     *  To create a uni-directional expansion, specify both an array of **input_terms** and an array of
     * **expanded_terms**. When items in the **input_terms** array are present in a query, they are expanded using the
     * items listed in the **expanded_terms** array.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createExpansions(params: DiscoveryV1.CreateExpansionsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Expansions>): NodeJS.ReadableStream | void;
    /**
     * Delete the expansion list.
     *
     * Remove the expansion information for this collection. The expansion list must be deleted to disable query expansion
     * for a collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteExpansions(params: DiscoveryV1.DeleteExpansionsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Empty>): NodeJS.ReadableStream | void;
    /**
     * Get the expansion list.
     *
     * Returns the current expansion list for the specified collection. If an expansion list is not specified, an object
     * with empty expansion arrays is returned.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listExpansions(params: DiscoveryV1.ListExpansionsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Expansions>): NodeJS.ReadableStream | void;
    /*************************
     * documents
     ************************/
    /**
     * Add a document.
     *
     * Add a document to a collection with optional metadata.
     *
     *   * The **version** query parameter is still required.
     *
     *   * Returns immediately after the system has accepted the document for processing.
     *
     *   * The user must provide document content, metadata, or both. If the request is missing both document content and
     * metadata, it is rejected.
     *
     *   * The user can set the **Content-Type** parameter on the **file** part to indicate the media type of the
     * document. If the **Content-Type** parameter is missing or is one of the generic media types (for example,
     * `application/octet-stream`), then the service attempts to automatically detect the document's media type.
     *
     *   * The following field names are reserved and will be filtered out if present after normalization: `id`, `score`,
     * `highlight`, and any field with the prefix of: `_`, `+`, or `-`
     *
     *   * Fields with empty name values after normalization are filtered out before indexing.
     *
     *   * Fields containing the following characters after normalization are filtered out before indexing: `#` and `,`.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.file] - The content of the document to ingest. The maximum
     * supported file size is 50 megabytes. Files larger than 50 megabytes is rejected.
     * @param {string} [params.metadata] - If you're using the Data Crawler to upload your documents, you can test a
     * document against the type of metadata that the Data Crawler might send. The maximum supported metadata file size is
     * 1 MB. Metadata parts larger than 1 MB are rejected.
     * Example:  ``` {
     *   "Creator": "Johnny Appleseed",
     *   "Subject": "Apples"
     * } ```.
     * @param {string} [params.file_content_type] - The content type of file.
     * @param {string} [params.filename] - The filename for file.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    addDocument(params: DiscoveryV1.AddDocumentParams, callback?: DiscoveryV1.Callback<DiscoveryV1.DocumentAccepted>): NodeJS.ReadableStream | void;
    /**
     * Delete a document.
     *
     * If the given document ID is invalid, or if the document is not found, then the a success response is returned (HTTP
     * status code `200`) with the status set to 'deleted'.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.document_id - The ID of the document.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteDocument(params: DiscoveryV1.DeleteDocumentParams, callback?: DiscoveryV1.Callback<DiscoveryV1.DeleteDocumentResponse>): NodeJS.ReadableStream | void;
    /**
     * Get document details.
     *
     * Fetch status details about a submitted document. **Note:** this operation does not return the document itself.
     * Instead, it returns only the document's processing status and any notices (warnings or errors) that were generated
     * when the document was ingested. Use the query API to retrieve the actual document content.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.document_id - The ID of the document.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getDocumentStatus(params: DiscoveryV1.GetDocumentStatusParams, callback?: DiscoveryV1.Callback<DiscoveryV1.DocumentStatus>): NodeJS.ReadableStream | void;
    /**
     * Update a document.
     *
     * Replace an existing document. Starts ingesting a document with optional metadata.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.document_id - The ID of the document.
     * @param {NodeJS.ReadableStream|FileObject|Buffer} [params.file] - The content of the document to ingest. The maximum
     * supported file size is 50 megabytes. Files larger than 50 megabytes is rejected.
     * @param {string} [params.metadata] - If you're using the Data Crawler to upload your documents, you can test a
     * document against the type of metadata that the Data Crawler might send. The maximum supported metadata file size is
     * 1 MB. Metadata parts larger than 1 MB are rejected.
     * Example:  ``` {
     *   "Creator": "Johnny Appleseed",
     *   "Subject": "Apples"
     * } ```.
     * @param {string} [params.file_content_type] - The content type of file.
     * @param {string} [params.filename] - The filename for file.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateDocument(params: DiscoveryV1.UpdateDocumentParams, callback?: DiscoveryV1.Callback<DiscoveryV1.DocumentAccepted>): NodeJS.ReadableStream | void;
    /*************************
     * queries
     ************************/
    /**
     * Query documents in multiple collections.
     *
     * See the [Discovery service documentation](https://console.bluemix.net/docs/services/discovery/using.html) for more
     * details.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string[]} params.collection_ids - A comma-separated list of collection IDs to be queried against.
     * @param {string} [params.filter] - A cacheable query that limits the documents returned to exclude any documents
     * that don't mention the query content. Filter searches are better for metadata type searches and when you are trying
     * to get a sense of concepts in the data set.
     * @param {string} [params.query] - A query search returns all documents in your data set with full enrichments and
     * full text, but with the most relevant documents listed first. Use a query search when you want to find the most
     * relevant search results. You cannot use **natural_language_query** and **query** at the same time.
     * @param {string} [params.natural_language_query] - A natural language query that returns relevant documents by
     * utilizing training data and natural language understanding. You cannot use **natural_language_query** and **query**
     * at the same time.
     * @param {string} [params.aggregation] - An aggregation search uses combinations of filters and query search to
     * return an exact answer. Aggregations are useful for building applications, because you can use them to build lists,
     * tables, and time series. For a full list of possible aggregrations, see the Query reference.
     * @param {number} [params.count] - Number of results to return.
     * @param {string[]} [params.return_fields] - A comma separated list of the portion of the document hierarchy to
     * return.
     * @param {number} [params.offset] - The number of query results to skip at the beginning. For example, if the total
     * number of results that are returned is 10, and the offset is 8, it returns the last two results.
     * @param {string[]} [params.sort] - A comma separated list of fields in the document to sort on. You can optionally
     * specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the
     * default sort direction if no prefix is specified.
     * @param {boolean} [params.highlight] - When true a highlight field is returned for each result which contains the
     * fields that match the query with `<em></em>` tags around the matching query terms. Defaults to false.
     * @param {boolean} [params.deduplicate] - When `true` and used with a Watson Discovery News collection, duplicate
     * results (based on the contents of the **title** field) are removed. Duplicate comparison is limited to the current
     * query only; **offset** is not considered. This parameter is currently Beta functionality.
     * @param {string} [params.deduplicate_field] - When specified, duplicate results based on the field specified are
     * removed from the returned results. Duplicate comparison is limited to the current query only, **offset** is not
     * considered. This parameter is currently Beta functionality.
     * @param {boolean} [params.similar] - When `true`, results are returned based on their similarity to the document IDs
     * specified in the **similar.document_ids** parameter.
     * @param {string[]} [params.similar_document_ids] - A comma-separated list of document IDs that will be used to find
     * similar documents.
     *
     * **Note:** If the **natural_language_query** parameter is also specified, it will be used to expand the scope of the
     * document similarity search to include the natural language query. Other query parameters, such as **filter** and
     * **query** are subsequently applied and reduce the query scope.
     * @param {string[]} [params.similar_fields] - A comma-separated list of field names that will be used as a basis for
     * comparison to identify similar documents. If not specified, the entire document is used for comparison.
     * @param {boolean} [params.passages] - A passages query that returns the most relevant passages from the results.
     * @param {string[]} [params.passages_fields] - A comma-separated list of fields that passages are drawn from. If this
     * parameter not specified, then all top-level fields are included.
     * @param {number} [params.passages_count] - The maximum number of passages to return. The search returns fewer
     * passages if the requested total is not found. The default is `10`. The maximum is `100`.
     * @param {number} [params.passages_characters] - The approximate number of characters that any one passage will have.
     * The default is `400`. The minimum is `50`. The maximum is `2000`.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    federatedQuery(params: DiscoveryV1.FederatedQueryParams, callback?: DiscoveryV1.Callback<DiscoveryV1.QueryResponse>): NodeJS.ReadableStream | void;
    /**
     * Query multiple collection system notices.
     *
     * Queries for notices (errors or warnings) that might have been generated by the system. Notices are generated when
     * ingesting documents and performing relevance training. See the [Discovery service
     * documentation](https://console.bluemix.net/docs/services/discovery/using.html) for more details on the query
     * language.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string[]} params.collection_ids - A comma-separated list of collection IDs to be queried against.
     * @param {string} [params.filter] - A cacheable query that limits the documents returned to exclude any documents
     * that don't mention the query content. Filter searches are better for metadata type searches and when you are trying
     * to get a sense of concepts in the data set.
     * @param {string} [params.query] - A query search returns all documents in your data set with full enrichments and
     * full text, but with the most relevant documents listed first. Use a query search when you want to find the most
     * relevant search results. You cannot use **natural_language_query** and **query** at the same time.
     * @param {string} [params.natural_language_query] - A natural language query that returns relevant documents by
     * utilizing training data and natural language understanding. You cannot use **natural_language_query** and **query**
     * at the same time.
     * @param {string} [params.aggregation] - An aggregation search uses combinations of filters and query search to
     * return an exact answer. Aggregations are useful for building applications, because you can use them to build lists,
     * tables, and time series. For a full list of possible aggregrations, see the Query reference.
     * @param {number} [params.count] - Number of results to return.
     * @param {string[]} [params.return_fields] - A comma separated list of the portion of the document hierarchy to
     * return.
     * @param {number} [params.offset] - The number of query results to skip at the beginning. For example, if the total
     * number of results that are returned is 10, and the offset is 8, it returns the last two results.
     * @param {string[]} [params.sort] - A comma separated list of fields in the document to sort on. You can optionally
     * specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the
     * default sort direction if no prefix is specified.
     * @param {boolean} [params.highlight] - When true a highlight field is returned for each result which contains the
     * fields that match the query with `<em></em>` tags around the matching query terms. Defaults to false.
     * @param {string} [params.deduplicate_field] - When specified, duplicate results based on the field specified are
     * removed from the returned results. Duplicate comparison is limited to the current query only, **offset** is not
     * considered. This parameter is currently Beta functionality.
     * @param {boolean} [params.similar] - When `true`, results are returned based on their similarity to the document IDs
     * specified in the **similar.document_ids** parameter.
     * @param {string[]} [params.similar_document_ids] - A comma-separated list of document IDs that will be used to find
     * similar documents.
     *
     * **Note:** If the **natural_language_query** parameter is also specified, it will be used to expand the scope of the
     * document similarity search to include the natural language query. Other query parameters, such as **filter** and
     * **query** are subsequently applied and reduce the query scope.
     * @param {string[]} [params.similar_fields] - A comma-separated list of field names that will be used as a basis for
     * comparison to identify similar documents. If not specified, the entire document is used for comparison.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    federatedQueryNotices(params: DiscoveryV1.FederatedQueryNoticesParams, callback?: DiscoveryV1.Callback<DiscoveryV1.QueryNoticesResponse>): NodeJS.ReadableStream | void;
    /**
     * Query your collection.
     *
     * After your content is uploaded and enriched by the Discovery service, you can build queries to search your content.
     * For details, see the [Discovery service
     * documentation](https://console.bluemix.net/docs/services/discovery/using.html).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} [params.filter] - A cacheable query that limits the documents returned to exclude any documents
     * that don't mention the query content. Filter searches are better for metadata type searches and when you are trying
     * to get a sense of concepts in the data set.
     * @param {string} [params.query] - A query search returns all documents in your data set with full enrichments and
     * full text, but with the most relevant documents listed first. Use a query search when you want to find the most
     * relevant search results. You cannot use **natural_language_query** and **query** at the same time.
     * @param {string} [params.natural_language_query] - A natural language query that returns relevant documents by
     * utilizing training data and natural language understanding. You cannot use **natural_language_query** and **query**
     * at the same time.
     * @param {boolean} [params.passages] - A passages query that returns the most relevant passages from the results.
     * @param {string} [params.aggregation] - An aggregation search uses combinations of filters and query search to
     * return an exact answer. Aggregations are useful for building applications, because you can use them to build lists,
     * tables, and time series. For a full list of possible aggregrations, see the Query reference.
     * @param {number} [params.count] - Number of results to return.
     * @param {string[]} [params.return_fields] - A comma separated list of the portion of the document hierarchy to
     * return.
     * @param {number} [params.offset] - The number of query results to skip at the beginning. For example, if the total
     * number of results that are returned is 10, and the offset is 8, it returns the last two results.
     * @param {string[]} [params.sort] - A comma separated list of fields in the document to sort on. You can optionally
     * specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the
     * default sort direction if no prefix is specified.
     * @param {boolean} [params.highlight] - When true a highlight field is returned for each result which contains the
     * fields that match the query with `<em></em>` tags around the matching query terms. Defaults to false.
     * @param {string[]} [params.passages_fields] - A comma-separated list of fields that passages are drawn from. If this
     * parameter not specified, then all top-level fields are included.
     * @param {number} [params.passages_count] - The maximum number of passages to return. The search returns fewer
     * passages if the requested total is not found. The default is `10`. The maximum is `100`.
     * @param {number} [params.passages_characters] - The approximate number of characters that any one passage will have.
     * The default is `400`. The minimum is `50`. The maximum is `2000`.
     * @param {boolean} [params.deduplicate] - When `true` and used with a Watson Discovery News collection, duplicate
     * results (based on the contents of the **title** field) are removed. Duplicate comparison is limited to the current
     * query only; **offset** is not considered. This parameter is currently Beta functionality.
     * @param {string} [params.deduplicate_field] - When specified, duplicate results based on the field specified are
     * removed from the returned results. Duplicate comparison is limited to the current query only, **offset** is not
     * considered. This parameter is currently Beta functionality.
     * @param {boolean} [params.similar] - When `true`, results are returned based on their similarity to the document IDs
     * specified in the **similar.document_ids** parameter.
     * @param {string[]} [params.similar_document_ids] - A comma-separated list of document IDs that will be used to find
     * similar documents.
     *
     * **Note:** If the **natural_language_query** parameter is also specified, it will be used to expand the scope of the
     * document similarity search to include the natural language query. Other query parameters, such as **filter** and
     * **query** are subsequently applied and reduce the query scope.
     * @param {string[]} [params.similar_fields] - A comma-separated list of field names that will be used as a basis for
     * comparison to identify similar documents. If not specified, the entire document is used for comparison.
     * @param {boolean} [params.logging_opt_out] - If `true`, queries are not stored in the Discovery **Logs** endpoint.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    query(params: DiscoveryV1.QueryParams, callback?: DiscoveryV1.Callback<DiscoveryV1.QueryResponse>): NodeJS.ReadableStream | void;
    /**
     * Knowledge Graph entity query.
     *
     * See the [Knowledge Graph documentation](https://console.bluemix.net/docs/services/discovery/building-kg.html) for
     * more details.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} [params.feature] - The entity query feature to perform. Supported features are `disambiguate` and
     * `similar_entities`.
     * @param {QueryEntitiesEntity} [params.entity] - A text string that appears within the entity text field.
     * @param {QueryEntitiesContext} [params.context] - Entity text to provide context for the queried entity and rank
     * based on that association. For example, if you wanted to query the city of London in England your query would look
     * for `London` with the context of `England`.
     * @param {number} [params.count] - The number of results to return. The default is `10`. The maximum is `1000`.
     * @param {number} [params.evidence_count] - The number of evidence items to return for each result. The default is
     * `0`. The maximum number of evidence items per query is 10,000.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    queryEntities(params: DiscoveryV1.QueryEntitiesParams, callback?: DiscoveryV1.Callback<DiscoveryV1.QueryEntitiesResponse>): NodeJS.ReadableStream | void;
    /**
     * Query system notices.
     *
     * Queries for notices (errors or warnings) that might have been generated by the system. Notices are generated when
     * ingesting documents and performing relevance training. See the [Discovery service
     * documentation](https://console.bluemix.net/docs/services/discovery/using.html) for more details on the query
     * language.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} [params.filter] - A cacheable query that limits the documents returned to exclude any documents
     * that don't mention the query content. Filter searches are better for metadata type searches and when you are trying
     * to get a sense of concepts in the data set.
     * @param {string} [params.query] - A query search returns all documents in your data set with full enrichments and
     * full text, but with the most relevant documents listed first. Use a query search when you want to find the most
     * relevant search results. You cannot use **natural_language_query** and **query** at the same time.
     * @param {string} [params.natural_language_query] - A natural language query that returns relevant documents by
     * utilizing training data and natural language understanding. You cannot use **natural_language_query** and **query**
     * at the same time.
     * @param {boolean} [params.passages] - A passages query that returns the most relevant passages from the results.
     * @param {string} [params.aggregation] - An aggregation search uses combinations of filters and query search to
     * return an exact answer. Aggregations are useful for building applications, because you can use them to build lists,
     * tables, and time series. For a full list of possible aggregrations, see the Query reference.
     * @param {number} [params.count] - Number of results to return.
     * @param {string[]} [params.return_fields] - A comma separated list of the portion of the document hierarchy to
     * return.
     * @param {number} [params.offset] - The number of query results to skip at the beginning. For example, if the total
     * number of results that are returned is 10, and the offset is 8, it returns the last two results.
     * @param {string[]} [params.sort] - A comma separated list of fields in the document to sort on. You can optionally
     * specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the
     * default sort direction if no prefix is specified.
     * @param {boolean} [params.highlight] - When true a highlight field is returned for each result which contains the
     * fields that match the query with `<em></em>` tags around the matching query terms. Defaults to false.
     * @param {string[]} [params.passages_fields] - A comma-separated list of fields that passages are drawn from. If this
     * parameter not specified, then all top-level fields are included.
     * @param {number} [params.passages_count] - The maximum number of passages to return. The search returns fewer
     * passages if the requested total is not found. The default is `10`. The maximum is `100`.
     * @param {number} [params.passages_characters] - The approximate number of characters that any one passage will have.
     * The default is `400`. The minimum is `50`. The maximum is `2000`.
     * @param {string} [params.deduplicate_field] - When specified, duplicate results based on the field specified are
     * removed from the returned results. Duplicate comparison is limited to the current query only, **offset** is not
     * considered. This parameter is currently Beta functionality.
     * @param {boolean} [params.similar] - When `true`, results are returned based on their similarity to the document IDs
     * specified in the **similar.document_ids** parameter.
     * @param {string[]} [params.similar_document_ids] - A comma-separated list of document IDs that will be used to find
     * similar documents.
     *
     * **Note:** If the **natural_language_query** parameter is also specified, it will be used to expand the scope of the
     * document similarity search to include the natural language query. Other query parameters, such as **filter** and
     * **query** are subsequently applied and reduce the query scope.
     * @param {string[]} [params.similar_fields] - A comma-separated list of field names that will be used as a basis for
     * comparison to identify similar documents. If not specified, the entire document is used for comparison.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    queryNotices(params: DiscoveryV1.QueryNoticesParams, callback?: DiscoveryV1.Callback<DiscoveryV1.QueryNoticesResponse>): NodeJS.ReadableStream | void;
    /**
     * Knowledge Graph relationship query.
     *
     * See the [Knowledge Graph documentation](https://console.bluemix.net/docs/services/discovery/building-kg.html) for
     * more details.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {QueryRelationsEntity[]} [params.entities] - An array of entities to find relationships for.
     * @param {QueryEntitiesContext} [params.context] - Entity text to provide context for the queried entity and rank
     * based on that association. For example, if you wanted to query the city of London in England your query would look
     * for `London` with the context of `England`.
     * @param {string} [params.sort] - The sorting method for the relationships, can be `score` or `frequency`.
     * `frequency` is the number of unique times each entity is identified. The default is `score`.
     * @param {QueryRelationsFilter} [params.filter] - Filters to apply to the relationship query.
     * @param {number} [params.count] - The number of results to return. The default is `10`. The maximum is `1000`.
     * @param {number} [params.evidence_count] - The number of evidence items to return for each result. The default is
     * `0`. The maximum number of evidence items per query is 10,000.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    queryRelations(params: DiscoveryV1.QueryRelationsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.QueryRelationsResponse>): NodeJS.ReadableStream | void;
    /*************************
     * trainingData
     ************************/
    /**
     * Add query to training data.
     *
     * Adds a query to the training data for this collection. The query can contain a filter and natural language query.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} [params.natural_language_query] -
     * @param {string} [params.filter] -
     * @param {TrainingExample[]} [params.examples] -
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    addTrainingData(params: DiscoveryV1.AddTrainingDataParams, callback?: DiscoveryV1.Callback<DiscoveryV1.TrainingQuery>): NodeJS.ReadableStream | void;
    /**
     * Add example to training data query.
     *
     * Adds a example to this training data query.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {string} [params.document_id] -
     * @param {string} [params.cross_reference] -
     * @param {number} [params.relevance] -
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createTrainingExample(params: DiscoveryV1.CreateTrainingExampleParams, callback?: DiscoveryV1.Callback<DiscoveryV1.TrainingExample>): NodeJS.ReadableStream | void;
    /**
     * Delete all training data.
     *
     * Deletes all training data from a collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteAllTrainingData(params: DiscoveryV1.DeleteAllTrainingDataParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Empty>): NodeJS.ReadableStream | void;
    /**
     * Delete a training data query.
     *
     * Removes the training data query and all associated examples from the training data set.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteTrainingData(params: DiscoveryV1.DeleteTrainingDataParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Empty>): NodeJS.ReadableStream | void;
    /**
     * Delete example for training data query.
     *
     * Deletes the example document with the given ID from the training data query.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {string} params.example_id - The ID of the document as it is indexed.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteTrainingExample(params: DiscoveryV1.DeleteTrainingExampleParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Empty>): NodeJS.ReadableStream | void;
    /**
     * Get details about a query.
     *
     * Gets details for a specific training data query, including the query string and all examples.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getTrainingData(params: DiscoveryV1.GetTrainingDataParams, callback?: DiscoveryV1.Callback<DiscoveryV1.TrainingQuery>): NodeJS.ReadableStream | void;
    /**
     * Get details for training data example.
     *
     * Gets the details for this training example.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {string} params.example_id - The ID of the document as it is indexed.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getTrainingExample(params: DiscoveryV1.GetTrainingExampleParams, callback?: DiscoveryV1.Callback<DiscoveryV1.TrainingExample>): NodeJS.ReadableStream | void;
    /**
     * List training data.
     *
     * Lists the training data for the specified collection.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listTrainingData(params: DiscoveryV1.ListTrainingDataParams, callback?: DiscoveryV1.Callback<DiscoveryV1.TrainingDataSet>): NodeJS.ReadableStream | void;
    /**
     * List examples for a training data query.
     *
     * List all examples for this training data query.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listTrainingExamples(params: DiscoveryV1.ListTrainingExamplesParams, callback?: DiscoveryV1.Callback<DiscoveryV1.TrainingExampleList>): NodeJS.ReadableStream | void;
    /**
     * Change label or cross reference for example.
     *
     * Changes the label or cross reference query for this training data example.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.collection_id - The ID of the collection.
     * @param {string} params.query_id - The ID of the query used for training.
     * @param {string} params.example_id - The ID of the document as it is indexed.
     * @param {string} [params.cross_reference] -
     * @param {number} [params.relevance] -
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateTrainingExample(params: DiscoveryV1.UpdateTrainingExampleParams, callback?: DiscoveryV1.Callback<DiscoveryV1.TrainingExample>): NodeJS.ReadableStream | void;
    /*************************
     * userData
     ************************/
    /**
     * Delete labeled data.
     *
     * Deletes all data associated with a specified customer ID. The method has no effect if no data is associated with
     * the customer ID.
     *
     * You associate a customer ID with data by passing the **X-Watson-Metadata** header with a request that passes data.
     * For more information about personal data and customer IDs, see [Information
     * security](https://console.bluemix.net/docs/services/discovery/information-security.html).
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.customer_id - The customer ID for which all data is to be deleted.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteUserData(params: DiscoveryV1.DeleteUserDataParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Empty>): NodeJS.ReadableStream | void;
    /*************************
     * eventsAndFeedback
     ************************/
    /**
     * Create event.
     *
     * The **Events** API can be used to create log entries that are associated with specific queries. For example, you
     * can record which documents in the results set were \"clicked\" by a user and when that click occured.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.type - The event type to be created.
     * @param {EventData} params.data - Data object used to create a query event.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createEvent(params: DiscoveryV1.CreateEventParams, callback?: DiscoveryV1.Callback<DiscoveryV1.CreateEventResponse>): NodeJS.ReadableStream | void;
    /**
     * Percentage of queries with an associated event.
     *
     * The percentage of queries using the **natural_language_query** parameter that have a corresponding \"click\" event
     * over a specified time window.  This metric requires having integrated event tracking in your application using the
     * **Events** API.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.start_time] - Metric is computed from data recorded after this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.end_time] - Metric is computed from data recorded before this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.result_type] - The type of result to consider when calculating the metric.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getMetricsEventRate(params?: DiscoveryV1.GetMetricsEventRateParams, callback?: DiscoveryV1.Callback<DiscoveryV1.MetricResponse>): NodeJS.ReadableStream | void;
    /**
     * Number of queries over time.
     *
     * Total number of queries using the **natural_language_query** parameter over a specific time window.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.start_time] - Metric is computed from data recorded after this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.end_time] - Metric is computed from data recorded before this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.result_type] - The type of result to consider when calculating the metric.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getMetricsQuery(params?: DiscoveryV1.GetMetricsQueryParams, callback?: DiscoveryV1.Callback<DiscoveryV1.MetricResponse>): NodeJS.ReadableStream | void;
    /**
     * Number of queries with an event over time.
     *
     * Total number of queries using the **natural_language_query** parameter that have a corresponding \"click\" event
     * over a specified time window. This metric requires having integrated event tracking in your application using the
     * **Events** API.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.start_time] - Metric is computed from data recorded after this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.end_time] - Metric is computed from data recorded before this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.result_type] - The type of result to consider when calculating the metric.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getMetricsQueryEvent(params?: DiscoveryV1.GetMetricsQueryEventParams, callback?: DiscoveryV1.Callback<DiscoveryV1.MetricResponse>): NodeJS.ReadableStream | void;
    /**
     * Number of queries with no search results over time.
     *
     * Total number of queries using the **natural_language_query** parameter that have no results returned over a
     * specified time window.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.start_time] - Metric is computed from data recorded after this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.end_time] - Metric is computed from data recorded before this timestamp; must be in
     * `YYYY-MM-DDThh:mm:ssZ` format.
     * @param {string} [params.result_type] - The type of result to consider when calculating the metric.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getMetricsQueryNoResults(params?: DiscoveryV1.GetMetricsQueryNoResultsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.MetricResponse>): NodeJS.ReadableStream | void;
    /**
     * Most frequent query tokens with an event.
     *
     * The most frequent query tokens parsed from the **natural_language_query** parameter and their corresponding
     * \"click\" event rate within the recording period (queries and events are stored for 30 days). A query token is an
     * individual word or unigram within the query string.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {number} [params.count] - Number of results to return.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getMetricsQueryTokenEvent(params?: DiscoveryV1.GetMetricsQueryTokenEventParams, callback?: DiscoveryV1.Callback<DiscoveryV1.MetricTokenResponse>): NodeJS.ReadableStream | void;
    /**
     * Search the query and event log.
     *
     * Searches the query and event log to find query sessions that match the specified criteria. Searching the **logs**
     * endpoint uses the standard Discovery query syntax for the parameters that are supported.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.filter] - A cacheable query that limits the documents returned to exclude any documents
     * that don't mention the query content. Filter searches are better for metadata type searches and when you are trying
     * to get a sense of concepts in the data set.
     * @param {string} [params.query] - A query search returns all documents in your data set with full enrichments and
     * full text, but with the most relevant documents listed first. Use a query search when you want to find the most
     * relevant search results. You cannot use **natural_language_query** and **query** at the same time.
     * @param {number} [params.count] - Number of results to return.
     * @param {number} [params.offset] - The number of query results to skip at the beginning. For example, if the total
     * number of results that are returned is 10, and the offset is 8, it returns the last two results.
     * @param {string[]} [params.sort] - A comma separated list of fields in the document to sort on. You can optionally
     * specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the
     * default sort direction if no prefix is specified.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    queryLog(params?: DiscoveryV1.QueryLogParams, callback?: DiscoveryV1.Callback<DiscoveryV1.LogQueryResponse>): NodeJS.ReadableStream | void;
    /*************************
     * credentials
     ************************/
    /**
     * Create credentials.
     *
     * Creates a set of credentials to connect to a remote source. Created credentials are used in a configuration to
     * associate a collection with the remote source.
     *
     * **Note:** All credentials are sent over an encrypted connection and encrypted at rest.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} [params.source_type] - The source that this credentials object connects to.
     * -  `box` indicates the credentials are used to connect an instance of Enterprise Box.
     * -  `salesforce` indicates the credentials are used to connect to Salesforce.
     * -  `sharepoint` indicates the credentials are used to connect to Microsoft SharePoint Online.
     * @param {CredentialDetails} [params.credential_details] - Object containing details of the stored credentials.
     *
     * Obtain credentials for your source from the administrator of the source.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    createCredentials(params: DiscoveryV1.CreateCredentialsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Credentials>): NodeJS.ReadableStream | void;
    /**
     * Delete credentials.
     *
     * Deletes a set of stored credentials from your Discovery instance.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.credential_id - The unique identifier for a set of source credentials.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    deleteCredentials(params: DiscoveryV1.DeleteCredentialsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.DeleteCredentials>): NodeJS.ReadableStream | void;
    /**
     * View Credentials.
     *
     * Returns details about the specified credentials.
     *
     *  **Note:** Secure credential information such as a password or SSH key is never returned and must be obtained from
     * the source system.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.credential_id - The unique identifier for a set of source credentials.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    getSourceCredentials(params: DiscoveryV1.GetSourceCredentialsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Credentials>): NodeJS.ReadableStream | void;
    /**
     * List credentials.
     *
     * List all the source credentials that have been created for this service instance.
     *
     *  **Note:**  All credentials are sent over an encrypted connection and encrypted at rest.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    listCredentials(params: DiscoveryV1.ListCredentialsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.CredentialsList>): NodeJS.ReadableStream | void;
    /**
     * Update credentials.
     *
     * Updates an existing set of source credentials.
     *
     * **Note:** All credentials are sent over an encrypted connection and encrypted at rest.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.environment_id - The ID of the environment.
     * @param {string} params.credential_id - The unique identifier for a set of source credentials.
     * @param {string} [params.source_type] - The source that this credentials object connects to.
     * -  `box` indicates the credentials are used to connect an instance of Enterprise Box.
     * -  `salesforce` indicates the credentials are used to connect to Salesforce.
     * -  `sharepoint` indicates the credentials are used to connect to Microsoft SharePoint Online.
     * @param {CredentialDetails} [params.credential_details] - Object containing details of the stored credentials.
     *
     * Obtain credentials for your source from the administrator of the source.
     * @param {Object} [params.headers] - Custom request headers
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {NodeJS.ReadableStream|void}
     */
    updateCredentials(params: DiscoveryV1.UpdateCredentialsParams, callback?: DiscoveryV1.Callback<DiscoveryV1.Credentials>): NodeJS.ReadableStream | void;
}
/*************************
 * interfaces
 ************************/
declare namespace DiscoveryV1 {
    /** Options for the `DiscoveryV1` constructor. */
    type Options = {
        version: string;
        url?: string;
        iam_access_token?: string;
        iam_apikey?: string;
        iam_url?: string;
        username?: string;
        password?: string;
        use_unauthenticated?: boolean;
        headers?: object;
    };
    /** The callback for a service request. */
    type Callback<T> = (error: any, body?: T, response?: RequestResponse) => void;
    /** The body of a service request that returns no response data. */
    interface Empty {
    }
    /*************************
     * request interfaces
     ************************/
    /** Parameters for the `createEnvironment` operation. */
    interface CreateEnvironmentParams {
        /** Name that identifies the environment. */
        name: string;
        /** Description of the environment. */
        description?: string;
        /** Size of the environment. */
        size?: CreateEnvironmentConstants.Size | string;
        headers?: Object;
    }
    /** Constants for the `createEnvironment` operation. */
    namespace CreateEnvironmentConstants {
        /** Size of the environment. */
        enum Size {
            XS = "XS",
            S = "S",
            MS = "MS",
            M = "M",
            ML = "ML",
            L = "L",
            XL = "XL",
            XXL = "XXL",
            XXXL = "XXXL"
        }
    }
    /** Parameters for the `deleteEnvironment` operation. */
    interface DeleteEnvironmentParams {
        /** The ID of the environment. */
        environment_id: string;
        headers?: Object;
    }
    /** Parameters for the `getEnvironment` operation. */
    interface GetEnvironmentParams {
        /** The ID of the environment. */
        environment_id: string;
        headers?: Object;
    }
    /** Parameters for the `listEnvironments` operation. */
    interface ListEnvironmentsParams {
        /** Show only the environment with the given name. */
        name?: string;
        headers?: Object;
    }
    /** Parameters for the `listFields` operation. */
    interface ListFieldsParams {
        /** The ID of the environment. */
        environment_id: string;
        /** A comma-separated list of collection IDs to be queried against. */
        collection_ids: string[];
        headers?: Object;
    }
    /** Parameters for the `updateEnvironment` operation. */
    interface UpdateEnvironmentParams {
        /** The ID of the environment. */
        environment_id: string;
        /** Name that identifies the environment. */
        name?: string;
        /** Description of the environment. */
        description?: string;
        headers?: Object;
    }
    /** Parameters for the `createConfiguration` operation. */
    interface CreateConfigurationParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The name of the configuration. */
        name: string;
        /** The description of the configuration, if available. */
        description?: string;
        /** The document conversion settings for the configuration. */
        conversions?: Conversions;
        /** An array of document enrichment settings for the configuration. */
        enrichments?: Enrichment[];
        /** Defines operations that can be used to transform the final output JSON into a normalized form. Operations are executed in the order that they appear in the array. */
        normalizations?: NormalizationOperation[];
        /** Object containing source parameters for the configuration. */
        source?: Source;
        headers?: Object;
    }
    /** Parameters for the `deleteConfiguration` operation. */
    interface DeleteConfigurationParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the configuration. */
        configuration_id: string;
        headers?: Object;
    }
    /** Parameters for the `getConfiguration` operation. */
    interface GetConfigurationParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the configuration. */
        configuration_id: string;
        headers?: Object;
    }
    /** Parameters for the `listConfigurations` operation. */
    interface ListConfigurationsParams {
        /** The ID of the environment. */
        environment_id: string;
        /** Find configurations with the given name. */
        name?: string;
        headers?: Object;
    }
    /** Parameters for the `updateConfiguration` operation. */
    interface UpdateConfigurationParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the configuration. */
        configuration_id: string;
        /** The name of the configuration. */
        name: string;
        /** The description of the configuration, if available. */
        description?: string;
        /** The document conversion settings for the configuration. */
        conversions?: Conversions;
        /** An array of document enrichment settings for the configuration. */
        enrichments?: Enrichment[];
        /** Defines operations that can be used to transform the final output JSON into a normalized form. Operations are executed in the order that they appear in the array. */
        normalizations?: NormalizationOperation[];
        /** Object containing source parameters for the configuration. */
        source?: Source;
        headers?: Object;
    }
    /** Parameters for the `testConfigurationInEnvironment` operation. */
    interface TestConfigurationInEnvironmentParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The configuration to use to process the document. If this part is provided, then the provided configuration is used to process the document. If the **configuration_id** is also provided (both are present at the same time), then request is rejected. The maximum supported configuration size is 1 MB. Configuration parts larger than 1 MB are rejected. See the `GET /configurations/{configuration_id}` operation for an example configuration. */
        configuration?: string;
        /** Specify to only run the input document through the given step instead of running the input document through the entire ingestion workflow. Valid values are `convert`, `enrich`, and `normalize`. */
        step?: TestConfigurationInEnvironmentConstants.Step | string;
        /** The ID of the configuration to use to process the document. If the **configuration** form part is also provided (both are present at the same time), then the request will be rejected. */
        configuration_id?: string;
        /** The content of the document to ingest. The maximum supported file size is 50 megabytes. Files larger than 50 megabytes is rejected. */
        file?: NodeJS.ReadableStream | FileObject | Buffer;
        /** If you're using the Data Crawler to upload your documents, you can test a document against the type of metadata that the Data Crawler might send. The maximum supported metadata file size is 1 MB. Metadata parts larger than 1 MB are rejected. Example:  ``` { "Creator": "Johnny Appleseed", "Subject": "Apples" } ```. */
        metadata?: string;
        /** The content type of file. */
        file_content_type?: TestConfigurationInEnvironmentConstants.FileContentType | string;
        /** The filename for file. */
        filename?: string;
        headers?: Object;
    }
    /** Constants for the `testConfigurationInEnvironment` operation. */
    namespace TestConfigurationInEnvironmentConstants {
        /** Specify to only run the input document through the given step instead of running the input document through the entire ingestion workflow. Valid values are `convert`, `enrich`, and `normalize`. */
        enum Step {
            HTML_INPUT = "html_input",
            HTML_OUTPUT = "html_output",
            JSON_OUTPUT = "json_output",
            JSON_NORMALIZATIONS_OUTPUT = "json_normalizations_output",
            ENRICHMENTS_OUTPUT = "enrichments_output",
            NORMALIZATIONS_OUTPUT = "normalizations_output"
        }
        /** The content type of file. */
        enum FileContentType {
            APPLICATION_JSON = "application/json",
            APPLICATION_MSWORD = "application/msword",
            APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            APPLICATION_PDF = "application/pdf",
            TEXT_HTML = "text/html",
            APPLICATION_XHTML_XML = "application/xhtml+xml"
        }
    }
    /** Parameters for the `createCollection` operation. */
    interface CreateCollectionParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The name of the collection to be created. */
        name: string;
        /** A description of the collection. */
        description?: string;
        /** The ID of the configuration in which the collection is to be created. */
        configuration_id?: string;
        /** The language of the documents stored in the collection, in the form of an ISO 639-1 language code. */
        language?: CreateCollectionConstants.Language | string;
        headers?: Object;
    }
    /** Constants for the `createCollection` operation. */
    namespace CreateCollectionConstants {
        /** The language of the documents stored in the collection, in the form of an ISO 639-1 language code. */
        enum Language {
            EN = "en",
            ES = "es",
            DE = "de",
            AR = "ar",
            FR = "fr",
            IT = "it",
            JA = "ja",
            KO = "ko",
            PT = "pt",
            NL = "nl"
        }
    }
    /** Parameters for the `deleteCollection` operation. */
    interface DeleteCollectionParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        headers?: Object;
    }
    /** Parameters for the `getCollection` operation. */
    interface GetCollectionParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        headers?: Object;
    }
    /** Parameters for the `listCollectionFields` operation. */
    interface ListCollectionFieldsParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        headers?: Object;
    }
    /** Parameters for the `listCollections` operation. */
    interface ListCollectionsParams {
        /** The ID of the environment. */
        environment_id: string;
        /** Find collections with the given name. */
        name?: string;
        headers?: Object;
    }
    /** Parameters for the `updateCollection` operation. */
    interface UpdateCollectionParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** The name of the collection. */
        name: string;
        /** A description of the collection. */
        description?: string;
        /** The ID of the configuration in which the collection is to be updated. */
        configuration_id?: string;
        headers?: Object;
    }
    /** Parameters for the `createExpansions` operation. */
    interface CreateExpansionsParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** An array of query expansion definitions. Each object in the **expansions** array represents a term or set of terms that will be expanded into other terms. Each expansion object can be configured as bidirectional or unidirectional. Bidirectional means that all terms are expanded to all other terms in the object. Unidirectional means that a set list of terms can be expanded into a second list of terms. To create a bi-directional expansion specify an **expanded_terms** array. When found in a query, all items in the **expanded_terms** array are then expanded to the other items in the same array. To create a uni-directional expansion, specify both an array of **input_terms** and an array of **expanded_terms**. When items in the **input_terms** array are present in a query, they are expanded using the items listed in the **expanded_terms** array. */
        expansions: Expansion[];
        headers?: Object;
    }
    /** Parameters for the `deleteExpansions` operation. */
    interface DeleteExpansionsParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        headers?: Object;
    }
    /** Parameters for the `listExpansions` operation. */
    interface ListExpansionsParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        headers?: Object;
    }
    /** Parameters for the `addDocument` operation. */
    interface AddDocumentParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** The content of the document to ingest. The maximum supported file size is 50 megabytes. Files larger than 50 megabytes is rejected. */
        file?: NodeJS.ReadableStream | FileObject | Buffer;
        /** If you're using the Data Crawler to upload your documents, you can test a document against the type of metadata that the Data Crawler might send. The maximum supported metadata file size is 1 MB. Metadata parts larger than 1 MB are rejected. Example:  ``` { "Creator": "Johnny Appleseed", "Subject": "Apples" } ```. */
        metadata?: string;
        /** The content type of file. */
        file_content_type?: AddDocumentConstants.FileContentType | string;
        /** The filename for file. */
        filename?: string;
        headers?: Object;
    }
    /** Constants for the `addDocument` operation. */
    namespace AddDocumentConstants {
        /** The content type of file. */
        enum FileContentType {
            APPLICATION_JSON = "application/json",
            APPLICATION_MSWORD = "application/msword",
            APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            APPLICATION_PDF = "application/pdf",
            TEXT_HTML = "text/html",
            APPLICATION_XHTML_XML = "application/xhtml+xml"
        }
    }
    /** Parameters for the `deleteDocument` operation. */
    interface DeleteDocumentParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** The ID of the document. */
        document_id: string;
        headers?: Object;
    }
    /** Parameters for the `getDocumentStatus` operation. */
    interface GetDocumentStatusParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** The ID of the document. */
        document_id: string;
        headers?: Object;
    }
    /** Parameters for the `updateDocument` operation. */
    interface UpdateDocumentParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** The ID of the document. */
        document_id: string;
        /** The content of the document to ingest. The maximum supported file size is 50 megabytes. Files larger than 50 megabytes is rejected. */
        file?: NodeJS.ReadableStream | FileObject | Buffer;
        /** If you're using the Data Crawler to upload your documents, you can test a document against the type of metadata that the Data Crawler might send. The maximum supported metadata file size is 1 MB. Metadata parts larger than 1 MB are rejected. Example:  ``` { "Creator": "Johnny Appleseed", "Subject": "Apples" } ```. */
        metadata?: string;
        /** The content type of file. */
        file_content_type?: UpdateDocumentConstants.FileContentType | string;
        /** The filename for file. */
        filename?: string;
        headers?: Object;
    }
    /** Constants for the `updateDocument` operation. */
    namespace UpdateDocumentConstants {
        /** The content type of file. */
        enum FileContentType {
            APPLICATION_JSON = "application/json",
            APPLICATION_MSWORD = "application/msword",
            APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            APPLICATION_PDF = "application/pdf",
            TEXT_HTML = "text/html",
            APPLICATION_XHTML_XML = "application/xhtml+xml"
        }
    }
    /** Parameters for the `federatedQuery` operation. */
    interface FederatedQueryParams {
        /** The ID of the environment. */
        environment_id: string;
        /** A comma-separated list of collection IDs to be queried against. */
        collection_ids: string[];
        /** A cacheable query that limits the documents returned to exclude any documents that don't mention the query content. Filter searches are better for metadata type searches and when you are trying to get a sense of concepts in the data set. */
        filter?: string;
        /** A query search returns all documents in your data set with full enrichments and full text, but with the most relevant documents listed first. Use a query search when you want to find the most relevant search results. You cannot use **natural_language_query** and **query** at the same time. */
        query?: string;
        /** A natural language query that returns relevant documents by utilizing training data and natural language understanding. You cannot use **natural_language_query** and **query** at the same time. */
        natural_language_query?: string;
        /** An aggregation search uses combinations of filters and query search to return an exact answer. Aggregations are useful for building applications, because you can use them to build lists, tables, and time series. For a full list of possible aggregrations, see the Query reference. */
        aggregation?: string;
        /** Number of results to return. */
        count?: number;
        /** A comma separated list of the portion of the document hierarchy to return. */
        return_fields?: string[];
        /** The number of query results to skip at the beginning. For example, if the total number of results that are returned is 10, and the offset is 8, it returns the last two results. */
        offset?: number;
        /** A comma separated list of fields in the document to sort on. You can optionally specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the default sort direction if no prefix is specified. */
        sort?: string[];
        /** When true a highlight field is returned for each result which contains the fields that match the query with `<em></em>` tags around the matching query terms. Defaults to false. */
        highlight?: boolean;
        /** When `true` and used with a Watson Discovery News collection, duplicate results (based on the contents of the **title** field) are removed. Duplicate comparison is limited to the current query only; **offset** is not considered. This parameter is currently Beta functionality. */
        deduplicate?: boolean;
        /** When specified, duplicate results based on the field specified are removed from the returned results. Duplicate comparison is limited to the current query only, **offset** is not considered. This parameter is currently Beta functionality. */
        deduplicate_field?: string;
        /** When `true`, results are returned based on their similarity to the document IDs specified in the **similar.document_ids** parameter. */
        similar?: boolean;
        /** A comma-separated list of document IDs that will be used to find similar documents. **Note:** If the **natural_language_query** parameter is also specified, it will be used to expand the scope of the document similarity search to include the natural language query. Other query parameters, such as **filter** and **query** are subsequently applied and reduce the query scope. */
        similar_document_ids?: string[];
        /** A comma-separated list of field names that will be used as a basis for comparison to identify similar documents. If not specified, the entire document is used for comparison. */
        similar_fields?: string[];
        /** A passages query that returns the most relevant passages from the results. */
        passages?: boolean;
        /** A comma-separated list of fields that passages are drawn from. If this parameter not specified, then all top-level fields are included. */
        passages_fields?: string[];
        /** The maximum number of passages to return. The search returns fewer passages if the requested total is not found. The default is `10`. The maximum is `100`. */
        passages_count?: number;
        /** The approximate number of characters that any one passage will have. The default is `400`. The minimum is `50`. The maximum is `2000`. */
        passages_characters?: number;
        headers?: Object;
    }
    /** Parameters for the `federatedQueryNotices` operation. */
    interface FederatedQueryNoticesParams {
        /** The ID of the environment. */
        environment_id: string;
        /** A comma-separated list of collection IDs to be queried against. */
        collection_ids: string[];
        /** A cacheable query that limits the documents returned to exclude any documents that don't mention the query content. Filter searches are better for metadata type searches and when you are trying to get a sense of concepts in the data set. */
        filter?: string;
        /** A query search returns all documents in your data set with full enrichments and full text, but with the most relevant documents listed first. Use a query search when you want to find the most relevant search results. You cannot use **natural_language_query** and **query** at the same time. */
        query?: string;
        /** A natural language query that returns relevant documents by utilizing training data and natural language understanding. You cannot use **natural_language_query** and **query** at the same time. */
        natural_language_query?: string;
        /** An aggregation search uses combinations of filters and query search to return an exact answer. Aggregations are useful for building applications, because you can use them to build lists, tables, and time series. For a full list of possible aggregrations, see the Query reference. */
        aggregation?: string;
        /** Number of results to return. */
        count?: number;
        /** A comma separated list of the portion of the document hierarchy to return. */
        return_fields?: string[];
        /** The number of query results to skip at the beginning. For example, if the total number of results that are returned is 10, and the offset is 8, it returns the last two results. */
        offset?: number;
        /** A comma separated list of fields in the document to sort on. You can optionally specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the default sort direction if no prefix is specified. */
        sort?: string[];
        /** When true a highlight field is returned for each result which contains the fields that match the query with `<em></em>` tags around the matching query terms. Defaults to false. */
        highlight?: boolean;
        /** When specified, duplicate results based on the field specified are removed from the returned results. Duplicate comparison is limited to the current query only, **offset** is not considered. This parameter is currently Beta functionality. */
        deduplicate_field?: string;
        /** When `true`, results are returned based on their similarity to the document IDs specified in the **similar.document_ids** parameter. */
        similar?: boolean;
        /** A comma-separated list of document IDs that will be used to find similar documents. **Note:** If the **natural_language_query** parameter is also specified, it will be used to expand the scope of the document similarity search to include the natural language query. Other query parameters, such as **filter** and **query** are subsequently applied and reduce the query scope. */
        similar_document_ids?: string[];
        /** A comma-separated list of field names that will be used as a basis for comparison to identify similar documents. If not specified, the entire document is used for comparison. */
        similar_fields?: string[];
        headers?: Object;
    }
    /** Parameters for the `query` operation. */
    interface QueryParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** A cacheable query that limits the documents returned to exclude any documents that don't mention the query content. Filter searches are better for metadata type searches and when you are trying to get a sense of concepts in the data set. */
        filter?: string;
        /** A query search returns all documents in your data set with full enrichments and full text, but with the most relevant documents listed first. Use a query search when you want to find the most relevant search results. You cannot use **natural_language_query** and **query** at the same time. */
        query?: string;
        /** A natural language query that returns relevant documents by utilizing training data and natural language understanding. You cannot use **natural_language_query** and **query** at the same time. */
        natural_language_query?: string;
        /** A passages query that returns the most relevant passages from the results. */
        passages?: boolean;
        /** An aggregation search uses combinations of filters and query search to return an exact answer. Aggregations are useful for building applications, because you can use them to build lists, tables, and time series. For a full list of possible aggregrations, see the Query reference. */
        aggregation?: string;
        /** Number of results to return. */
        count?: number;
        /** A comma separated list of the portion of the document hierarchy to return. */
        return_fields?: string[];
        /** The number of query results to skip at the beginning. For example, if the total number of results that are returned is 10, and the offset is 8, it returns the last two results. */
        offset?: number;
        /** A comma separated list of fields in the document to sort on. You can optionally specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the default sort direction if no prefix is specified. */
        sort?: string[];
        /** When true a highlight field is returned for each result which contains the fields that match the query with `<em></em>` tags around the matching query terms. Defaults to false. */
        highlight?: boolean;
        /** A comma-separated list of fields that passages are drawn from. If this parameter not specified, then all top-level fields are included. */
        passages_fields?: string[];
        /** The maximum number of passages to return. The search returns fewer passages if the requested total is not found. The default is `10`. The maximum is `100`. */
        passages_count?: number;
        /** The approximate number of characters that any one passage will have. The default is `400`. The minimum is `50`. The maximum is `2000`. */
        passages_characters?: number;
        /** When `true` and used with a Watson Discovery News collection, duplicate results (based on the contents of the **title** field) are removed. Duplicate comparison is limited to the current query only; **offset** is not considered. This parameter is currently Beta functionality. */
        deduplicate?: boolean;
        /** When specified, duplicate results based on the field specified are removed from the returned results. Duplicate comparison is limited to the current query only, **offset** is not considered. This parameter is currently Beta functionality. */
        deduplicate_field?: string;
        /** When `true`, results are returned based on their similarity to the document IDs specified in the **similar.document_ids** parameter. */
        similar?: boolean;
        /** A comma-separated list of document IDs that will be used to find similar documents. **Note:** If the **natural_language_query** parameter is also specified, it will be used to expand the scope of the document similarity search to include the natural language query. Other query parameters, such as **filter** and **query** are subsequently applied and reduce the query scope. */
        similar_document_ids?: string[];
        /** A comma-separated list of field names that will be used as a basis for comparison to identify similar documents. If not specified, the entire document is used for comparison. */
        similar_fields?: string[];
        /** If `true`, queries are not stored in the Discovery **Logs** endpoint. */
        logging_opt_out?: boolean;
        headers?: Object;
    }
    /** Parameters for the `queryEntities` operation. */
    interface QueryEntitiesParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** The entity query feature to perform. Supported features are `disambiguate` and `similar_entities`. */
        feature?: string;
        /** A text string that appears within the entity text field. */
        entity?: QueryEntitiesEntity;
        /** Entity text to provide context for the queried entity and rank based on that association. For example, if you wanted to query the city of London in England your query would look for `London` with the context of `England`. */
        context?: QueryEntitiesContext;
        /** The number of results to return. The default is `10`. The maximum is `1000`. */
        count?: number;
        /** The number of evidence items to return for each result. The default is `0`. The maximum number of evidence items per query is 10,000. */
        evidence_count?: number;
        headers?: Object;
    }
    /** Parameters for the `queryNotices` operation. */
    interface QueryNoticesParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** A cacheable query that limits the documents returned to exclude any documents that don't mention the query content. Filter searches are better for metadata type searches and when you are trying to get a sense of concepts in the data set. */
        filter?: string;
        /** A query search returns all documents in your data set with full enrichments and full text, but with the most relevant documents listed first. Use a query search when you want to find the most relevant search results. You cannot use **natural_language_query** and **query** at the same time. */
        query?: string;
        /** A natural language query that returns relevant documents by utilizing training data and natural language understanding. You cannot use **natural_language_query** and **query** at the same time. */
        natural_language_query?: string;
        /** A passages query that returns the most relevant passages from the results. */
        passages?: boolean;
        /** An aggregation search uses combinations of filters and query search to return an exact answer. Aggregations are useful for building applications, because you can use them to build lists, tables, and time series. For a full list of possible aggregrations, see the Query reference. */
        aggregation?: string;
        /** Number of results to return. */
        count?: number;
        /** A comma separated list of the portion of the document hierarchy to return. */
        return_fields?: string[];
        /** The number of query results to skip at the beginning. For example, if the total number of results that are returned is 10, and the offset is 8, it returns the last two results. */
        offset?: number;
        /** A comma separated list of fields in the document to sort on. You can optionally specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the default sort direction if no prefix is specified. */
        sort?: string[];
        /** When true a highlight field is returned for each result which contains the fields that match the query with `<em></em>` tags around the matching query terms. Defaults to false. */
        highlight?: boolean;
        /** A comma-separated list of fields that passages are drawn from. If this parameter not specified, then all top-level fields are included. */
        passages_fields?: string[];
        /** The maximum number of passages to return. The search returns fewer passages if the requested total is not found. The default is `10`. The maximum is `100`. */
        passages_count?: number;
        /** The approximate number of characters that any one passage will have. The default is `400`. The minimum is `50`. The maximum is `2000`. */
        passages_characters?: number;
        /** When specified, duplicate results based on the field specified are removed from the returned results. Duplicate comparison is limited to the current query only, **offset** is not considered. This parameter is currently Beta functionality. */
        deduplicate_field?: string;
        /** When `true`, results are returned based on their similarity to the document IDs specified in the **similar.document_ids** parameter. */
        similar?: boolean;
        /** A comma-separated list of document IDs that will be used to find similar documents. **Note:** If the **natural_language_query** parameter is also specified, it will be used to expand the scope of the document similarity search to include the natural language query. Other query parameters, such as **filter** and **query** are subsequently applied and reduce the query scope. */
        similar_document_ids?: string[];
        /** A comma-separated list of field names that will be used as a basis for comparison to identify similar documents. If not specified, the entire document is used for comparison. */
        similar_fields?: string[];
        headers?: Object;
    }
    /** Parameters for the `queryRelations` operation. */
    interface QueryRelationsParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** An array of entities to find relationships for. */
        entities?: QueryRelationsEntity[];
        /** Entity text to provide context for the queried entity and rank based on that association. For example, if you wanted to query the city of London in England your query would look for `London` with the context of `England`. */
        context?: QueryEntitiesContext;
        /** The sorting method for the relationships, can be `score` or `frequency`. `frequency` is the number of unique times each entity is identified. The default is `score`. */
        sort?: QueryRelationsConstants.Sort | string;
        /** Filters to apply to the relationship query. */
        filter?: QueryRelationsFilter;
        /** The number of results to return. The default is `10`. The maximum is `1000`. */
        count?: number;
        /** The number of evidence items to return for each result. The default is `0`. The maximum number of evidence items per query is 10,000. */
        evidence_count?: number;
        headers?: Object;
    }
    /** Constants for the `queryRelations` operation. */
    namespace QueryRelationsConstants {
        /** The sorting method for the relationships, can be `score` or `frequency`. `frequency` is the number of unique times each entity is identified. The default is `score`. */
        enum Sort {
            SCORE = "score",
            FREQUENCY = "frequency"
        }
    }
    /** Parameters for the `addTrainingData` operation. */
    interface AddTrainingDataParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        natural_language_query?: string;
        filter?: string;
        examples?: TrainingExample[];
        headers?: Object;
    }
    /** Parameters for the `createTrainingExample` operation. */
    interface CreateTrainingExampleParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** The ID of the query used for training. */
        query_id: string;
        document_id?: string;
        cross_reference?: string;
        relevance?: number;
        headers?: Object;
    }
    /** Parameters for the `deleteAllTrainingData` operation. */
    interface DeleteAllTrainingDataParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        headers?: Object;
    }
    /** Parameters for the `deleteTrainingData` operation. */
    interface DeleteTrainingDataParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** The ID of the query used for training. */
        query_id: string;
        headers?: Object;
    }
    /** Parameters for the `deleteTrainingExample` operation. */
    interface DeleteTrainingExampleParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** The ID of the query used for training. */
        query_id: string;
        /** The ID of the document as it is indexed. */
        example_id: string;
        headers?: Object;
    }
    /** Parameters for the `getTrainingData` operation. */
    interface GetTrainingDataParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** The ID of the query used for training. */
        query_id: string;
        headers?: Object;
    }
    /** Parameters for the `getTrainingExample` operation. */
    interface GetTrainingExampleParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** The ID of the query used for training. */
        query_id: string;
        /** The ID of the document as it is indexed. */
        example_id: string;
        headers?: Object;
    }
    /** Parameters for the `listTrainingData` operation. */
    interface ListTrainingDataParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        headers?: Object;
    }
    /** Parameters for the `listTrainingExamples` operation. */
    interface ListTrainingExamplesParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** The ID of the query used for training. */
        query_id: string;
        headers?: Object;
    }
    /** Parameters for the `updateTrainingExample` operation. */
    interface UpdateTrainingExampleParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The ID of the collection. */
        collection_id: string;
        /** The ID of the query used for training. */
        query_id: string;
        /** The ID of the document as it is indexed. */
        example_id: string;
        cross_reference?: string;
        relevance?: number;
        headers?: Object;
    }
    /** Parameters for the `deleteUserData` operation. */
    interface DeleteUserDataParams {
        /** The customer ID for which all data is to be deleted. */
        customer_id: string;
        headers?: Object;
    }
    /** Parameters for the `createEvent` operation. */
    interface CreateEventParams {
        /** The event type to be created. */
        type: CreateEventConstants.Type | string;
        /** Data object used to create a query event. */
        data: EventData;
        headers?: Object;
    }
    /** Constants for the `createEvent` operation. */
    namespace CreateEventConstants {
        /** The event type to be created. */
        enum Type {
            CLICK = "click"
        }
    }
    /** Parameters for the `getMetricsEventRate` operation. */
    interface GetMetricsEventRateParams {
        /** Metric is computed from data recorded after this timestamp; must be in `YYYY-MM-DDThh:mm:ssZ` format. */
        start_time?: string;
        /** Metric is computed from data recorded before this timestamp; must be in `YYYY-MM-DDThh:mm:ssZ` format. */
        end_time?: string;
        /** The type of result to consider when calculating the metric. */
        result_type?: GetMetricsEventRateConstants.ResultType | string;
        headers?: Object;
    }
    /** Constants for the `getMetricsEventRate` operation. */
    namespace GetMetricsEventRateConstants {
        /** The type of result to consider when calculating the metric. */
        enum ResultType {
            DOCUMENT = "document"
        }
    }
    /** Parameters for the `getMetricsQuery` operation. */
    interface GetMetricsQueryParams {
        /** Metric is computed from data recorded after this timestamp; must be in `YYYY-MM-DDThh:mm:ssZ` format. */
        start_time?: string;
        /** Metric is computed from data recorded before this timestamp; must be in `YYYY-MM-DDThh:mm:ssZ` format. */
        end_time?: string;
        /** The type of result to consider when calculating the metric. */
        result_type?: GetMetricsQueryConstants.ResultType | string;
        headers?: Object;
    }
    /** Constants for the `getMetricsQuery` operation. */
    namespace GetMetricsQueryConstants {
        /** The type of result to consider when calculating the metric. */
        enum ResultType {
            DOCUMENT = "document"
        }
    }
    /** Parameters for the `getMetricsQueryEvent` operation. */
    interface GetMetricsQueryEventParams {
        /** Metric is computed from data recorded after this timestamp; must be in `YYYY-MM-DDThh:mm:ssZ` format. */
        start_time?: string;
        /** Metric is computed from data recorded before this timestamp; must be in `YYYY-MM-DDThh:mm:ssZ` format. */
        end_time?: string;
        /** The type of result to consider when calculating the metric. */
        result_type?: GetMetricsQueryEventConstants.ResultType | string;
        headers?: Object;
    }
    /** Constants for the `getMetricsQueryEvent` operation. */
    namespace GetMetricsQueryEventConstants {
        /** The type of result to consider when calculating the metric. */
        enum ResultType {
            DOCUMENT = "document"
        }
    }
    /** Parameters for the `getMetricsQueryNoResults` operation. */
    interface GetMetricsQueryNoResultsParams {
        /** Metric is computed from data recorded after this timestamp; must be in `YYYY-MM-DDThh:mm:ssZ` format. */
        start_time?: string;
        /** Metric is computed from data recorded before this timestamp; must be in `YYYY-MM-DDThh:mm:ssZ` format. */
        end_time?: string;
        /** The type of result to consider when calculating the metric. */
        result_type?: GetMetricsQueryNoResultsConstants.ResultType | string;
        headers?: Object;
    }
    /** Constants for the `getMetricsQueryNoResults` operation. */
    namespace GetMetricsQueryNoResultsConstants {
        /** The type of result to consider when calculating the metric. */
        enum ResultType {
            DOCUMENT = "document"
        }
    }
    /** Parameters for the `getMetricsQueryTokenEvent` operation. */
    interface GetMetricsQueryTokenEventParams {
        /** Number of results to return. */
        count?: number;
        headers?: Object;
    }
    /** Parameters for the `queryLog` operation. */
    interface QueryLogParams {
        /** A cacheable query that limits the documents returned to exclude any documents that don't mention the query content. Filter searches are better for metadata type searches and when you are trying to get a sense of concepts in the data set. */
        filter?: string;
        /** A query search returns all documents in your data set with full enrichments and full text, but with the most relevant documents listed first. Use a query search when you want to find the most relevant search results. You cannot use **natural_language_query** and **query** at the same time. */
        query?: string;
        /** Number of results to return. */
        count?: number;
        /** The number of query results to skip at the beginning. For example, if the total number of results that are returned is 10, and the offset is 8, it returns the last two results. */
        offset?: number;
        /** A comma separated list of fields in the document to sort on. You can optionally specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the default sort direction if no prefix is specified. */
        sort?: string[];
        headers?: Object;
    }
    /** Parameters for the `createCredentials` operation. */
    interface CreateCredentialsParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The source that this credentials object connects to. -  `box` indicates the credentials are used to connect an instance of Enterprise Box. -  `salesforce` indicates the credentials are used to connect to Salesforce. -  `sharepoint` indicates the credentials are used to connect to Microsoft SharePoint Online. */
        source_type?: CreateCredentialsConstants.SourceType | string;
        /** Object containing details of the stored credentials. Obtain credentials for your source from the administrator of the source. */
        credential_details?: CredentialDetails;
        headers?: Object;
    }
    /** Constants for the `createCredentials` operation. */
    namespace CreateCredentialsConstants {
        /** The source that this credentials object connects to. -  `box` indicates the credentials are used to connect an instance of Enterprise Box. -  `salesforce` indicates the credentials are used to connect to Salesforce. -  `sharepoint` indicates the credentials are used to connect to Microsoft SharePoint Online. */
        enum SourceType {
            BOX = "box",
            SALESFORCE = "salesforce",
            SHAREPOINT = "sharepoint"
        }
    }
    /** Parameters for the `deleteCredentials` operation. */
    interface DeleteCredentialsParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The unique identifier for a set of source credentials. */
        credential_id: string;
        headers?: Object;
    }
    /** Parameters for the `getSourceCredentials` operation. */
    interface GetSourceCredentialsParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The unique identifier for a set of source credentials. */
        credential_id: string;
        headers?: Object;
    }
    /** Parameters for the `listCredentials` operation. */
    interface ListCredentialsParams {
        /** The ID of the environment. */
        environment_id: string;
        headers?: Object;
    }
    /** Parameters for the `updateCredentials` operation. */
    interface UpdateCredentialsParams {
        /** The ID of the environment. */
        environment_id: string;
        /** The unique identifier for a set of source credentials. */
        credential_id: string;
        /** The source that this credentials object connects to. -  `box` indicates the credentials are used to connect an instance of Enterprise Box. -  `salesforce` indicates the credentials are used to connect to Salesforce. -  `sharepoint` indicates the credentials are used to connect to Microsoft SharePoint Online. */
        source_type?: UpdateCredentialsConstants.SourceType | string;
        /** Object containing details of the stored credentials. Obtain credentials for your source from the administrator of the source. */
        credential_details?: CredentialDetails;
        headers?: Object;
    }
    /** Constants for the `updateCredentials` operation. */
    namespace UpdateCredentialsConstants {
        /** The source that this credentials object connects to. -  `box` indicates the credentials are used to connect an instance of Enterprise Box. -  `salesforce` indicates the credentials are used to connect to Salesforce. -  `sharepoint` indicates the credentials are used to connect to Microsoft SharePoint Online. */
        enum SourceType {
            BOX = "box",
            SALESFORCE = "salesforce",
            SHAREPOINT = "sharepoint"
        }
    }
    /*************************
     * model interfaces
     ************************/
    /** AggregationResult. */
    interface AggregationResult {
        /** Key that matched the aggregation type. */
        key?: string;
        /** Number of matching results. */
        matching_results?: number;
        /** Aggregations returned in the case of chained aggregations. */
        aggregations?: QueryAggregation[];
    }
    /** A collection for storing documents. */
    interface Collection {
        /** The unique identifier of the collection. */
        collection_id?: string;
        /** The name of the collection. */
        name?: string;
        /** The description of the collection. */
        description?: string;
        /** The creation date of the collection in the format yyyy-MM-dd'T'HH:mmcon:ss.SSS'Z'. */
        created?: string;
        /** The timestamp of when the collection was last updated in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z'. */
        updated?: string;
        /** The status of the collection. */
        status?: string;
        /** The unique identifier of the collection's configuration. */
        configuration_id?: string;
        /** The language of the documents stored in the collection. Permitted values include `en` (English), `de` (German), and `es` (Spanish). */
        language?: string;
        /** The object providing information about the documents in the collection. Present only when retrieving details of a collection. */
        document_counts?: DocumentCounts;
        /** The object providing information about the disk usage of the collection. Present only when retrieving details of a collection. */
        disk_usage?: CollectionDiskUsage;
        /** Provides information about the status of relevance training for collection. */
        training_status?: TrainingStatus;
        /** Object containing source crawl status information. */
        source_crawl?: SourceStatus;
    }
    /** Summary of the disk usage statistics for this collection. */
    interface CollectionDiskUsage {
        /** Number of bytes used by the collection. */
        used_bytes?: number;
    }
    /** Summary of the collection usage in the environment. */
    interface CollectionUsage {
        /** Number of active collections in the environment. */
        available?: number;
        /** Total number of collections allowed in the environment. */
        maximum_allowed?: number;
    }
    /** A custom configuration for the environment. */
    interface Configuration {
        /** The unique identifier of the configuration. */
        configuration_id?: string;
        /** The name of the configuration. */
        name: string;
        /** The creation date of the configuration in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z'. */
        created?: string;
        /** The timestamp of when the configuration was last updated in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z'. */
        updated?: string;
        /** The description of the configuration, if available. */
        description?: string;
        /** The document conversion settings for the configuration. */
        conversions?: Conversions;
        /** An array of document enrichment settings for the configuration. */
        enrichments?: Enrichment[];
        /** Defines operations that can be used to transform the final output JSON into a normalized form. Operations are executed in the order that they appear in the array. */
        normalizations?: NormalizationOperation[];
        /** Object containing source parameters for the configuration. */
        source?: Source;
    }
    /** Document conversion settings. */
    interface Conversions {
        /** A list of PDF conversion settings. */
        pdf?: PdfSettings;
        /** A list of Word conversion settings. */
        word?: WordSettings;
        /** A list of HTML conversion settings. */
        html?: HtmlSettings;
        /** A list of Document Segmentation settings. */
        segment?: SegmentSettings;
        /** Defines operations that can be used to transform the final output JSON into a normalized form. Operations are executed in the order that they appear in the array. */
        json_normalizations?: NormalizationOperation[];
    }
    /** An object defining the event being created. */
    interface CreateEventResponse {
        /** The event type that was created. */
        type?: string;
        /** Query event data object. */
        data?: EventData;
    }
    /** Object containing details of the stored credentials. Obtain credentials for your source from the administrator of the source. */
    interface CredentialDetails {
        /** The authentication method for this credentials definition. The  **credential_type** specified must be supported by the **source_type**. The following combinations are possible: -  `"source_type": "box"` - valid `credential_type`s: `oauth2` -  `"source_type": "salesforce"` - valid `credential_type`s: `username_password` -  `"source_type": "sharepoint"` - valid `credential_type`s: `saml`. */
        credential_type?: string;
        /** The **client_id** of the source that these credentials connect to. Only valid, and required, with a **credential_type** of `oauth2`. */
        client_id?: string;
        /** The **enterprise_id** of the Box site that these credentials connect to. Only valid, and required, with a **source_type** of `box`. */
        enterprise_id?: string;
        /** The **url** of the source that these credentials connect to. Only valid, and required, with a **credential_type** of `username_password`. */
        url?: string;
        /** The **username** of the source that these credentials connect to. Only valid, and required, with a **credential_type** of `saml` and `username_password`. */
        username?: string;
        /** The **organization_url** of the source that these credentials connect to. Only valid, and required, with a **credential_type** of `saml`. */
        organization_url?: string;
        /** The **site_collection.path** of the source that these credentials connect to. Only valid, and required, with a **source_type** of `sharepoint`. */
        site_collection_path?: string;
        /** The **client_secret** of the source that these credentials connect to. Only valid, and required, with a **credential_type** of `oauth2`. This value is never returned and is only used when creating or modifying **credentials**. */
        client_secret?: string;
        /** The **public_key_id** of the source that these credentials connect to. Only valid, and required, with a **credential_type** of `oauth2`. This value is never returned and is only used when creating or modifying **credentials**. */
        public_key_id?: string;
        /** The **private_key** of the source that these credentials connect to. Only valid, and required, with a **credential_type** of `oauth2`. This value is never returned and is only used when creating or modifying **credentials**. */
        private_key?: string;
        /** The **passphrase** of the source that these credentials connect to. Only valid, and required, with a **credential_type** of `oauth2`. This value is never returned and is only used when creating or modifying **credentials**. */
        passphrase?: string;
        /** The **password** of the source that these credentials connect to. Only valid, and required, with **credential_type**s of `saml` and `username_password`. **Note:** When used with a **source_type** of `salesforce`, the password consists of the Salesforce password and a valid Salesforce security token concatenated. This value is never returned and is only used when creating or modifying **credentials**. */
        password?: string;
    }
    /** Object containing credential information. */
    interface Credentials {
        /** Unique identifier for this set of credentials. */
        credential_id?: string;
        /** The source that this credentials object connects to. -  `box` indicates the credentials are used to connect an instance of Enterprise Box. -  `salesforce` indicates the credentials are used to connect to Salesforce. -  `sharepoint` indicates the credentials are used to connect to Microsoft SharePoint Online. */
        source_type?: string;
        /** Object containing details of the stored credentials. Obtain credentials for your source from the administrator of the source. */
        credential_details?: CredentialDetails;
    }
    /** CredentialsList. */
    interface CredentialsList {
        /** An array of credential definitions that were created for this instance. */
        credentials?: Credentials[];
    }
    /** DeleteCollectionResponse. */
    interface DeleteCollectionResponse {
        /** The unique identifier of the collection that is being deleted. */
        collection_id: string;
        /** The status of the collection. The status of a successful deletion operation is `deleted`. */
        status: string;
    }
    /** DeleteConfigurationResponse. */
    interface DeleteConfigurationResponse {
        /** The unique identifier for the configuration. */
        configuration_id: string;
        /** Status of the configuration. A deleted configuration has the status deleted. */
        status: string;
        /** An array of notice messages, if any. */
        notices?: Notice[];
    }
    /** Object returned after credentials are deleted. */
    interface DeleteCredentials {
        /** The unique identifier of the credentials that have been deleted. */
        credential_id?: string;
        /** The status of the deletion request. */
        status?: string;
    }
    /** DeleteDocumentResponse. */
    interface DeleteDocumentResponse {
        /** The unique identifier of the document. */
        document_id?: string;
        /** Status of the document. A deleted document has the status deleted. */
        status?: string;
    }
    /** DeleteEnvironmentResponse. */
    interface DeleteEnvironmentResponse {
        /** The unique identifier for the environment. */
        environment_id: string;
        /** Status of the environment. */
        status: string;
    }
    /** Summary of the disk usage statistics for the environment. */
    interface DiskUsage {
        /** Number of bytes within the environment's disk capacity that are currently used to store data. */
        used_bytes?: number;
        /** Total number of bytes available in the environment's disk capacity. */
        maximum_allowed_bytes?: number;
        /** **Deprecated**: Total number of bytes available in the environment's disk capacity. */
        total_bytes?: number;
        /** **Deprecated**: Amount of disk capacity used, in KB or GB format. */
        used?: string;
        /** **Deprecated**: Total amount of the environment's disk capacity, in KB or GB format. */
        total?: string;
        /** **Deprecated**: Percentage of the environment's disk capacity that is being used. */
        percent_used?: number;
    }
    /** DocumentAccepted. */
    interface DocumentAccepted {
        /** The unique identifier of the ingested document. */
        document_id?: string;
        /** Status of the document in the ingestion process. */
        status?: string;
        /** Array of notices produced by the document-ingestion process. */
        notices?: Notice[];
    }
    /** DocumentCounts. */
    interface DocumentCounts {
        /** The total number of available documents in the collection. */
        available?: number;
        /** The number of documents in the collection that are currently being processed. */
        processing?: number;
        /** The number of documents in the collection that failed to be ingested. */
        failed?: number;
    }
    /** DocumentSnapshot. */
    interface DocumentSnapshot {
        step?: string;
        snapshot?: Object;
    }
    /** Status information about a submitted document. */
    interface DocumentStatus {
        /** The unique identifier of the document. */
        document_id: string;
        /** The unique identifier for the configuration. */
        configuration_id?: string;
        /** The creation date of the document in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z'. */
        created?: string;
        /** Date of the most recent document update, in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z'. */
        updated?: string;
        /** Status of the document in the ingestion process. */
        status: string;
        /** Description of the document status. */
        status_description: string;
        /** Name of the original source file (if available). */
        filename?: string;
        /** The type of the original source file. */
        file_type?: string;
        /** The SHA-1 hash of the original source file (formatted as a hexadecimal string). */
        sha1?: string;
        /** Array of notices produced by the document-ingestion process. */
        notices: Notice[];
    }
    /** Enrichment. */
    interface Enrichment {
        /** Describes what the enrichment step does. */
        description?: string;
        /** Field where enrichments will be stored. This field must already exist or be at most 1 level deeper than an existing field. For example, if `text` is a top-level field with no sub-fields, `text.foo` is a valid destination but `text.foo.bar` is not. */
        destination_field: string;
        /** Field to be enriched. */
        source_field: string;
        /** Indicates that the enrichments will overwrite the destination_field field if it already exists. */
        overwrite?: boolean;
        /** Name of the enrichment service to call. Current options are `natural_language_understanding` and `elements`. When using `natual_language_understanding`, the **options** object must contain Natural Language Understanding options. When using `elements` the **options** object must contain Element Classification options. Additionally, when using the `elements` enrichment the configuration specified and files ingested must meet all the criteria specified in [the documentation](https://console.bluemix.net/docs/services/discovery/element-classification.html) Previous API versions also supported `alchemy_language`. */
        enrichment_name: string;
        /** If true, then most errors generated during the enrichment process will be treated as warnings and will not cause the document to fail processing. */
        ignore_downstream_errors?: boolean;
        /** A list of options specific to the enrichment. */
        options?: EnrichmentOptions;
    }
    /** Options which are specific to a particular enrichment. */
    interface EnrichmentOptions {
        /** An object representing the enrichment features that will be applied to the specified field. */
        features?: NluEnrichmentFeatures;
        /** ISO 639-1 code indicating the language to use for the analysis. This code overrides the automatic language detection performed by the service. Valid codes are `ar` (Arabic), `en` (English), `fr` (French), `de` (German), `it` (Italian), `pt` (Portuguese), `ru` (Russian), `es` (Spanish), and `sv` (Swedish). **Note:** Not all features support all languages, automatic detection is recommended. */
        language?: string;
        /** *For use with `elements` enrichments only.* The element extraction model to use. Models available are: `contract`. */
        model?: string;
    }
    /** Details about an environment. */
    interface Environment {
        /** Unique identifier for the environment. */
        environment_id?: string;
        /** Name that identifies the environment. */
        name?: string;
        /** Description of the environment. */
        description?: string;
        /** Creation date of the environment, in the format `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`. */
        created?: string;
        /** Date of most recent environment update, in the format `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`. */
        updated?: string;
        /** Status of the environment. */
        status?: string;
        /** If `true`, the environment contains read-only collections that are maintained by IBM. */
        read_only?: boolean;
        /** Size of the environment. */
        size?: string;
        /** Details about the resource usage and capacity of the environment. */
        index_capacity?: IndexCapacity;
    }
    /** Summary of the document usage statistics for the environment. */
    interface EnvironmentDocuments {
        /** Number of documents indexed for the environment. */
        indexed?: number;
        /** Total number of documents allowed in the environment's capacity. */
        maximum_allowed?: number;
    }
    /** Query event data object. */
    interface EventData {
        /** The **environment_id** associated with the query that the event is associated with. */
        environment_id: string;
        /** The session token that was returned as part of the query results that this event is associated with. */
        session_token: string;
        /** The optional timestamp for the event that was created. If not provided, the time that the event was created in the log was used. */
        client_timestamp?: string;
        /** The rank of the result item which the event is associated with. */
        display_rank?: number;
        /** The **collection_id** of the document that this event is associated with. */
        collection_id: string;
        /** The **document_id** of the document that this event is associated with. */
        document_id: string;
        /** The query identifier stored in the log. The query and any events associated with that query are stored with the same **query_id**. */
        query_id?: string;
    }
    /** An expansion definition. Each object respresents one set of expandable strings. For example, you could have expansions for the word `hot` in one object, and expansions for the word `cold` in another. */
    interface Expansion {
        /** A list of terms that will be expanded for this expansion. If specified, only the items in this list are expanded. */
        input_terms?: string[];
        /** A list of terms that this expansion will be expanded to. If specified without **input_terms**, it also functions as the input term list. */
        expanded_terms: string[];
    }
    /** The query expansion definitions for the specified collection. */
    interface Expansions {
        /** An array of query expansion definitions. Each object in the **expansions** array represents a term or set of terms that will be expanded into other terms. Each expansion object can be configured as bidirectional or unidirectional. Bidirectional means that all terms are expanded to all other terms in the object. Unidirectional means that a set list of terms can be expanded into a second list of terms. To create a bi-directional expansion specify an **expanded_terms** array. When found in a query, all items in the **expanded_terms** array are then expanded to the other items in the same array. To create a uni-directional expansion, specify both an array of **input_terms** and an array of **expanded_terms**. When items in the **input_terms** array are present in a query, they are expanded using the items listed in the **expanded_terms** array. */
        expansions: Expansion[];
    }
    /** Field. */
    interface Field {
        /** The name of the field. */
        field_name?: string;
        /** The type of the field. */
        field_type?: string;
    }
    /** FontSetting. */
    interface FontSetting {
        level?: number;
        min_size?: number;
        max_size?: number;
        bold?: boolean;
        italic?: boolean;
        name?: string;
    }
    /** A list of HTML conversion settings. */
    interface HtmlSettings {
        exclude_tags_completely?: string[];
        exclude_tags_keep_content?: string[];
        keep_content?: XPathPatterns;
        exclude_content?: XPathPatterns;
        keep_tag_attributes?: string[];
        exclude_tag_attributes?: string[];
    }
    /** Details about the resource usage and capacity of the environment. */
    interface IndexCapacity {
        /** Summary of the document usage statistics for the environment. */
        documents?: EnvironmentDocuments;
        /** Summary of the disk usage of the environment. */
        disk_usage?: DiskUsage;
        /** Summary of the collection usage in the environment. */
        collections?: CollectionUsage;
        /** **Deprecated**: Summary of the memory usage of the environment. */
        memory_usage?: MemoryUsage;
    }
    /** The list of fetched fields. The fields are returned using a fully qualified name format, however, the format differs slightly from that used by the query operations. * Fields which contain nested JSON objects are assigned a type of "nested". * Fields which belong to a nested object are prefixed with `.properties` (for example, `warnings.properties.severity` means that the `warnings` object has a property called `severity`). * Fields returned from the News collection are prefixed with `v{N}-fullnews-t3-{YEAR}.mappings` (for example, `v5-fullnews-t3-2016.mappings.text.properties.author`). */
    interface ListCollectionFieldsResponse {
        /** An array containing information about each field in the collections. */
        fields?: Field[];
    }
    /** ListCollectionsResponse. */
    interface ListCollectionsResponse {
        /** An array containing information about each collection in the environment. */
        collections?: Collection[];
    }
    /** ListConfigurationsResponse. */
    interface ListConfigurationsResponse {
        /** An array of Configurations that are available for the service instance. */
        configurations?: Configuration[];
    }
    /** ListEnvironmentsResponse. */
    interface ListEnvironmentsResponse {
        /** An array of [environments] that are available for the service instance. */
        environments?: Environment[];
    }
    /** Object containing results that match the requested **logs** query. */
    interface LogQueryResponse {
        /** Number of matching results. */
        matching_results?: number;
        results?: LogQueryResponseResult[];
    }
    /** Individual result object for a **logs** query. Each object represents either a query to a Discovery collection or an event that is associated with a query. */
    interface LogQueryResponseResult {
        /** The environment ID that is associated with this log entry. */
        environment_id?: string;
        /** The **customer_id** label that was specified in the header of the query or event API call that corresponds to this log entry. */
        customer_id?: string;
        /** The type of log entry returned. **query** indicates that the log represents the results of a call to the single collection **query** method. **event** indicates that the log represents  a call to the **events** API. */
        document_type?: string;
        /** The value of the **natural_language_query** query parameter that was used to create these results. Only returned with logs of type **query**. **Note:** Other query parameters (such as **filter** or **deduplicate**) might  have been used with this query, but are not recorded. */
        natural_language_query?: string;
        /** Object containing result information that was returned by the query used to create this log entry. Only returned with logs of type `query`. */
        document_results?: LogQueryResponseResultDocuments;
        /** Date that the log result was created. Returned in `YYYY-MM-DDThh:mm:ssZ` format. */
        created_timestamp?: string;
        /** Date specified by the user when recording an event. Returned in `YYYY-MM-DDThh:mm:ssZ` format. Only returned with logs of type **event**. */
        client_timestamp?: string;
        /** Identifier that corresponds to the **natural_language_query** string used in the original or associated query. All **event** and **query** log entries that have the same original **natural_language_query** string also have them same **query_id**. This field can be used to recall all **event** and **query** log results that have the same original query (**event** logs do not contain the original **natural_language_query** field). */
        query_id?: string;
        /** Unique identifier (within a 24-hour period) that identifies a single `query` log and any `event` logs that were created for it. **Note:** If the exact same query is run at the exact same time on different days, the **session_token** for those queries might be identical. However, the **created_timestamp** differs. **Note:** Session tokens are case sensitive. To avoid matching on session tokens that are identical except for case, use the exact match operator (`::`) when you query for a specific session token. */
        session_token?: string;
        /** The collection ID of the document associated with this event. Only returned with logs of type `event`. */
        collection_id?: string;
        /** The original display rank of the document associated with this event. Only returned with logs of type `event`. */
        display_rank?: number;
        /** The document ID of the document associated with this event. Only returned with logs of type `event`. */
        document_id?: string;
        /** The type of event that this object respresents. Possible values are -  `query` the log of a query to a collection -  `click` the result of a call to the **events** endpoint. */
        event_type?: string;
        /** The type of result that this **event** is associated with. Only returned with logs of type `event`. */
        result_type?: string;
    }
    /** Object containing result information that was returned by the query used to create this log entry. Only returned with logs of type `query`. */
    interface LogQueryResponseResultDocuments {
        results?: LogQueryResponseResultDocumentsResult[];
        /** The number of results returned in the query associate with this log. */
        count?: number;
    }
    /** Each object in the **results** array corresponds to an individual document returned by the original query. */
    interface LogQueryResponseResultDocumentsResult {
        /** The result rank of this document. A position of `1` indicates that it was the first returned result. */
        position?: number;
        /** The **document_id** of the document that this result represents. */
        document_id?: string;
        /** The raw score of this result. A higher score indicates a greater match to the query parameters. */
        score?: number;
        /** The confidence score of the result's analysis. A higher score indicating greater confidence. */
        confidence?: number;
        /** The **collection_id** of the document represented by this result. */
        collection_id?: string;
    }
    /** **Deprecated**: Summary of the memory usage statistics for this environment. */
    interface MemoryUsage {
        /** **Deprecated**: Number of bytes used in the environment's memory capacity. */
        used_bytes?: number;
        /** **Deprecated**: Total number of bytes available in the environment's memory capacity. */
        total_bytes?: number;
        /** **Deprecated**: Amount of memory capacity used, in KB or GB format. */
        used?: string;
        /** **Deprecated**: Total amount of the environment's memory capacity, in KB or GB format. */
        total?: string;
        /** **Deprecated**: Percentage of the environment's memory capacity that is being used. */
        percent_used?: number;
    }
    /** An aggregation analyzing log information for queries and events. */
    interface MetricAggregation {
        /** The measurement interval for this metric. Metric intervals are always 1 day (`1d`). */
        interval?: string;
        /** The event type associated with this metric result. This field, when present, will always be `click`. */
        event_type?: string;
        results?: MetricAggregationResult[];
    }
    /** Aggregation result data for the requested metric. */
    interface MetricAggregationResult {
        /** Date in string form representing the start of this interval. */
        key_as_string?: string;
        /** Unix epoch time equivalent of the **key_as_string**, that represents the start of this interval. */
        key?: number;
        /** Number of matching results. */
        matching_results?: number;
        /** The number of queries with associated events divided by the total number of queries for the interval. Only returned with **event_rate** metrics. */
        event_rate?: number;
    }
    /** The response generated from a call to a **metrics** method. */
    interface MetricResponse {
        aggregations?: MetricAggregation[];
    }
    /** An aggregation analyzing log information for queries and events. */
    interface MetricTokenAggregation {
        /** The event type associated with this metric result. This field, when present, will always be `click`. */
        event_type?: string;
        results?: MetricTokenAggregationResult[];
    }
    /** Aggregation result data for the requested metric. */
    interface MetricTokenAggregationResult {
        /** The content of the **natural_language_query** parameter used in the query that this result represents. */
        key?: string;
        /** Number of matching results. */
        matching_results?: number;
        /** The number of queries with associated events divided by the total number of queries currently stored (queries and events are stored in the log for 30 days). */
        event_rate?: number;
    }
    /** The response generated from a call to a **metrics** method that evaluates tokens. */
    interface MetricTokenResponse {
        aggregations?: MetricTokenAggregation[];
    }
    /** An object that indicates the Categories enrichment will be applied to the specified field. */
    interface NluEnrichmentCategories {
        /** NluEnrichmentCategories accepts additional properties. */
        [propName: string]: any;
    }
    /** An object specifying the emotion detection enrichment and related parameters. */
    interface NluEnrichmentEmotion {
        /** When `true`, emotion detection is performed on the entire field. */
        document?: boolean;
        /** A comma-separated list of target strings that will have any associated emotions detected. */
        targets?: string[];
    }
    /** An object speficying the Entities enrichment and related parameters. */
    interface NluEnrichmentEntities {
        /** When `true`, sentiment analysis of entities will be performed on the specified field. */
        sentiment?: boolean;
        /** When `true`, emotion detection of entities will be performed on the specified field. */
        emotion?: boolean;
        /** The maximum number of entities to extract for each instance of the specified field. */
        limit?: number;
        /** When `true`, the number of mentions of each identified entity is recorded. The default is `false`. */
        mentions?: boolean;
        /** When `true`, the types of mentions for each idetifieid entity is recorded. The default is `false`. */
        mention_types?: boolean;
        /** When `true`, a list of sentence locations for each instance of each identified entity is recorded. The default is `false`. */
        sentence_location?: boolean;
        /** The enrichement model to use with entity extraction. May be a custom model provided by Watson Knowledge Studio, the public model for use with Knowledge Graph `en-news`, or the default public model `alchemy`. */
        model?: string;
    }
    /** NluEnrichmentFeatures. */
    interface NluEnrichmentFeatures {
        /** An object specifying the Keyword enrichment and related parameters. */
        keywords?: NluEnrichmentKeywords;
        /** An object speficying the Entities enrichment and related parameters. */
        entities?: NluEnrichmentEntities;
        /** An object specifying the sentiment extraction enrichment and related parameters. */
        sentiment?: NluEnrichmentSentiment;
        /** An object specifying the emotion detection enrichment and related parameters. */
        emotion?: NluEnrichmentEmotion;
        /** An object specifying the categories enrichment and related parameters. */
        categories?: NluEnrichmentCategories;
        /** An object specifiying the semantic roles enrichment and related parameters. */
        semantic_roles?: NluEnrichmentSemanticRoles;
        /** An object specifying the relations enrichment and related parameters. */
        relations?: NluEnrichmentRelations;
    }
    /** An object specifying the Keyword enrichment and related parameters. */
    interface NluEnrichmentKeywords {
        /** When `true`, sentiment analysis of keywords will be performed on the specified field. */
        sentiment?: boolean;
        /** When `true`, emotion detection of keywords will be performed on the specified field. */
        emotion?: boolean;
        /** The maximum number of keywords to extract for each instance of the specified field. */
        limit?: number;
    }
    /** An object specifying the relations enrichment and related parameters. */
    interface NluEnrichmentRelations {
        /** *For use with `natural_language_understanding` enrichments only.* The enrichement model to use with relationship extraction. May be a custom model provided by Watson Knowledge Studio, the public model for use with Knowledge Graph `en-news`, the default is`en-news`. */
        model?: string;
    }
    /** An object specifiying the semantic roles enrichment and related parameters. */
    interface NluEnrichmentSemanticRoles {
        /** When `true`, entities are extracted from the identified sentence parts. */
        entities?: boolean;
        /** When `true`, keywords are extracted from the identified sentence parts. */
        keywords?: boolean;
        /** The maximum number of semantic roles enrichments to extact from each instance of the specified field. */
        limit?: number;
    }
    /** An object specifying the sentiment extraction enrichment and related parameters. */
    interface NluEnrichmentSentiment {
        /** When `true`, sentiment analysis is performed on the entire field. */
        document?: boolean;
        /** A comma-separated list of target strings that will have any associated sentiment analyzed. */
        targets?: string[];
    }
    /** NormalizationOperation. */
    interface NormalizationOperation {
        /** Identifies what type of operation to perform. **copy** - Copies the value of the **source_field** to the **destination_field** field. If the **destination_field** already exists, then the value of the **source_field** overwrites the original value of the **destination_field**. **move** - Renames (moves) the **source_field** to the **destination_field**. If the **destination_field** already exists, then the value of the **source_field** overwrites the original value of the **destination_field**. Rename is identical to copy, except that the **source_field** is removed after the value has been copied to the **destination_field** (it is the same as a _copy_ followed by a _remove_). **merge** - Merges the value of the **source_field** with the value of the **destination_field**. The **destination_field** is converted into an array if it is not already an array, and the value of the **source_field** is appended to the array. This operation removes the **source_field** after the merge. If the **source_field** does not exist in the current document, then the **destination_field** is still converted into an array (if it is not an array already). This conversion ensures the type for **destination_field** is consistent across all documents. **remove** - Deletes the **source_field** field. The **destination_field** is ignored for this operation. **remove_nulls** - Removes all nested null (blank) field values from the JSON tree. **source_field** and **destination_field** are ignored by this operation because _remove_nulls_ operates on the entire JSON tree. Typically, **remove_nulls** is invoked as the last normalization operation (if it is invoked at all, it can be time-expensive). */
        operation?: string;
        /** The source field for the operation. */
        source_field?: string;
        /** The destination field for the operation. */
        destination_field?: string;
    }
    /** A notice produced for the collection. */
    interface Notice {
        /** Identifies the notice. Many notices might have the same ID. This field exists so that user applications can programmatically identify a notice and take automatic corrective action. */
        notice_id?: string;
        /** The creation date of the collection in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z'. */
        created?: string;
        /** Unique identifier of the document. */
        document_id?: string;
        /** Unique identifier of the query used for relevance training. */
        query_id?: string;
        /** Severity level of the notice. */
        severity?: string;
        /** Ingestion or training step in which the notice occurred. */
        step?: string;
        /** The description of the notice. */
        description?: string;
    }
    /** PdfHeadingDetection. */
    interface PdfHeadingDetection {
        fonts?: FontSetting[];
    }
    /** A list of PDF conversion settings. */
    interface PdfSettings {
        heading?: PdfHeadingDetection;
    }
    /** An aggregation produced by the Discovery service to analyze the input provided. */
    interface QueryAggregation {
        /** The type of aggregation command used. For example: term, filter, max, min, etc. */
        type?: string;
        results?: AggregationResult[];
        /** Number of matching results. */
        matching_results?: number;
        /** Aggregations returned by the Discovery service. */
        aggregations?: QueryAggregation[];
    }
    /** Entity text to provide context for the queried entity and rank based on that association. For example, if you wanted to query the city of London in England your query would look for `London` with the context of `England`. */
    interface QueryEntitiesContext {
        /** Entity text to provide context for the queried entity and rank based on that association. For example, if you wanted to query the city of London in England your query would look for `London` with the context of `England`. */
        text?: string;
    }
    /** A text string that appears within the entity text field. */
    interface QueryEntitiesEntity {
        /** Entity text content. */
        text?: string;
        /** The type of the specified entity. */
        type?: string;
    }
    /** An array of entities resulting from the query. */
    interface QueryEntitiesResponse {
        entities?: QueryEntitiesResponseItem[];
    }
    /** Object containing Entity query response information. */
    interface QueryEntitiesResponseItem {
        /** Entity text content. */
        text?: string;
        /** The type of the result entity. */
        type?: string;
        /** List of different evidentiary items to support the result. */
        evidence?: QueryEvidence[];
    }
    /** Description of evidence location supporting Knoweldge Graph query result. */
    interface QueryEvidence {
        /** The docuemnt ID (as indexed in Discovery) of the evidence location. */
        document_id?: string;
        /** The field of the document where the supporting evidence was identified. */
        field?: string;
        /** The start location of the evidence in the identified field. This value is inclusive. */
        start_offset?: number;
        /** The end location of the evidence in the identified field. This value is inclusive. */
        end_offset?: number;
        /** An array of entity objects that show evidence of the result. */
        entities?: QueryEvidenceEntity[];
    }
    /** Entity description and location within evidence field. */
    interface QueryEvidenceEntity {
        /** The entity type for this entity. Possible types vary based on model used. */
        type?: string;
        /** The original text of this entity as found in the evidence field. */
        text?: string;
        /** The start location of the entity text in the identified field. This value is inclusive. */
        start_offset?: number;
        /** The end location of the entity text in the identified field. This value is exclusive. */
        end_offset?: number;
    }
    /** QueryFilterType. */
    interface QueryFilterType {
        /** A comma-separated list of types to exclude. */
        exclude?: string[];
        /** A comma-separated list of types to include. All other types are excluded. */
        include?: string[];
    }
    /** QueryNoticesResponse. */
    interface QueryNoticesResponse {
        matching_results?: number;
        results?: QueryNoticesResult[];
        aggregations?: QueryAggregation[];
        passages?: QueryPassages[];
        duplicates_removed?: number;
    }
    /** QueryNoticesResult. */
    interface QueryNoticesResult {
        /** The unique identifier of the document. */
        id?: string;
        /** *Deprecated* This field is now part of the **result_metadata** object. */
        score?: number;
        /** Metadata of the document. */
        metadata?: Object;
        /** The collection ID of the collection containing the document for this result. */
        collection_id?: string;
        /** Metadata of the query result. */
        result_metadata?: QueryResultResultMetadata;
        /** The internal status code returned by the ingestion subsystem indicating the overall result of ingesting the source document. */
        code?: number;
        /** Name of the original source file (if available). */
        filename?: string;
        /** The type of the original source file. */
        file_type?: string;
        /** The SHA-1 hash of the original source file (formatted as a hexadecimal string). */
        sha1?: string;
        /** Array of notices for the document. */
        notices?: Notice[];
        /** QueryNoticesResult accepts additional properties. */
        [propName: string]: any;
    }
    /** QueryPassages. */
    interface QueryPassages {
        /** The unique identifier of the document from which the passage has been extracted. */
        document_id?: string;
        /** The confidence score of the passages's analysis. A higher score indicates greater confidence. */
        passage_score?: number;
        /** The content of the extracted passage. */
        passage_text?: string;
        /** The position of the first character of the extracted passage in the originating field. */
        start_offset?: number;
        /** The position of the last character of the extracted passage in the originating field. */
        end_offset?: number;
        /** The label of the field from which the passage has been extracted. */
        field?: string;
    }
    /** QueryRelationsArgument. */
    interface QueryRelationsArgument {
        entities?: QueryEntitiesEntity[];
    }
    /** QueryRelationsEntity. */
    interface QueryRelationsEntity {
        /** Entity text content. */
        text?: string;
        /** The type of the specified entity. */
        type?: string;
        /** If false, implicit querying is performed. The default is `false`. */
        exact?: boolean;
    }
    /** QueryRelationsFilter. */
    interface QueryRelationsFilter {
        /** A list of relation types to include or exclude from the query. */
        relation_types?: QueryFilterType;
        /** A list of entity types to include or exclude from the query. */
        entity_types?: QueryFilterType;
        /** A comma-separated list of document IDs to include in the query. */
        document_ids?: string[];
    }
    /** QueryRelationsRelationship. */
    interface QueryRelationsRelationship {
        /** The identified relationship type. */
        type?: string;
        /** The number of times the relationship is mentioned. */
        frequency?: number;
        /** Information about the relationship. */
        arguments?: QueryRelationsArgument[];
        /** List of different evidentiary items to support the result. */
        evidence?: QueryEvidence[];
    }
    /** QueryRelationsResponse. */
    interface QueryRelationsResponse {
        relations?: QueryRelationsRelationship[];
    }
    /** A response containing the documents and aggregations for the query. */
    interface QueryResponse {
        matching_results?: number;
        results?: QueryResult[];
        aggregations?: QueryAggregation[];
        passages?: QueryPassages[];
        duplicates_removed?: number;
        /** The session token for this query. The session token can be used to add events associated with this query to the query and event log. **Important:** Session tokens are case sensitive. */
        session_token?: string;
    }
    /** QueryResult. */
    interface QueryResult {
        /** The unique identifier of the document. */
        id?: string;
        /** *Deprecated* This field is now part of the **result_metadata** object. */
        score?: number;
        /** Metadata of the document. */
        metadata?: Object;
        /** The collection ID of the collection containing the document for this result. */
        collection_id?: string;
        /** Metadata of the query result. */
        result_metadata?: QueryResultResultMetadata;
        /** QueryResult accepts additional properties. */
        [propName: string]: any;
    }
    /** Metadata of a query result. */
    interface QueryResultResultMetadata {
        /** An unbounded measure of the relevance of a particular result, dependent on the query and matching document. A higher score indicates a greater match to the query parameters. */
        score?: number;
        /** The confidence score for the given result. Calculated based on how relevant the result is estimated to be, compared to a trained relevancy model. confidence can range from `0.0` to `1.0`. The higher the number, the more relevant the document. */
        confidence?: number;
    }
    /** A list of Document Segmentation settings. */
    interface SegmentSettings {
        /** Enables/disables the Document Segmentation feature. */
        enabled?: boolean;
        /** Defines the heading level that splits into document segments. Valid values are h1, h2, h3, h4, h5, h6. */
        selector_tags?: string[];
    }
    /** Object containing source parameters for the configuration. */
    interface Source {
        /** The type of source to connect to. -  `box` indicates the configuration is to connect an instance of Enterprise Box. -  `salesforce` indicates the configuration is to connect to Salesforce. -  `sharepoint` indicates the configuration is to connect to Microsoft SharePoint Online. */
        type?: string;
        /** The **credential_id** of the credentials to use to connect to the source. Credentials are defined using the **credentials** method. The **source_type** of the credentials used must match the **type** field specified in this object. */
        credential_id?: string;
        /** Object containing the schedule information for the source. */
        schedule?: SourceSchedule;
        /** The **options** object defines which items to crawl from the source system. */
        options?: SourceOptions;
    }
    /** The **options** object defines which items to crawl from the source system. */
    interface SourceOptions {
        /** Array of folders to crawl from the Box source. Only valid, and required, when the **type** field of the **source** object is set to `box`. */
        folders?: SourceOptionsFolder[];
        /** Array of Salesforce document object types to crawl from the Salesforce source. Only valid, and required, when the **type** field of the **source** object is set to `salesforce`. */
        objects?: SourceOptionsObject[];
        /** Array of Microsoft SharePointoint Online site collections to crawl from the SharePoint source. Only valid and required when the **type** field of the **source** object is set to `sharepoint`. */
        site_collections?: SourceOptionsSiteColl[];
    }
    /** Object that defines a box folder to crawl with this configuration. */
    interface SourceOptionsFolder {
        /** The Box user ID of the user who owns the folder to crawl. */
        owner_user_id: string;
        /** The Box folder ID of the folder to crawl. */
        folder_id: string;
        /** The maximum number of documents to crawl for this folder. By default, all documents in the folder are crawled. */
        limit?: number;
    }
    /** Object that defines a Salesforce document object type crawl with this configuration. */
    interface SourceOptionsObject {
        /** The name of the Salesforce document object to crawl. For example, `case`. */
        name: string;
        /** The maximum number of documents to crawl for this document object. By default, all documents in the document object are crawled. */
        limit?: number;
    }
    /** Object that defines a Microsoft SharePoint site collection to crawl with this configuration. */
    interface SourceOptionsSiteColl {
        /** The Microsoft SharePoint Online site collection path to crawl. The path must be be relative to the **organization_url** that was specified in the credentials associated with this source configuration. */
        site_collection_path: string;
        /** The maximum number of documents to crawl for this site collection. By default, all documents in the site collection are crawled. */
        limit?: number;
    }
    /** Object containing the schedule information for the source. */
    interface SourceSchedule {
        /** When `true`, the source is re-crawled based on the **frequency** field in this object. When `false` the source is not re-crawled; When `false` and connecting to Salesforce the source is crawled annually. */
        enabled?: boolean;
        /** The time zone to base source crawl times on. Possible values correspond to the IANA (Internet Assigned Numbers Authority) time zones list. */
        time_zone?: string;
        /** The crawl schedule in the specified **time_zone**. -  `daily`: Runs every day between 00:00 and 06:00. -  `weekly`: Runs every week on Sunday between 00:00 and 06:00. -  `monthly`: Runs the on the first Sunday of every month between 00:00 and 06:00. */
        frequency?: string;
    }
    /** Object containing source crawl status information. */
    interface SourceStatus {
        /** The current status of the source crawl for this collection. This field returns `not_configured` if the default configuration for this source does not have a **source** object defined. -  `running` indicates that a crawl to fetch more documents is in progress. -  `complete` indicates that the crawl has completed with no errors. -  `complete_with_notices` indicates that some notices were generated during the crawl. Notices can be checked by using the **notices** query method. -  `stopped` indicates that the crawl has stopped but is not complete. */
        status?: string;
        /** Date in UTC format indicating when the last crawl was attempted. If `null`, no crawl was completed. */
        last_updated?: string;
    }
    /** TestDocument. */
    interface TestDocument {
        /** The unique identifier for the configuration. */
        configuration_id?: string;
        /** Status of the preview operation. */
        status?: string;
        /** The number of 10-kB chunks of field data that were enriched. This can be used to estimate the cost of running a real ingestion. */
        enriched_field_units?: number;
        /** Format of the test document. */
        original_media_type?: string;
        /** An array of objects that describe each step in the preview process. */
        snapshots?: DocumentSnapshot[];
        /** An array of notice messages about the preview operation. */
        notices?: Notice[];
    }
    /** TopHitsResults. */
    interface TopHitsResults {
        /** Number of matching results. */
        matching_results?: number;
        /** Top results returned by the aggregation. */
        hits?: QueryResult[];
    }
    /** TrainingDataSet. */
    interface TrainingDataSet {
        environment_id?: string;
        collection_id?: string;
        queries?: TrainingQuery[];
    }
    /** TrainingExample. */
    interface TrainingExample {
        document_id?: string;
        cross_reference?: string;
        relevance?: number;
    }
    /** TrainingExampleList. */
    interface TrainingExampleList {
        examples?: TrainingExample[];
    }
    /** TrainingQuery. */
    interface TrainingQuery {
        query_id?: string;
        natural_language_query?: string;
        filter?: string;
        examples?: TrainingExample[];
    }
    /** TrainingStatus. */
    interface TrainingStatus {
        total_examples?: number;
        available?: boolean;
        processing?: boolean;
        minimum_queries_added?: boolean;
        minimum_examples_added?: boolean;
        sufficient_label_diversity?: boolean;
        notices?: number;
        successfully_trained?: string;
        data_updated?: string;
    }
    /** WordHeadingDetection. */
    interface WordHeadingDetection {
        fonts?: FontSetting[];
        styles?: WordStyle[];
    }
    /** A list of Word conversion settings. */
    interface WordSettings {
        heading?: WordHeadingDetection;
    }
    /** WordStyle. */
    interface WordStyle {
        level?: number;
        names?: string[];
    }
    /** XPathPatterns. */
    interface XPathPatterns {
        xpaths?: string[];
    }
    /** Calculation. */
    interface Calculation {
        /** The field where the aggregation is located in the document. */
        field?: string;
        /** Value of the aggregation. */
        value?: number;
    }
    /** Filter. */
    interface Filter {
        /** The match the aggregated results queried for. */
        match?: string;
    }
    /** Histogram. */
    interface Histogram {
        /** The field where the aggregation is located in the document. */
        field?: string;
        /** Interval of the aggregation. (For 'histogram' type). */
        interval?: number;
    }
    /** Nested. */
    interface Nested {
        /** The area of the results the aggregation was restricted to. */
        path?: string;
    }
    /** Term. */
    interface Term {
        /** The field where the aggregation is located in the document. */
        field?: string;
        count?: number;
    }
    /** Timeslice. */
    interface Timeslice {
        /** The field where the aggregation is located in the document. */
        field?: string;
        /** Interval of the aggregation. Valid date interval values are second/seconds minute/minutes, hour/hours, day/days, week/weeks, month/months, and year/years. */
        interval?: string;
        /** Used to indicate that anomaly detection should be performed. Anomaly detection is used to locate unusual datapoints within a time series. */
        anomaly?: boolean;
    }
    /** TopHits. */
    interface TopHits {
        /** Number of top hits returned by the aggregation. */
        size?: number;
        hits?: TopHitsResults;
    }
}
export = DiscoveryV1;