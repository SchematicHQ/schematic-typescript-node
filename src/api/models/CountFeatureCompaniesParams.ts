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
 * @interface CountFeatureCompaniesParams
 */
export interface CountFeatureCompaniesParams {
  /**
   *
   * @type {string}
   * @memberof CountFeatureCompaniesParams
   */
  featureId?: string;
  /**
   * Page limit (default 100)
   * @type {number}
   * @memberof CountFeatureCompaniesParams
   */
  limit?: number;
  /**
   * Page offset (default 0)
   * @type {number}
   * @memberof CountFeatureCompaniesParams
   */
  offset?: number;
  /**
   *
   * @type {string}
   * @memberof CountFeatureCompaniesParams
   */
  q?: string;
}

/**
 * Check if a given object implements the CountFeatureCompaniesParams interface.
 */
export function instanceOfCountFeatureCompaniesParams(
  value: object,
): value is CountFeatureCompaniesParams {
  return true;
}

export function CountFeatureCompaniesParamsFromJSON(
  json: any,
): CountFeatureCompaniesParams {
  return CountFeatureCompaniesParamsFromJSONTyped(json, false);
}

export function CountFeatureCompaniesParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountFeatureCompaniesParams {
  if (json == null) {
    return json;
  }
  return {
    featureId: json["feature_id"] == null ? undefined : json["feature_id"],
    limit: json["limit"] == null ? undefined : json["limit"],
    offset: json["offset"] == null ? undefined : json["offset"],
    q: json["q"] == null ? undefined : json["q"],
  };
}

export function CountFeatureCompaniesParamsToJSON(
  value?: CountFeatureCompaniesParams | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    feature_id: value["featureId"],
    limit: value["limit"],
    offset: value["offset"],
    q: value["q"],
  };
}
