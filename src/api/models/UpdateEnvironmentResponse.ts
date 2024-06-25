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
import type { EnvironmentResponseData } from "./EnvironmentResponseData";
import {
  EnvironmentResponseDataFromJSON,
  EnvironmentResponseDataFromJSONTyped,
  EnvironmentResponseDataToJSON,
} from "./EnvironmentResponseData";

/**
 *
 * @export
 * @interface UpdateEnvironmentResponse
 */
export interface UpdateEnvironmentResponse {
  /**
   *
   * @type {EnvironmentResponseData}
   * @memberof UpdateEnvironmentResponse
   */
  data: EnvironmentResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof UpdateEnvironmentResponse
   */
  params: object;
}

/**
 * Check if a given object implements the UpdateEnvironmentResponse interface.
 */
export function instanceOfUpdateEnvironmentResponse(
  value: object,
): value is UpdateEnvironmentResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function UpdateEnvironmentResponseFromJSON(
  json: any,
): UpdateEnvironmentResponse {
  return UpdateEnvironmentResponseFromJSONTyped(json, false);
}

export function UpdateEnvironmentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UpdateEnvironmentResponse {
  if (json == null) {
    return json;
  }
  return {
    data: EnvironmentResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function UpdateEnvironmentResponseToJSON(
  value?: UpdateEnvironmentResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: EnvironmentResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
