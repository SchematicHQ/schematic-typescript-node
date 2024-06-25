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
import type { FlagDetailResponseData } from "./FlagDetailResponseData";
import {
  FlagDetailResponseDataFromJSON,
  FlagDetailResponseDataFromJSONTyped,
  FlagDetailResponseDataToJSON,
} from "./FlagDetailResponseData";

/**
 *
 * @export
 * @interface GetFlagResponse
 */
export interface GetFlagResponse {
  /**
   *
   * @type {FlagDetailResponseData}
   * @memberof GetFlagResponse
   */
  data: FlagDetailResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof GetFlagResponse
   */
  params: object;
}

/**
 * Check if a given object implements the GetFlagResponse interface.
 */
export function instanceOfGetFlagResponse(
  value: object,
): value is GetFlagResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function GetFlagResponseFromJSON(json: any): GetFlagResponse {
  return GetFlagResponseFromJSONTyped(json, false);
}

export function GetFlagResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetFlagResponse {
  if (json == null) {
    return json;
  }
  return {
    data: FlagDetailResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function GetFlagResponseToJSON(value?: GetFlagResponse | null): any {
  if (value == null) {
    return value;
  }
  return {
    data: FlagDetailResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
