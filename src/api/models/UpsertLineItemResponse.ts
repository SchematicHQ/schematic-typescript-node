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
import type { CrmLineItemResponseData } from "./CrmLineItemResponseData";
import {
  CrmLineItemResponseDataFromJSON,
  CrmLineItemResponseDataFromJSONTyped,
  CrmLineItemResponseDataToJSON,
} from "./CrmLineItemResponseData";

/**
 *
 * @export
 * @interface UpsertLineItemResponse
 */
export interface UpsertLineItemResponse {
  /**
   *
   * @type {CrmLineItemResponseData}
   * @memberof UpsertLineItemResponse
   */
  data: CrmLineItemResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof UpsertLineItemResponse
   */
  params: object;
}

/**
 * Check if a given object implements the UpsertLineItemResponse interface.
 */
export function instanceOfUpsertLineItemResponse(
  value: object,
): value is UpsertLineItemResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function UpsertLineItemResponseFromJSON(
  json: any,
): UpsertLineItemResponse {
  return UpsertLineItemResponseFromJSONTyped(json, false);
}

export function UpsertLineItemResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UpsertLineItemResponse {
  if (json == null) {
    return json;
  }
  return {
    data: CrmLineItemResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function UpsertLineItemResponseToJSON(
  value?: UpsertLineItemResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: CrmLineItemResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
