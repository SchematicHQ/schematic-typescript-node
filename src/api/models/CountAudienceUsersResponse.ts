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
import type { CountResponse } from "./CountResponse";
import {
  CountResponseFromJSON,
  CountResponseFromJSONTyped,
  CountResponseToJSON,
} from "./CountResponse";

/**
 *
 * @export
 * @interface CountAudienceUsersResponse
 */
export interface CountAudienceUsersResponse {
  /**
   *
   * @type {CountResponse}
   * @memberof CountAudienceUsersResponse
   */
  data: CountResponse;
  /**
   * Input parameters
   * @type {object}
   * @memberof CountAudienceUsersResponse
   */
  params: object;
}

/**
 * Check if a given object implements the CountAudienceUsersResponse interface.
 */
export function instanceOfCountAudienceUsersResponse(
  value: object,
): value is CountAudienceUsersResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function CountAudienceUsersResponseFromJSON(
  json: any,
): CountAudienceUsersResponse {
  return CountAudienceUsersResponseFromJSONTyped(json, false);
}

export function CountAudienceUsersResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountAudienceUsersResponse {
  if (json == null) {
    return json;
  }
  return {
    data: CountResponseFromJSON(json["data"]),
    params: json["params"],
  };
}

export function CountAudienceUsersResponseToJSON(
  value?: CountAudienceUsersResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: CountResponseToJSON(value["data"]),
    params: value["params"],
  };
}
