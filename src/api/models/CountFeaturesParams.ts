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
 * @interface CountFeaturesParams
 */
export interface CountFeaturesParams {
  /**
   *
   * @type {Array<string>}
   * @memberof CountFeaturesParams
   */
  ids?: Array<string>;
  /**
   * Page limit (default 100)
   * @type {number}
   * @memberof CountFeaturesParams
   */
  limit?: number;
  /**
   * Page offset (default 0)
   * @type {number}
   * @memberof CountFeaturesParams
   */
  offset?: number;
  /**
   *
   * @type {string}
   * @memberof CountFeaturesParams
   */
  q?: string;
  /**
   * Filter out features that already have a company override for the specified company ID
   * @type {string}
   * @memberof CountFeaturesParams
   */
  withoutCompanyOverrideFor?: string;
  /**
   * Filter out features that already have a plan entitlement for the specified plan ID
   * @type {string}
   * @memberof CountFeaturesParams
   */
  withoutPlanEntitlementFor?: string;
}

/**
 * Check if a given object implements the CountFeaturesParams interface.
 */
export function instanceOfCountFeaturesParams(
  value: object,
): value is CountFeaturesParams {
  return true;
}

export function CountFeaturesParamsFromJSON(json: any): CountFeaturesParams {
  return CountFeaturesParamsFromJSONTyped(json, false);
}

export function CountFeaturesParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountFeaturesParams {
  if (json == null) {
    return json;
  }
  return {
    ids: json["ids"] == null ? undefined : json["ids"],
    limit: json["limit"] == null ? undefined : json["limit"],
    offset: json["offset"] == null ? undefined : json["offset"],
    q: json["q"] == null ? undefined : json["q"],
    withoutCompanyOverrideFor:
      json["without_company_override_for"] == null
        ? undefined
        : json["without_company_override_for"],
    withoutPlanEntitlementFor:
      json["without_plan_entitlement_for"] == null
        ? undefined
        : json["without_plan_entitlement_for"],
  };
}

export function CountFeaturesParamsToJSON(
  value?: CountFeaturesParams | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    ids: value["ids"],
    limit: value["limit"],
    offset: value["offset"],
    q: value["q"],
    without_company_override_for: value["withoutCompanyOverrideFor"],
    without_plan_entitlement_for: value["withoutPlanEntitlementFor"],
  };
}
