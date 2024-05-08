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
import type { UserResponseData } from "./UserResponseData";
import {
  UserResponseDataFromJSON,
  UserResponseDataFromJSONTyped,
  UserResponseDataToJSON,
} from "./UserResponseData";

/**
 *
 * @export
 * @interface DeleteUserByKeysResponse
 */
export interface DeleteUserByKeysResponse {
  /**
   *
   * @type {UserResponseData}
   * @memberof DeleteUserByKeysResponse
   */
  data: UserResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof DeleteUserByKeysResponse
   */
  params: object;
}

/**
 * Check if a given object implements the DeleteUserByKeysResponse interface.
 */
export function instanceOfDeleteUserByKeysResponse(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("params" in value)) return false;
  return true;
}

export function DeleteUserByKeysResponseFromJSON(
  json: any,
): DeleteUserByKeysResponse {
  return DeleteUserByKeysResponseFromJSONTyped(json, false);
}

export function DeleteUserByKeysResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DeleteUserByKeysResponse {
  if (json == null) {
    return json;
  }
  return {
    data: UserResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function DeleteUserByKeysResponseToJSON(
  value?: DeleteUserByKeysResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: UserResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
