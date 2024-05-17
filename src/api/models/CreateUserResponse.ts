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
 * @interface CreateUserResponse
 */
export interface CreateUserResponse {
  /**
   *
   * @type {UserDetailResponseData}
   * @memberof CreateUserResponse
   */
  data: UserDetailResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof CreateUserResponse
   */
  params: object;
}

/**
 * Check if a given object implements the CreateUserResponse interface.
 */
export function instanceOfCreateUserResponse(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("params" in value)) return false;
  return true;
}

export function CreateUserResponseFromJSON(json: any): CreateUserResponse {
  return CreateUserResponseFromJSONTyped(json, false);
}

export function CreateUserResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateUserResponse {
  if (json == null) {
    return json;
  }
  return {
    data: UserDetailResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function CreateUserResponseToJSON(
  value?: CreateUserResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: UserDetailResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
