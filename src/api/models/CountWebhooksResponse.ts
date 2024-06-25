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
import type { CountWebhooksParams } from "./CountWebhooksParams";
import {
  CountWebhooksParamsFromJSON,
  CountWebhooksParamsFromJSONTyped,
  CountWebhooksParamsToJSON,
} from "./CountWebhooksParams";

/**
 *
 * @export
 * @interface CountWebhooksResponse
 */
export interface CountWebhooksResponse {
  /**
   *
   * @type {CountResponse}
   * @memberof CountWebhooksResponse
   */
  data: CountResponse;
  /**
   *
   * @type {CountWebhooksParams}
   * @memberof CountWebhooksResponse
   */
  params: CountWebhooksParams;
}

/**
 * Check if a given object implements the CountWebhooksResponse interface.
 */
export function instanceOfCountWebhooksResponse(
  value: object,
): value is CountWebhooksResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function CountWebhooksResponseFromJSON(
  json: any,
): CountWebhooksResponse {
  return CountWebhooksResponseFromJSONTyped(json, false);
}

export function CountWebhooksResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountWebhooksResponse {
  if (json == null) {
    return json;
  }
  return {
    data: CountResponseFromJSON(json["data"]),
    params: CountWebhooksParamsFromJSON(json["params"]),
  };
}

export function CountWebhooksResponseToJSON(
  value?: CountWebhooksResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: CountResponseToJSON(value["data"]),
    params: CountWebhooksParamsToJSON(value["params"]),
  };
}
