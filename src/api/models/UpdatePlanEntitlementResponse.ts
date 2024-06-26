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
 * @interface UpdatePlanEntitlementResponse
 */
export interface UpdatePlanEntitlementResponse {
  /**
   *
   * @type {PlanEntitlementResponseData}
   * @memberof UpdatePlanEntitlementResponse
   */
  data: PlanEntitlementResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof UpdatePlanEntitlementResponse
   */
  params: object;
}

/**
 * Check if a given object implements the UpdatePlanEntitlementResponse interface.
 */
export function instanceOfUpdatePlanEntitlementResponse(
  value: object,
): value is UpdatePlanEntitlementResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function UpdatePlanEntitlementResponseFromJSON(
  json: any,
): UpdatePlanEntitlementResponse {
  return UpdatePlanEntitlementResponseFromJSONTyped(json, false);
}

export function UpdatePlanEntitlementResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UpdatePlanEntitlementResponse {
  if (json == null) {
    return json;
  }
  return {
    data: PlanEntitlementResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function UpdatePlanEntitlementResponseToJSON(
  value?: UpdatePlanEntitlementResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: PlanEntitlementResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
