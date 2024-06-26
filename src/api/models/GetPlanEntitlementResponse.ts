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
import type { PlanEntitlementResponseData } from "./PlanEntitlementResponseData";
import {
  PlanEntitlementResponseDataFromJSON,
  PlanEntitlementResponseDataFromJSONTyped,
  PlanEntitlementResponseDataToJSON,
} from "./PlanEntitlementResponseData";

/**
 *
 * @export
 * @interface GetPlanEntitlementResponse
 */
export interface GetPlanEntitlementResponse {
  /**
   *
   * @type {PlanEntitlementResponseData}
   * @memberof GetPlanEntitlementResponse
   */
  data: PlanEntitlementResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof GetPlanEntitlementResponse
   */
  params: object;
}

/**
 * Check if a given object implements the GetPlanEntitlementResponse interface.
 */
export function instanceOfGetPlanEntitlementResponse(
  value: object,
): value is GetPlanEntitlementResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function GetPlanEntitlementResponseFromJSON(
  json: any,
): GetPlanEntitlementResponse {
  return GetPlanEntitlementResponseFromJSONTyped(json, false);
}

export function GetPlanEntitlementResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPlanEntitlementResponse {
  if (json == null) {
    return json;
  }
  return {
    data: PlanEntitlementResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function GetPlanEntitlementResponseToJSON(
  value?: GetPlanEntitlementResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: PlanEntitlementResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
