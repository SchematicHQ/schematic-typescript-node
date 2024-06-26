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
import type { CountPlanEntitlementsParams } from "./CountPlanEntitlementsParams";
import {
  CountPlanEntitlementsParamsFromJSON,
  CountPlanEntitlementsParamsFromJSONTyped,
  CountPlanEntitlementsParamsToJSON,
} from "./CountPlanEntitlementsParams";
import type { CountResponse } from "./CountResponse";
import {
  CountResponseFromJSON,
  CountResponseFromJSONTyped,
  CountResponseToJSON,
} from "./CountResponse";

/**
 *
 * @export
 * @interface CountPlanEntitlementsResponse
 */
export interface CountPlanEntitlementsResponse {
  /**
   *
   * @type {CountResponse}
   * @memberof CountPlanEntitlementsResponse
   */
  data: CountResponse;
  /**
   *
   * @type {CountPlanEntitlementsParams}
   * @memberof CountPlanEntitlementsResponse
   */
  params: CountPlanEntitlementsParams;
}

/**
 * Check if a given object implements the CountPlanEntitlementsResponse interface.
 */
export function instanceOfCountPlanEntitlementsResponse(
  value: object,
): value is CountPlanEntitlementsResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function CountPlanEntitlementsResponseFromJSON(
  json: any,
): CountPlanEntitlementsResponse {
  return CountPlanEntitlementsResponseFromJSONTyped(json, false);
}

export function CountPlanEntitlementsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountPlanEntitlementsResponse {
  if (json == null) {
    return json;
  }
  return {
    data: CountResponseFromJSON(json["data"]),
    params: CountPlanEntitlementsParamsFromJSON(json["params"]),
  };
}

export function CountPlanEntitlementsResponseToJSON(
  value?: CountPlanEntitlementsResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: CountResponseToJSON(value["data"]),
    params: CountPlanEntitlementsParamsToJSON(value["params"]),
  };
}
