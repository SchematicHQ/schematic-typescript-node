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
import type { RawEventResponseData } from "./RawEventResponseData";
import {
  RawEventResponseDataFromJSON,
  RawEventResponseDataFromJSONTyped,
  RawEventResponseDataToJSON,
} from "./RawEventResponseData";

/**
 * The created resource
 * @export
 * @interface RawEventBatchResponseData
 */
export interface RawEventBatchResponseData {
  /**
   *
   * @type {Array<RawEventResponseData>}
   * @memberof RawEventBatchResponseData
   */
  events: Array<RawEventResponseData>;
}

/**
 * Check if a given object implements the RawEventBatchResponseData interface.
 */
export function instanceOfRawEventBatchResponseData(
  value: object,
): value is RawEventBatchResponseData {
  if (!("events" in value) || value["events"] === undefined) return false;
  return true;
}

export function RawEventBatchResponseDataFromJSON(
  json: any,
): RawEventBatchResponseData {
  return RawEventBatchResponseDataFromJSONTyped(json, false);
}

export function RawEventBatchResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RawEventBatchResponseData {
  if (json == null) {
    return json;
  }
  return {
    events: (json["events"] as Array<any>).map(RawEventResponseDataFromJSON),
  };
}

export function RawEventBatchResponseDataToJSON(
  value?: RawEventBatchResponseData | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    events: (value["events"] as Array<any>).map(RawEventResponseDataToJSON),
  };
}
