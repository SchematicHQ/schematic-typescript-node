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
 * @interface ListFeaturesParams
 */
export interface ListFeaturesParams {
  /**
   *
   * @type {Array<string>}
   * @memberof ListFeaturesParams
   */
  ids?: Array<string>;
  /**
   *
   * @type {number}
   * @memberof ListFeaturesParams
   */
  limit?: number;
  /**
   *
   * @type {number}
   * @memberof ListFeaturesParams
   */
  offset?: number;
  /**
   *
   * @type {string}
   * @memberof ListFeaturesParams
   */
  q?: string;
  /**
   *
   * @type {string}
   * @memberof ListFeaturesParams
   */
  withoutCompanyOverrideFor?: string;
  /**
   *
   * @type {string}
   * @memberof ListFeaturesParams
   */
  withoutPlanEntitlementFor?: string;
}

/**
 * Check if a given object implements the ListFeaturesParams interface.
 */
export function instanceOfListFeaturesParams(value: object): boolean {
  return true;
}

export function ListFeaturesParamsFromJSON(json: any): ListFeaturesParams {
  return ListFeaturesParamsFromJSONTyped(json, false);
}

export function ListFeaturesParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListFeaturesParams {
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

export function ListFeaturesParamsToJSON(
  value?: ListFeaturesParams | null,
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
