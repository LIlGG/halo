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


// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata';
// May contain unused imports in some cases
// @ts-ignore
import { UserSpec } from './user-spec';
// May contain unused imports in some cases
// @ts-ignore
import { UserStatus } from './user-status';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'apiVersion': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof User
     */
    'metadata': Metadata;
    /**
     * 
     * @type {UserSpec}
     * @memberof User
     */
    'spec': UserSpec;
    /**
     * 
     * @type {UserStatus}
     * @memberof User
     */
    'status'?: UserStatus;
}

