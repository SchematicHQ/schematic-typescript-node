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
import type { WebhookEventDetailResponseData } from "./WebhookEventDetailResponseData";
import {
  WebhookEventDetailResponseDataFromJSON,
  WebhookEventDetailResponseDataFromJSONTyped,
  WebhookEventDetailResponseDataToJSON,
} from "./WebhookEventDetailResponseData";

/**
 *
 * @export
 * @interface GetWebhookEventResponse
 */
export interface GetWebhookEventResponse {
  /**
   *
   * @type {WebhookEventDetailResponseData}
   * @memberof GetWebhookEventResponse
   */
  data: WebhookEventDetailResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof GetWebhookEventResponse
   */
  params: object;
}

/**
 * Check if a given object implements the GetWebhookEventResponse interface.
 */
export function instanceOfGetWebhookEventResponse(
  value: object,
): value is GetWebhookEventResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function GetWebhookEventResponseFromJSON(
  json: any,
): GetWebhookEventResponse {
  return GetWebhookEventResponseFromJSONTyped(json, false);
}

export function GetWebhookEventResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetWebhookEventResponse {
  if (json == null) {
    return json;
  }
  return {
    data: WebhookEventDetailResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function GetWebhookEventResponseToJSON(
  value?: GetWebhookEventResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: WebhookEventDetailResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
