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
 * @interface CountCompanyOverridesParams
 */
export interface CountCompanyOverridesParams {
  /**
   *
   * @type {string}
   * @memberof CountCompanyOverridesParams
   */
  companyId?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof CountCompanyOverridesParams
   */
  companyIds?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof CountCompanyOverridesParams
   */
  featureId?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof CountCompanyOverridesParams
   */
  featureIds?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof CountCompanyOverridesParams
   */
  ids?: Array<string>;
  /**
   * Page limit (default 100)
   * @type {number}
   * @memberof CountCompanyOverridesParams
   */
  limit?: number;
  /**
   * Page offset (default 0)
   * @type {number}
   * @memberof CountCompanyOverridesParams
   */
  offset?: number;
}

/**
 * Check if a given object implements the CountCompanyOverridesParams interface.
 */
export function instanceOfCountCompanyOverridesParams(
  value: object,
): value is CountCompanyOverridesParams {
  return true;
}

export function CountCompanyOverridesParamsFromJSON(
  json: any,
): CountCompanyOverridesParams {
  return CountCompanyOverridesParamsFromJSONTyped(json, false);
}

export function CountCompanyOverridesParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountCompanyOverridesParams {
  if (json == null) {
    return json;
  }
  return {
    companyId: json["company_id"] == null ? undefined : json["company_id"],
    companyIds: json["company_ids"] == null ? undefined : json["company_ids"],
    featureId: json["feature_id"] == null ? undefined : json["feature_id"],
    featureIds: json["feature_ids"] == null ? undefined : json["feature_ids"],
    ids: json["ids"] == null ? undefined : json["ids"],
    limit: json["limit"] == null ? undefined : json["limit"],
    offset: json["offset"] == null ? undefined : json["offset"],
  };
}

export function CountCompanyOverridesParamsToJSON(
  value?: CountCompanyOverridesParams | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    company_id: value["companyId"],
    company_ids: value["companyIds"],
    feature_id: value["featureId"],
    feature_ids: value["featureIds"],
    ids: value["ids"],
    limit: value["limit"],
    offset: value["offset"],
  };
}
