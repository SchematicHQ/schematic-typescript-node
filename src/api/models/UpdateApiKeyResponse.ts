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

/**
 *
 * @export
 * @interface UpdateApiKeyResponse
 */
export interface UpdateApiKeyResponse {
  /**
   *
   * @type {ApiKeyResponseData}
   * @memberof UpdateApiKeyResponse
   */
  data: ApiKeyResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof UpdateApiKeyResponse
   */
  params: object;
}

/**
 * Check if a given object implements the UpdateApiKeyResponse interface.
 */
export function instanceOfUpdateApiKeyResponse(
  value: object,
): value is UpdateApiKeyResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function UpdateApiKeyResponseFromJSON(json: any): UpdateApiKeyResponse {
  return UpdateApiKeyResponseFromJSONTyped(json, false);
}

export function UpdateApiKeyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UpdateApiKeyResponse {
  if (json == null) {
    return json;
  }
  return {
    data: ApiKeyResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function UpdateApiKeyResponseToJSON(
  value?: UpdateApiKeyResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: ApiKeyResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
