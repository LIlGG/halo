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
import { ExtensionSpec } from './extension-spec';
// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata';

/**
 * 
 * @export
 * @interface ExtensionDefinition
 */
export interface ExtensionDefinition {
    /**
     * 
     * @type {string}
     * @memberof ExtensionDefinition
     */
    'apiVersion': string;
    /**
     * 
     * @type {string}
     * @memberof ExtensionDefinition
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof ExtensionDefinition
     */
    'metadata': Metadata;
    /**
     * 
     * @type {ExtensionSpec}
     * @memberof ExtensionDefinition
     */
    'spec': ExtensionSpec;
}

