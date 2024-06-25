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
import type { CreateEventRequestBody } from "./CreateEventRequestBody";
import {
  CreateEventRequestBodyFromJSON,
  CreateEventRequestBodyFromJSONTyped,
  CreateEventRequestBodyToJSON,
} from "./CreateEventRequestBody";

/**
 *
 * @export
 * @interface CreateEventBatchRequestBody
 */
export interface CreateEventBatchRequestBody {
  /**
   *
   * @type {Array<CreateEventRequestBody>}
   * @memberof CreateEventBatchRequestBody
   */
  events: Array<CreateEventRequestBody>;
}

/**
 * Check if a given object implements the CreateEventBatchRequestBody interface.
 */
export function instanceOfCreateEventBatchRequestBody(
  value: object,
): value is CreateEventBatchRequestBody {
  if (!("events" in value) || value["events"] === undefined) return false;
  return true;
}

export function CreateEventBatchRequestBodyFromJSON(
  json: any,
): CreateEventBatchRequestBody {
  return CreateEventBatchRequestBodyFromJSONTyped(json, false);
}

export function CreateEventBatchRequestBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateEventBatchRequestBody {
  if (json == null) {
    return json;
  }
  return {
    events: (json["events"] as Array<any>).map(CreateEventRequestBodyFromJSON),
  };
}

export function CreateEventBatchRequestBodyToJSON(
  value?: CreateEventBatchRequestBody | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    events: (value["events"] as Array<any>).map(CreateEventRequestBodyToJSON),
  };
}
