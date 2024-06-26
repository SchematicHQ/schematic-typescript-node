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
 * @interface GetFeatureUsageByCompanyParams
 */
export interface GetFeatureUsageByCompanyParams {
  /**
   *
   * @type {object}
   * @memberof GetFeatureUsageByCompanyParams
   */
  keys?: object;
}

/**
 * Check if a given object implements the GetFeatureUsageByCompanyParams interface.
 */
export function instanceOfGetFeatureUsageByCompanyParams(
  value: object,
): value is GetFeatureUsageByCompanyParams {
  return true;
}

export function GetFeatureUsageByCompanyParamsFromJSON(
  json: any,
): GetFeatureUsageByCompanyParams {
  return GetFeatureUsageByCompanyParamsFromJSONTyped(json, false);
}

export function GetFeatureUsageByCompanyParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetFeatureUsageByCompanyParams {
  if (json == null) {
    return json;
  }
  return {
    keys: json["keys"] == null ? undefined : json["keys"],
  };
}

export function GetFeatureUsageByCompanyParamsToJSON(
  value?: GetFeatureUsageByCompanyParams | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    keys: value["keys"],
  };
}
