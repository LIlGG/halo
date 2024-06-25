/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { JsonPatchInner } from '../models';
// @ts-ignore
import { Notification } from '../models';
// @ts-ignore
import { NotificationList } from '../models';
/**
 * NotificationHaloRunV1alpha1NotificationApi - axios parameter creator
 * @export
 */
export const NotificationHaloRunV1alpha1NotificationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create notification.halo.run/v1alpha1/Notification
         * @param {Notification} [notification] Fresh notification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNotificationHaloRunV1alpha1Notification: async (notification?: Notification, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/notification.halo.run/v1alpha1/notifications`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(notification, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete notification.halo.run/v1alpha1/Notification
         * @param {string} name Name of notification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNotificationHaloRunV1alpha1Notification: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteNotificationHaloRunV1alpha1Notification', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/notifications/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get notification.halo.run/v1alpha1/Notification
         * @param {string} name Name of notification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationHaloRunV1alpha1Notification: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getNotificationHaloRunV1alpha1Notification', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/notifications/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List notification.halo.run/v1alpha1/Notification
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNotificationHaloRunV1alpha1Notification: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/notification.halo.run/v1alpha1/notifications`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch notification.halo.run/v1alpha1/Notification
         * @param {string} name Name of notification
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchNotificationHaloRunV1alpha1Notification: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchNotificationHaloRunV1alpha1Notification', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/notifications/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update notification.halo.run/v1alpha1/Notification
         * @param {string} name Name of notification
         * @param {Notification} [notification] Updated notification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNotificationHaloRunV1alpha1Notification: async (name: string, notification?: Notification, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateNotificationHaloRunV1alpha1Notification', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/notifications/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(notification, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NotificationHaloRunV1alpha1NotificationApi - functional programming interface
 * @export
 */
export const NotificationHaloRunV1alpha1NotificationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NotificationHaloRunV1alpha1NotificationApiAxiosParamCreator(configuration)
    return {
        /**
         * Create notification.halo.run/v1alpha1/Notification
         * @param {Notification} [notification] Fresh notification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNotificationHaloRunV1alpha1Notification(notification?: Notification, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNotificationHaloRunV1alpha1Notification(notification, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationHaloRunV1alpha1NotificationApi.createNotificationHaloRunV1alpha1Notification']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete notification.halo.run/v1alpha1/Notification
         * @param {string} name Name of notification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteNotificationHaloRunV1alpha1Notification(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteNotificationHaloRunV1alpha1Notification(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationHaloRunV1alpha1NotificationApi.deleteNotificationHaloRunV1alpha1Notification']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get notification.halo.run/v1alpha1/Notification
         * @param {string} name Name of notification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNotificationHaloRunV1alpha1Notification(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNotificationHaloRunV1alpha1Notification(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationHaloRunV1alpha1NotificationApi.getNotificationHaloRunV1alpha1Notification']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List notification.halo.run/v1alpha1/Notification
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listNotificationHaloRunV1alpha1Notification(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listNotificationHaloRunV1alpha1Notification(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationHaloRunV1alpha1NotificationApi.listNotificationHaloRunV1alpha1Notification']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch notification.halo.run/v1alpha1/Notification
         * @param {string} name Name of notification
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchNotificationHaloRunV1alpha1Notification(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchNotificationHaloRunV1alpha1Notification(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationHaloRunV1alpha1NotificationApi.patchNotificationHaloRunV1alpha1Notification']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update notification.halo.run/v1alpha1/Notification
         * @param {string} name Name of notification
         * @param {Notification} [notification] Updated notification
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateNotificationHaloRunV1alpha1Notification(name: string, notification?: Notification, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateNotificationHaloRunV1alpha1Notification(name, notification, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationHaloRunV1alpha1NotificationApi.updateNotificationHaloRunV1alpha1Notification']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * NotificationHaloRunV1alpha1NotificationApi - factory interface
 * @export
 */
export const NotificationHaloRunV1alpha1NotificationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NotificationHaloRunV1alpha1NotificationApiFp(configuration)
    return {
        /**
         * Create notification.halo.run/v1alpha1/Notification
         * @param {NotificationHaloRunV1alpha1NotificationApiCreateNotificationHaloRunV1alpha1NotificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNotificationHaloRunV1alpha1Notification(requestParameters: NotificationHaloRunV1alpha1NotificationApiCreateNotificationHaloRunV1alpha1NotificationRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Notification> {
            return localVarFp.createNotificationHaloRunV1alpha1Notification(requestParameters.notification, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete notification.halo.run/v1alpha1/Notification
         * @param {NotificationHaloRunV1alpha1NotificationApiDeleteNotificationHaloRunV1alpha1NotificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteNotificationHaloRunV1alpha1Notification(requestParameters: NotificationHaloRunV1alpha1NotificationApiDeleteNotificationHaloRunV1alpha1NotificationRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteNotificationHaloRunV1alpha1Notification(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get notification.halo.run/v1alpha1/Notification
         * @param {NotificationHaloRunV1alpha1NotificationApiGetNotificationHaloRunV1alpha1NotificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNotificationHaloRunV1alpha1Notification(requestParameters: NotificationHaloRunV1alpha1NotificationApiGetNotificationHaloRunV1alpha1NotificationRequest, options?: RawAxiosRequestConfig): AxiosPromise<Notification> {
            return localVarFp.getNotificationHaloRunV1alpha1Notification(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List notification.halo.run/v1alpha1/Notification
         * @param {NotificationHaloRunV1alpha1NotificationApiListNotificationHaloRunV1alpha1NotificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNotificationHaloRunV1alpha1Notification(requestParameters: NotificationHaloRunV1alpha1NotificationApiListNotificationHaloRunV1alpha1NotificationRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<NotificationList> {
            return localVarFp.listNotificationHaloRunV1alpha1Notification(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch notification.halo.run/v1alpha1/Notification
         * @param {NotificationHaloRunV1alpha1NotificationApiPatchNotificationHaloRunV1alpha1NotificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchNotificationHaloRunV1alpha1Notification(requestParameters: NotificationHaloRunV1alpha1NotificationApiPatchNotificationHaloRunV1alpha1NotificationRequest, options?: RawAxiosRequestConfig): AxiosPromise<Notification> {
            return localVarFp.patchNotificationHaloRunV1alpha1Notification(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update notification.halo.run/v1alpha1/Notification
         * @param {NotificationHaloRunV1alpha1NotificationApiUpdateNotificationHaloRunV1alpha1NotificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNotificationHaloRunV1alpha1Notification(requestParameters: NotificationHaloRunV1alpha1NotificationApiUpdateNotificationHaloRunV1alpha1NotificationRequest, options?: RawAxiosRequestConfig): AxiosPromise<Notification> {
            return localVarFp.updateNotificationHaloRunV1alpha1Notification(requestParameters.name, requestParameters.notification, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNotificationHaloRunV1alpha1Notification operation in NotificationHaloRunV1alpha1NotificationApi.
 * @export
 * @interface NotificationHaloRunV1alpha1NotificationApiCreateNotificationHaloRunV1alpha1NotificationRequest
 */
export interface NotificationHaloRunV1alpha1NotificationApiCreateNotificationHaloRunV1alpha1NotificationRequest {
    /**
     * Fresh notification
     * @type {Notification}
     * @memberof NotificationHaloRunV1alpha1NotificationApiCreateNotificationHaloRunV1alpha1Notification
     */
    readonly notification?: Notification
}

/**
 * Request parameters for deleteNotificationHaloRunV1alpha1Notification operation in NotificationHaloRunV1alpha1NotificationApi.
 * @export
 * @interface NotificationHaloRunV1alpha1NotificationApiDeleteNotificationHaloRunV1alpha1NotificationRequest
 */
export interface NotificationHaloRunV1alpha1NotificationApiDeleteNotificationHaloRunV1alpha1NotificationRequest {
    /**
     * Name of notification
     * @type {string}
     * @memberof NotificationHaloRunV1alpha1NotificationApiDeleteNotificationHaloRunV1alpha1Notification
     */
    readonly name: string
}

/**
 * Request parameters for getNotificationHaloRunV1alpha1Notification operation in NotificationHaloRunV1alpha1NotificationApi.
 * @export
 * @interface NotificationHaloRunV1alpha1NotificationApiGetNotificationHaloRunV1alpha1NotificationRequest
 */
export interface NotificationHaloRunV1alpha1NotificationApiGetNotificationHaloRunV1alpha1NotificationRequest {
    /**
     * Name of notification
     * @type {string}
     * @memberof NotificationHaloRunV1alpha1NotificationApiGetNotificationHaloRunV1alpha1Notification
     */
    readonly name: string
}

/**
 * Request parameters for listNotificationHaloRunV1alpha1Notification operation in NotificationHaloRunV1alpha1NotificationApi.
 * @export
 * @interface NotificationHaloRunV1alpha1NotificationApiListNotificationHaloRunV1alpha1NotificationRequest
 */
export interface NotificationHaloRunV1alpha1NotificationApiListNotificationHaloRunV1alpha1NotificationRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof NotificationHaloRunV1alpha1NotificationApiListNotificationHaloRunV1alpha1Notification
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof NotificationHaloRunV1alpha1NotificationApiListNotificationHaloRunV1alpha1Notification
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof NotificationHaloRunV1alpha1NotificationApiListNotificationHaloRunV1alpha1Notification
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof NotificationHaloRunV1alpha1NotificationApiListNotificationHaloRunV1alpha1Notification
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof NotificationHaloRunV1alpha1NotificationApiListNotificationHaloRunV1alpha1Notification
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchNotificationHaloRunV1alpha1Notification operation in NotificationHaloRunV1alpha1NotificationApi.
 * @export
 * @interface NotificationHaloRunV1alpha1NotificationApiPatchNotificationHaloRunV1alpha1NotificationRequest
 */
export interface NotificationHaloRunV1alpha1NotificationApiPatchNotificationHaloRunV1alpha1NotificationRequest {
    /**
     * Name of notification
     * @type {string}
     * @memberof NotificationHaloRunV1alpha1NotificationApiPatchNotificationHaloRunV1alpha1Notification
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof NotificationHaloRunV1alpha1NotificationApiPatchNotificationHaloRunV1alpha1Notification
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateNotificationHaloRunV1alpha1Notification operation in NotificationHaloRunV1alpha1NotificationApi.
 * @export
 * @interface NotificationHaloRunV1alpha1NotificationApiUpdateNotificationHaloRunV1alpha1NotificationRequest
 */
export interface NotificationHaloRunV1alpha1NotificationApiUpdateNotificationHaloRunV1alpha1NotificationRequest {
    /**
     * Name of notification
     * @type {string}
     * @memberof NotificationHaloRunV1alpha1NotificationApiUpdateNotificationHaloRunV1alpha1Notification
     */
    readonly name: string

    /**
     * Updated notification
     * @type {Notification}
     * @memberof NotificationHaloRunV1alpha1NotificationApiUpdateNotificationHaloRunV1alpha1Notification
     */
    readonly notification?: Notification
}

/**
 * NotificationHaloRunV1alpha1NotificationApi - object-oriented interface
 * @export
 * @class NotificationHaloRunV1alpha1NotificationApi
 * @extends {BaseAPI}
 */
export class NotificationHaloRunV1alpha1NotificationApi extends BaseAPI {
    /**
     * Create notification.halo.run/v1alpha1/Notification
     * @param {NotificationHaloRunV1alpha1NotificationApiCreateNotificationHaloRunV1alpha1NotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationHaloRunV1alpha1NotificationApi
     */
    public createNotificationHaloRunV1alpha1Notification(requestParameters: NotificationHaloRunV1alpha1NotificationApiCreateNotificationHaloRunV1alpha1NotificationRequest = {}, options?: RawAxiosRequestConfig) {
        return NotificationHaloRunV1alpha1NotificationApiFp(this.configuration).createNotificationHaloRunV1alpha1Notification(requestParameters.notification, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete notification.halo.run/v1alpha1/Notification
     * @param {NotificationHaloRunV1alpha1NotificationApiDeleteNotificationHaloRunV1alpha1NotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationHaloRunV1alpha1NotificationApi
     */
    public deleteNotificationHaloRunV1alpha1Notification(requestParameters: NotificationHaloRunV1alpha1NotificationApiDeleteNotificationHaloRunV1alpha1NotificationRequest, options?: RawAxiosRequestConfig) {
        return NotificationHaloRunV1alpha1NotificationApiFp(this.configuration).deleteNotificationHaloRunV1alpha1Notification(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get notification.halo.run/v1alpha1/Notification
     * @param {NotificationHaloRunV1alpha1NotificationApiGetNotificationHaloRunV1alpha1NotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationHaloRunV1alpha1NotificationApi
     */
    public getNotificationHaloRunV1alpha1Notification(requestParameters: NotificationHaloRunV1alpha1NotificationApiGetNotificationHaloRunV1alpha1NotificationRequest, options?: RawAxiosRequestConfig) {
        return NotificationHaloRunV1alpha1NotificationApiFp(this.configuration).getNotificationHaloRunV1alpha1Notification(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List notification.halo.run/v1alpha1/Notification
     * @param {NotificationHaloRunV1alpha1NotificationApiListNotificationHaloRunV1alpha1NotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationHaloRunV1alpha1NotificationApi
     */
    public listNotificationHaloRunV1alpha1Notification(requestParameters: NotificationHaloRunV1alpha1NotificationApiListNotificationHaloRunV1alpha1NotificationRequest = {}, options?: RawAxiosRequestConfig) {
        return NotificationHaloRunV1alpha1NotificationApiFp(this.configuration).listNotificationHaloRunV1alpha1Notification(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch notification.halo.run/v1alpha1/Notification
     * @param {NotificationHaloRunV1alpha1NotificationApiPatchNotificationHaloRunV1alpha1NotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationHaloRunV1alpha1NotificationApi
     */
    public patchNotificationHaloRunV1alpha1Notification(requestParameters: NotificationHaloRunV1alpha1NotificationApiPatchNotificationHaloRunV1alpha1NotificationRequest, options?: RawAxiosRequestConfig) {
        return NotificationHaloRunV1alpha1NotificationApiFp(this.configuration).patchNotificationHaloRunV1alpha1Notification(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update notification.halo.run/v1alpha1/Notification
     * @param {NotificationHaloRunV1alpha1NotificationApiUpdateNotificationHaloRunV1alpha1NotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationHaloRunV1alpha1NotificationApi
     */
    public updateNotificationHaloRunV1alpha1Notification(requestParameters: NotificationHaloRunV1alpha1NotificationApiUpdateNotificationHaloRunV1alpha1NotificationRequest, options?: RawAxiosRequestConfig) {
        return NotificationHaloRunV1alpha1NotificationApiFp(this.configuration).updateNotificationHaloRunV1alpha1Notification(requestParameters.name, requestParameters.notification, options).then((request) => request(this.axios, this.basePath));
    }
}

