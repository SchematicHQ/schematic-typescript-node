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
import type { ApiKeyResponseData } from "./ApiKeyResponseData";
import {
  ApiKeyResponseDataFromJSON,
  ApiKeyResponseDataFromJSONTyped,
  ApiKeyResponseDataToJSON,
} from "./ApiKeyResponseData";
import type { ListApiKeysParams } from "./ListApiKeysParams";
import {
  ListApiKeysParamsFromJSON,
  ListApiKeysParamsFromJSONTyped,
  ListApiKeysParamsToJSON,
} from "./ListApiKeysParams";

/**
 *
 * @export
 * @interface ListApiKeysResponse
 */
export interface ListApiKeysResponse {
  /**
   * The returned resources
   * @type {Array<ApiKeyResponseData>}
   * @memberof ListApiKeysResponse
   */
  data: Array<ApiKeyResponseData>;
  /**
   *
   * @type {ListApiKeysParams}
   * @memberof ListApiKeysResponse
   */
  params: ListApiKeysParams;
}

/**
 * Check if a given object implements the ListApiKeysResponse interface.
 */
export function instanceOfListApiKeysResponse(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("params" in value)) return false;
  return true;
}

export function ListApiKeysResponseFromJSON(json: any): ListApiKeysResponse {
  return ListApiKeysResponseFromJSONTyped(json, false);
}

export function ListApiKeysResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListApiKeysResponse {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(ApiKeyResponseDataFromJSON),
    params: ListApiKeysParamsFromJSON(json["params"]),
  };
}

export function ListApiKeysResponseToJSON(
  value?: ListApiKeysResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: (value["data"] as Array<any>).map(ApiKeyResponseDataToJSON),
    params: ListApiKeysParamsToJSON(value["params"]),
  };
}
