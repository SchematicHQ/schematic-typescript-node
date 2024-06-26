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
import type { CountCompaniesParams } from "./CountCompaniesParams";
import {
  CountCompaniesParamsFromJSON,
  CountCompaniesParamsFromJSONTyped,
  CountCompaniesParamsToJSON,
} from "./CountCompaniesParams";
import type { CountResponse } from "./CountResponse";
import {
  CountResponseFromJSON,
  CountResponseFromJSONTyped,
  CountResponseToJSON,
} from "./CountResponse";

/**
 *
 * @export
 * @interface CountCompaniesResponse
 */
export interface CountCompaniesResponse {
  /**
   *
   * @type {CountResponse}
   * @memberof CountCompaniesResponse
   */
  data: CountResponse;
  /**
   *
   * @type {CountCompaniesParams}
   * @memberof CountCompaniesResponse
   */
  params: CountCompaniesParams;
}

/**
 * Check if a given object implements the CountCompaniesResponse interface.
 */
export function instanceOfCountCompaniesResponse(
  value: object,
): value is CountCompaniesResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function CountCompaniesResponseFromJSON(
  json: any,
): CountCompaniesResponse {
  return CountCompaniesResponseFromJSONTyped(json, false);
}

export function CountCompaniesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountCompaniesResponse {
  if (json == null) {
    return json;
  }
  return {
    data: CountResponseFromJSON(json["data"]),
    params: CountCompaniesParamsFromJSON(json["params"]),
  };
}

export function CountCompaniesResponseToJSON(
  value?: CountCompaniesResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: CountResponseToJSON(value["data"]),
    params: CountCompaniesParamsToJSON(value["params"]),
  };
}
