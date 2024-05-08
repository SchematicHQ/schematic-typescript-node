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
import type { EnvironmentDetailResponseData } from "./EnvironmentDetailResponseData";
import {
  EnvironmentDetailResponseDataFromJSON,
  EnvironmentDetailResponseDataFromJSONTyped,
  EnvironmentDetailResponseDataToJSON,
} from "./EnvironmentDetailResponseData";

/**
 *
 * @export
 * @interface CreateEnvironmentResponse
 */
export interface CreateEnvironmentResponse {
  /**
   *
   * @type {EnvironmentDetailResponseData}
   * @memberof CreateEnvironmentResponse
   */
  data: EnvironmentDetailResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof CreateEnvironmentResponse
   */
  params: object;
}

/**
 * Check if a given object implements the CreateEnvironmentResponse interface.
 */
export function instanceOfCreateEnvironmentResponse(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("params" in value)) return false;
  return true;
}

export function CreateEnvironmentResponseFromJSON(
  json: any,
): CreateEnvironmentResponse {
  return CreateEnvironmentResponseFromJSONTyped(json, false);
}

export function CreateEnvironmentResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateEnvironmentResponse {
  if (json == null) {
    return json;
  }
  return {
    data: EnvironmentDetailResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function CreateEnvironmentResponseToJSON(
  value?: CreateEnvironmentResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: EnvironmentDetailResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
