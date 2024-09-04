/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.20.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface UserSpec
 */
export interface UserSpec {
    /**
     * 
     * @type {string}
     * @memberof UserSpec
     */
    'avatar'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSpec
     */
    'bio'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserSpec
     */
    'disabled'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserSpec
     */
    'displayName': string;
    /**
     * 
     * @type {string}
     * @memberof UserSpec
     */
    'email': string;
    /**
     * 
     * @type {boolean}
     * @memberof UserSpec
     */
    'emailVerified'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof UserSpec
     */
    'loginHistoryLimit'?: number;
    /**
     * 
     * @type {string}
     * @memberof UserSpec
     */
    'password'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSpec
     */
    'phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSpec
     */
    'registeredAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSpec
     */
    'totpEncryptedSecret'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserSpec
     */
    'twoFactorAuthEnabled'?: boolean;
}

