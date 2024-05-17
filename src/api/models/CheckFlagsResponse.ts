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
import type { CheckFlagsResponseData } from "./CheckFlagsResponseData";
import {
  CheckFlagsResponseDataFromJSON,
  CheckFlagsResponseDataFromJSONTyped,
  CheckFlagsResponseDataToJSON,
} from "./CheckFlagsResponseData";

/**
 *
 * @export
 * @interface CheckFlagsResponse
 */
export interface CheckFlagsResponse {
  /**
   *
   * @type {CheckFlagsResponseData}
   * @memberof CheckFlagsResponse
   */
  data: CheckFlagsResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof CheckFlagsResponse
   */
  params: object;
}

/**
 * Check if a given object implements the CheckFlagsResponse interface.
 */
export function instanceOfCheckFlagsResponse(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("params" in value)) return false;
  return true;
}

export function CheckFlagsResponseFromJSON(json: any): CheckFlagsResponse {
  return CheckFlagsResponseFromJSONTyped(json, false);
}

export function CheckFlagsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CheckFlagsResponse {
  if (json == null) {
    return json;
  }
  return {
    data: CheckFlagsResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function CheckFlagsResponseToJSON(
  value?: CheckFlagsResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: CheckFlagsResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
