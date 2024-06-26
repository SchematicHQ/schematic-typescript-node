/* tslint:disable */
/* eslint-disable */
/**
 * Schematic API
 * Schematic API
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 * Input parameters
 * @export
 * @interface CountApiKeysParams
 */
export interface CountApiKeysParams {
  /**
   *
   * @type {string}
   * @memberof CountApiKeysParams
   */
  environmentId?: string;
  /**
   * Page limit (default 100)
   * @type {number}
   * @memberof CountApiKeysParams
   */
  limit?: number;
  /**
   * Page offset (default 0)
   * @type {number}
   * @memberof CountApiKeysParams
   */
  offset?: number;
  /**
   *
   * @type {boolean}
   * @memberof CountApiKeysParams
   */
  requireEnvironment?: boolean;
}

/**
 * Check if a given object implements the CountApiKeysParams interface.
 */
export function instanceOfCountApiKeysParams(
  value: object,
): value is CountApiKeysParams {
  return true;
}

export function CountApiKeysParamsFromJSON(json: any): CountApiKeysParams {
  return CountApiKeysParamsFromJSONTyped(json, false);
}

export function CountApiKeysParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountApiKeysParams {
  if (json == null) {
    return json;
  }
  return {
    environmentId:
      json["environment_id"] == null ? undefined : json["environment_id"],
    limit: json["limit"] == null ? undefined : json["limit"],
    offset: json["offset"] == null ? undefined : json["offset"],
    requireEnvironment:
      json["require_environment"] == null
        ? undefined
        : json["require_environment"],
  };
}

export function CountApiKeysParamsToJSON(
  value?: CountApiKeysParams | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    environment_id: value["environmentId"],
    limit: value["limit"],
    offset: value["offset"],
    require_environment: value["requireEnvironment"],
  };
}
