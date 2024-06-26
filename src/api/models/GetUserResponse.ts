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
import type { UserDetailResponseData } from "./UserDetailResponseData";
import {
  UserDetailResponseDataFromJSON,
  UserDetailResponseDataFromJSONTyped,
  UserDetailResponseDataToJSON,
} from "./UserDetailResponseData";

/**
 *
 * @export
 * @interface GetUserResponse
 */
export interface GetUserResponse {
  /**
   *
   * @type {UserDetailResponseData}
   * @memberof GetUserResponse
   */
  data: UserDetailResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof GetUserResponse
   */
  params: object;
}

/**
 * Check if a given object implements the GetUserResponse interface.
 */
export function instanceOfGetUserResponse(
  value: object,
): value is GetUserResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function GetUserResponseFromJSON(json: any): GetUserResponse {
  return GetUserResponseFromJSONTyped(json, false);
}

export function GetUserResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetUserResponse {
  if (json == null) {
    return json;
  }
  return {
    data: UserDetailResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function GetUserResponseToJSON(value?: GetUserResponse | null): any {
  if (value == null) {
    return value;
  }
  return {
    data: UserDetailResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
