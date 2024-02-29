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

// May contain unused imports in some cases
// @ts-ignore
import { ConfigMapRef } from "./config-map-ref";
// May contain unused imports in some cases
// @ts-ignore
import { SettingRef } from "./setting-ref";

/**
 *
 * @export
 * @interface AuthProviderSpec
 */
export interface AuthProviderSpec {
  /**
   * Authentication url of the auth provider
   * @type {string}
   * @memberof AuthProviderSpec
   */
  authenticationUrl: string;
  /**
   *
   * @type {string}
   * @memberof AuthProviderSpec
   */
  bindingUrl?: string;
  /**
   *
   * @type {ConfigMapRef}
   * @memberof AuthProviderSpec
   */
  configMapRef?: ConfigMapRef;
  /**
   *
   * @type {string}
   * @memberof AuthProviderSpec
   */
  description?: string;
  /**
   * Display name of the auth provider
   * @type {string}
   * @memberof AuthProviderSpec
   */
  displayName: string;
  /**
   *
   * @type {string}
   * @memberof AuthProviderSpec
   */
  helpPage?: string;
  /**
   *
   * @type {string}
   * @memberof AuthProviderSpec
   */
  logo?: string;
  /**
   *
   * @type {SettingRef}
   * @memberof AuthProviderSpec
   */
  settingRef?: SettingRef;
  /**
   *
   * @type {string}
   * @memberof AuthProviderSpec
   */
  unbindUrl?: string;
  /**
   *
   * @type {string}
   * @memberof AuthProviderSpec
   */
  website?: string;
}