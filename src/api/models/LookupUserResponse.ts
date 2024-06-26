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
import type { LookupUserParams } from "./LookupUserParams";
import {
  LookupUserParamsFromJSON,
  LookupUserParamsFromJSONTyped,
  LookupUserParamsToJSON,
} from "./LookupUserParams";
import type { UserDetailResponseData } from "./UserDetailResponseData";
import {
  UserDetailResponseDataFromJSON,
  UserDetailResponseDataFromJSONTyped,
  UserDetailResponseDataToJSON,
} from "./UserDetailResponseData";

/**
 *
 * @export
 * @interface LookupUserResponse
 */
export interface LookupUserResponse {
  /**
   *
   * @type {UserDetailResponseData}
   * @memberof LookupUserResponse
   */
  data: UserDetailResponseData;
  /**
   *
   * @type {LookupUserParams}
   * @memberof LookupUserResponse
   */
  params: LookupUserParams;
}

/**
 * Check if a given object implements the LookupUserResponse interface.
 */
export function instanceOfLookupUserResponse(
  value: object,
): value is LookupUserResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function LookupUserResponseFromJSON(json: any): LookupUserResponse {
  return LookupUserResponseFromJSONTyped(json, false);
}

export function LookupUserResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LookupUserResponse {
  if (json == null) {
    return json;
  }
  return {
    data: UserDetailResponseDataFromJSON(json["data"]),
    params: LookupUserParamsFromJSON(json["params"]),
  };
}

export function LookupUserResponseToJSON(
  value?: LookupUserResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: UserDetailResponseDataToJSON(value["data"]),
    params: LookupUserParamsToJSON(value["params"]),
  };
}
