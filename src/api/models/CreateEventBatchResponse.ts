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
import type { RawEventBatchResponseData } from "./RawEventBatchResponseData";
import {
  RawEventBatchResponseDataFromJSON,
  RawEventBatchResponseDataFromJSONTyped,
  RawEventBatchResponseDataToJSON,
} from "./RawEventBatchResponseData";

/**
 *
 * @export
 * @interface CreateEventBatchResponse
 */
export interface CreateEventBatchResponse {
  /**
   *
   * @type {RawEventBatchResponseData}
   * @memberof CreateEventBatchResponse
   */
  data: RawEventBatchResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof CreateEventBatchResponse
   */
  params: object;
}

/**
 * Check if a given object implements the CreateEventBatchResponse interface.
 */
export function instanceOfCreateEventBatchResponse(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("params" in value)) return false;
  return true;
}

export function CreateEventBatchResponseFromJSON(
  json: any,
): CreateEventBatchResponse {
  return CreateEventBatchResponseFromJSONTyped(json, false);
}

export function CreateEventBatchResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateEventBatchResponse {
  if (json == null) {
    return json;
  }
  return {
    data: RawEventBatchResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function CreateEventBatchResponseToJSON(
  value?: CreateEventBatchResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: RawEventBatchResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
