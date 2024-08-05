/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.19.0-SNAPSHOT
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
import { AuthProvider } from '../models';
// @ts-ignore
import { AuthProviderList } from '../models';
// @ts-ignore
import { JsonPatchInner } from '../models';
/**
 * AuthProviderV1alpha1Api - axios parameter creator
 * @export
 */
export const AuthProviderV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create AuthProvider
         * @param {AuthProvider} [authProvider] Fresh authprovider
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAuthProvider: async (authProvider?: AuthProvider, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/auth.halo.run/v1alpha1/authproviders`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authProvider, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete AuthProvider
         * @param {string} name Name of authprovider
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAuthProvider: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteAuthProvider', 'name', name)
            const localVarPath = `/apis/auth.halo.run/v1alpha1/authproviders/{name}`
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

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
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
         * Get AuthProvider
         * @param {string} name Name of authprovider
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthProvider: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getAuthProvider', 'name', name)
            const localVarPath = `/apis/auth.halo.run/v1alpha1/authproviders/{name}`
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

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
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
         * List AuthProvider
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAuthProvider: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/auth.halo.run/v1alpha1/authproviders`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
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
         * Patch AuthProvider
         * @param {string} name Name of authprovider
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchAuthProvider: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchAuthProvider', 'name', name)
            const localVarPath = `/apis/auth.halo.run/v1alpha1/authproviders/{name}`
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

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
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
         * Update AuthProvider
         * @param {string} name Name of authprovider
         * @param {AuthProvider} [authProvider] Updated authprovider
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAuthProvider: async (name: string, authProvider?: AuthProvider, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateAuthProvider', 'name', name)
            const localVarPath = `/apis/auth.halo.run/v1alpha1/authproviders/{name}`
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

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authProvider, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthProviderV1alpha1Api - functional programming interface
 * @export
 */
export const AuthProviderV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthProviderV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create AuthProvider
         * @param {AuthProvider} [authProvider] Fresh authprovider
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAuthProvider(authProvider?: AuthProvider, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthProvider>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAuthProvider(authProvider, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthProviderV1alpha1Api.createAuthProvider']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete AuthProvider
         * @param {string} name Name of authprovider
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAuthProvider(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAuthProvider(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthProviderV1alpha1Api.deleteAuthProvider']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get AuthProvider
         * @param {string} name Name of authprovider
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuthProvider(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthProvider>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthProvider(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthProviderV1alpha1Api.getAuthProvider']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List AuthProvider
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAuthProvider(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthProviderList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAuthProvider(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthProviderV1alpha1Api.listAuthProvider']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch AuthProvider
         * @param {string} name Name of authprovider
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchAuthProvider(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthProvider>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchAuthProvider(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthProviderV1alpha1Api.patchAuthProvider']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update AuthProvider
         * @param {string} name Name of authprovider
         * @param {AuthProvider} [authProvider] Updated authprovider
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAuthProvider(name: string, authProvider?: AuthProvider, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthProvider>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAuthProvider(name, authProvider, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthProviderV1alpha1Api.updateAuthProvider']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthProviderV1alpha1Api - factory interface
 * @export
 */
export const AuthProviderV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthProviderV1alpha1ApiFp(configuration)
    return {
        /**
         * Create AuthProvider
         * @param {AuthProviderV1alpha1ApiCreateAuthProviderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAuthProvider(requestParameters: AuthProviderV1alpha1ApiCreateAuthProviderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AuthProvider> {
            return localVarFp.createAuthProvider(requestParameters.authProvider, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete AuthProvider
         * @param {AuthProviderV1alpha1ApiDeleteAuthProviderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAuthProvider(requestParameters: AuthProviderV1alpha1ApiDeleteAuthProviderRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteAuthProvider(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get AuthProvider
         * @param {AuthProviderV1alpha1ApiGetAuthProviderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthProvider(requestParameters: AuthProviderV1alpha1ApiGetAuthProviderRequest, options?: RawAxiosRequestConfig): AxiosPromise<AuthProvider> {
            return localVarFp.getAuthProvider(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List AuthProvider
         * @param {AuthProviderV1alpha1ApiListAuthProviderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAuthProvider(requestParameters: AuthProviderV1alpha1ApiListAuthProviderRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AuthProviderList> {
            return localVarFp.listAuthProvider(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch AuthProvider
         * @param {AuthProviderV1alpha1ApiPatchAuthProviderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchAuthProvider(requestParameters: AuthProviderV1alpha1ApiPatchAuthProviderRequest, options?: RawAxiosRequestConfig): AxiosPromise<AuthProvider> {
            return localVarFp.patchAuthProvider(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update AuthProvider
         * @param {AuthProviderV1alpha1ApiUpdateAuthProviderRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAuthProvider(requestParameters: AuthProviderV1alpha1ApiUpdateAuthProviderRequest, options?: RawAxiosRequestConfig): AxiosPromise<AuthProvider> {
            return localVarFp.updateAuthProvider(requestParameters.name, requestParameters.authProvider, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAuthProvider operation in AuthProviderV1alpha1Api.
 * @export
 * @interface AuthProviderV1alpha1ApiCreateAuthProviderRequest
 */
export interface AuthProviderV1alpha1ApiCreateAuthProviderRequest {
    /**
     * Fresh authprovider
     * @type {AuthProvider}
     * @memberof AuthProviderV1alpha1ApiCreateAuthProvider
     */
    readonly authProvider?: AuthProvider
}

/**
 * Request parameters for deleteAuthProvider operation in AuthProviderV1alpha1Api.
 * @export
 * @interface AuthProviderV1alpha1ApiDeleteAuthProviderRequest
 */
export interface AuthProviderV1alpha1ApiDeleteAuthProviderRequest {
    /**
     * Name of authprovider
     * @type {string}
     * @memberof AuthProviderV1alpha1ApiDeleteAuthProvider
     */
    readonly name: string
}

/**
 * Request parameters for getAuthProvider operation in AuthProviderV1alpha1Api.
 * @export
 * @interface AuthProviderV1alpha1ApiGetAuthProviderRequest
 */
export interface AuthProviderV1alpha1ApiGetAuthProviderRequest {
    /**
     * Name of authprovider
     * @type {string}
     * @memberof AuthProviderV1alpha1ApiGetAuthProvider
     */
    readonly name: string
}

/**
 * Request parameters for listAuthProvider operation in AuthProviderV1alpha1Api.
 * @export
 * @interface AuthProviderV1alpha1ApiListAuthProviderRequest
 */
export interface AuthProviderV1alpha1ApiListAuthProviderRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof AuthProviderV1alpha1ApiListAuthProvider
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof AuthProviderV1alpha1ApiListAuthProvider
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof AuthProviderV1alpha1ApiListAuthProvider
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof AuthProviderV1alpha1ApiListAuthProvider
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof AuthProviderV1alpha1ApiListAuthProvider
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchAuthProvider operation in AuthProviderV1alpha1Api.
 * @export
 * @interface AuthProviderV1alpha1ApiPatchAuthProviderRequest
 */
export interface AuthProviderV1alpha1ApiPatchAuthProviderRequest {
    /**
     * Name of authprovider
     * @type {string}
     * @memberof AuthProviderV1alpha1ApiPatchAuthProvider
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof AuthProviderV1alpha1ApiPatchAuthProvider
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateAuthProvider operation in AuthProviderV1alpha1Api.
 * @export
 * @interface AuthProviderV1alpha1ApiUpdateAuthProviderRequest
 */
export interface AuthProviderV1alpha1ApiUpdateAuthProviderRequest {
    /**
     * Name of authprovider
     * @type {string}
     * @memberof AuthProviderV1alpha1ApiUpdateAuthProvider
     */
    readonly name: string

    /**
     * Updated authprovider
     * @type {AuthProvider}
     * @memberof AuthProviderV1alpha1ApiUpdateAuthProvider
     */
    readonly authProvider?: AuthProvider
}

/**
 * AuthProviderV1alpha1Api - object-oriented interface
 * @export
 * @class AuthProviderV1alpha1Api
 * @extends {BaseAPI}
 */
export class AuthProviderV1alpha1Api extends BaseAPI {
    /**
     * Create AuthProvider
     * @param {AuthProviderV1alpha1ApiCreateAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthProviderV1alpha1Api
     */
    public createAuthProvider(requestParameters: AuthProviderV1alpha1ApiCreateAuthProviderRequest = {}, options?: RawAxiosRequestConfig) {
        return AuthProviderV1alpha1ApiFp(this.configuration).createAuthProvider(requestParameters.authProvider, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete AuthProvider
     * @param {AuthProviderV1alpha1ApiDeleteAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthProviderV1alpha1Api
     */
    public deleteAuthProvider(requestParameters: AuthProviderV1alpha1ApiDeleteAuthProviderRequest, options?: RawAxiosRequestConfig) {
        return AuthProviderV1alpha1ApiFp(this.configuration).deleteAuthProvider(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get AuthProvider
     * @param {AuthProviderV1alpha1ApiGetAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthProviderV1alpha1Api
     */
    public getAuthProvider(requestParameters: AuthProviderV1alpha1ApiGetAuthProviderRequest, options?: RawAxiosRequestConfig) {
        return AuthProviderV1alpha1ApiFp(this.configuration).getAuthProvider(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List AuthProvider
     * @param {AuthProviderV1alpha1ApiListAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthProviderV1alpha1Api
     */
    public listAuthProvider(requestParameters: AuthProviderV1alpha1ApiListAuthProviderRequest = {}, options?: RawAxiosRequestConfig) {
        return AuthProviderV1alpha1ApiFp(this.configuration).listAuthProvider(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch AuthProvider
     * @param {AuthProviderV1alpha1ApiPatchAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthProviderV1alpha1Api
     */
    public patchAuthProvider(requestParameters: AuthProviderV1alpha1ApiPatchAuthProviderRequest, options?: RawAxiosRequestConfig) {
        return AuthProviderV1alpha1ApiFp(this.configuration).patchAuthProvider(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update AuthProvider
     * @param {AuthProviderV1alpha1ApiUpdateAuthProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthProviderV1alpha1Api
     */
    public updateAuthProvider(requestParameters: AuthProviderV1alpha1ApiUpdateAuthProviderRequest, options?: RawAxiosRequestConfig) {
        return AuthProviderV1alpha1ApiFp(this.configuration).updateAuthProvider(requestParameters.name, requestParameters.authProvider, options).then((request) => request(this.axios, this.basePath));
    }
}

