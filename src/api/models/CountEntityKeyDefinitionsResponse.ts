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
import type { CountEntityKeyDefinitionsParams } from "./CountEntityKeyDefinitionsParams";
import {
  CountEntityKeyDefinitionsParamsFromJSON,
  CountEntityKeyDefinitionsParamsFromJSONTyped,
  CountEntityKeyDefinitionsParamsToJSON,
} from "./CountEntityKeyDefinitionsParams";
import type { CountResponse } from "./CountResponse";
import {
  CountResponseFromJSON,
  CountResponseFromJSONTyped,
  CountResponseToJSON,
} from "./CountResponse";

/**
 *
 * @export
 * @interface CountEntityKeyDefinitionsResponse
 */
export interface CountEntityKeyDefinitionsResponse {
  /**
   *
   * @type {CountResponse}
   * @memberof CountEntityKeyDefinitionsResponse
   */
  data: CountResponse;
  /**
   *
   * @type {CountEntityKeyDefinitionsParams}
   * @memberof CountEntityKeyDefinitionsResponse
   */
  params: CountEntityKeyDefinitionsParams;
}

/**
 * Check if a given object implements the CountEntityKeyDefinitionsResponse interface.
 */
export function instanceOfCountEntityKeyDefinitionsResponse(
  value: object,
): boolean {
  if (!("data" in value)) return false;
  if (!("params" in value)) return false;
  return true;
}

export function CountEntityKeyDefinitionsResponseFromJSON(
  json: any,
): CountEntityKeyDefinitionsResponse {
  return CountEntityKeyDefinitionsResponseFromJSONTyped(json, false);
}

export function CountEntityKeyDefinitionsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountEntityKeyDefinitionsResponse {
  if (json == null) {
    return json;
  }
  return {
    data: CountResponseFromJSON(json["data"]),
    params: CountEntityKeyDefinitionsParamsFromJSON(json["params"]),
  };
}

export function CountEntityKeyDefinitionsResponseToJSON(
  value?: CountEntityKeyDefinitionsResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: CountResponseToJSON(value["data"]),
    params: CountEntityKeyDefinitionsParamsToJSON(value["params"]),
  };
}
