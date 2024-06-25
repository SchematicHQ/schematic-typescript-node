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
 * @interface ListFeatureUsageParams
 */
export interface ListFeatureUsageParams {
  /**
   *
   * @type {string}
   * @memberof ListFeatureUsageParams
   */
  companyId?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ListFeatureUsageParams
   */
  companyKeys?: { [key: string]: string };
  /**
   *
   * @type {Array<string>}
   * @memberof ListFeatureUsageParams
   */
  featureIds?: Array<string>;
  /**
   * Page limit (default 100)
   * @type {number}
   * @memberof ListFeatureUsageParams
   */
  limit?: number;
  /**
   * Page offset (default 0)
   * @type {number}
   * @memberof ListFeatureUsageParams
   */
  offset?: number;
  /**
   *
   * @type {string}
   * @memberof ListFeatureUsageParams
   */
  q?: string;
}

/**
 * Check if a given object implements the ListFeatureUsageParams interface.
 */
export function instanceOfListFeatureUsageParams(
  value: object,
): value is ListFeatureUsageParams {
  return true;
}

export function ListFeatureUsageParamsFromJSON(
  json: any,
): ListFeatureUsageParams {
  return ListFeatureUsageParamsFromJSONTyped(json, false);
}

export function ListFeatureUsageParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListFeatureUsageParams {
  if (json == null) {
    return json;
  }
  return {
    companyId: json["company_id"] == null ? undefined : json["company_id"],
    companyKeys:
      json["company_keys"] == null ? undefined : json["company_keys"],
    featureIds: json["feature_ids"] == null ? undefined : json["feature_ids"],
    limit: json["limit"] == null ? undefined : json["limit"],
    offset: json["offset"] == null ? undefined : json["offset"],
    q: json["q"] == null ? undefined : json["q"],
  };
}

export function ListFeatureUsageParamsToJSON(
  value?: ListFeatureUsageParams | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    company_id: value["companyId"],
    company_keys: value["companyKeys"],
    feature_ids: value["featureIds"],
    limit: value["limit"],
    offset: value["offset"],
    q: value["q"],
  };
}
