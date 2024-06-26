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
import type { CountCompanyOverridesParams } from "./CountCompanyOverridesParams";
import {
  CountCompanyOverridesParamsFromJSON,
  CountCompanyOverridesParamsFromJSONTyped,
  CountCompanyOverridesParamsToJSON,
} from "./CountCompanyOverridesParams";
import type { CountResponse } from "./CountResponse";
import {
  CountResponseFromJSON,
  CountResponseFromJSONTyped,
  CountResponseToJSON,
} from "./CountResponse";

/**
 *
 * @export
 * @interface CountCompanyOverridesResponse
 */
export interface CountCompanyOverridesResponse {
  /**
   *
   * @type {CountResponse}
   * @memberof CountCompanyOverridesResponse
   */
  data: CountResponse;
  /**
   *
   * @type {CountCompanyOverridesParams}
   * @memberof CountCompanyOverridesResponse
   */
  params: CountCompanyOverridesParams;
}

/**
 * Check if a given object implements the CountCompanyOverridesResponse interface.
 */
export function instanceOfCountCompanyOverridesResponse(
  value: object,
): value is CountCompanyOverridesResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function CountCompanyOverridesResponseFromJSON(
  json: any,
): CountCompanyOverridesResponse {
  return CountCompanyOverridesResponseFromJSONTyped(json, false);
}

export function CountCompanyOverridesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountCompanyOverridesResponse {
  if (json == null) {
    return json;
  }
  return {
    data: CountResponseFromJSON(json["data"]),
    params: CountCompanyOverridesParamsFromJSON(json["params"]),
  };
}

export function CountCompanyOverridesResponseToJSON(
  value?: CountCompanyOverridesResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: CountResponseToJSON(value["data"]),
    params: CountCompanyOverridesParamsToJSON(value["params"]),
  };
}
