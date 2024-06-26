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
import type { CrmProductResponseData } from "./CrmProductResponseData";
import {
  CrmProductResponseDataFromJSON,
  CrmProductResponseDataFromJSONTyped,
  CrmProductResponseDataToJSON,
} from "./CrmProductResponseData";

/**
 *
 * @export
 * @interface UpsertCrmProductResponse
 */
export interface UpsertCrmProductResponse {
  /**
   *
   * @type {CrmProductResponseData}
   * @memberof UpsertCrmProductResponse
   */
  data: CrmProductResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof UpsertCrmProductResponse
   */
  params: object;
}

/**
 * Check if a given object implements the UpsertCrmProductResponse interface.
 */
export function instanceOfUpsertCrmProductResponse(
  value: object,
): value is UpsertCrmProductResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function UpsertCrmProductResponseFromJSON(
  json: any,
): UpsertCrmProductResponse {
  return UpsertCrmProductResponseFromJSONTyped(json, false);
}

export function UpsertCrmProductResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UpsertCrmProductResponse {
  if (json == null) {
    return json;
  }
  return {
    data: CrmProductResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function UpsertCrmProductResponseToJSON(
  value?: UpsertCrmProductResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: CrmProductResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
