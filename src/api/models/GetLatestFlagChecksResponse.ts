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
import type { GetLatestFlagChecksParams } from "./GetLatestFlagChecksParams";
import {
  GetLatestFlagChecksParamsFromJSON,
  GetLatestFlagChecksParamsFromJSONTyped,
  GetLatestFlagChecksParamsToJSON,
} from "./GetLatestFlagChecksParams";
import type { FlagCheckLogResponseData } from "./FlagCheckLogResponseData";
import {
  FlagCheckLogResponseDataFromJSON,
  FlagCheckLogResponseDataFromJSONTyped,
  FlagCheckLogResponseDataToJSON,
} from "./FlagCheckLogResponseData";

/**
 *
 * @export
 * @interface GetLatestFlagChecksResponse
 */
export interface GetLatestFlagChecksResponse {
  /**
   * The returned resources
   * @type {Array<FlagCheckLogResponseData>}
   * @memberof GetLatestFlagChecksResponse
   */
  data: Array<FlagCheckLogResponseData>;
  /**
   *
   * @type {GetLatestFlagChecksParams}
   * @memberof GetLatestFlagChecksResponse
   */
  params: GetLatestFlagChecksParams;
}

/**
 * Check if a given object implements the GetLatestFlagChecksResponse interface.
 */
export function instanceOfGetLatestFlagChecksResponse(
  value: object,
): value is GetLatestFlagChecksResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function GetLatestFlagChecksResponseFromJSON(
  json: any,
): GetLatestFlagChecksResponse {
  return GetLatestFlagChecksResponseFromJSONTyped(json, false);
}

export function GetLatestFlagChecksResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetLatestFlagChecksResponse {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(FlagCheckLogResponseDataFromJSON),
    params: GetLatestFlagChecksParamsFromJSON(json["params"]),
  };
}

export function GetLatestFlagChecksResponseToJSON(
  value?: GetLatestFlagChecksResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: (value["data"] as Array<any>).map(FlagCheckLogResponseDataToJSON),
    params: GetLatestFlagChecksParamsToJSON(value["params"]),
  };
}
