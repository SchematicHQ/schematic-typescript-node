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
import type { ListWebhookEventsParams } from "./ListWebhookEventsParams";
import {
  ListWebhookEventsParamsFromJSON,
  ListWebhookEventsParamsFromJSONTyped,
  ListWebhookEventsParamsToJSON,
} from "./ListWebhookEventsParams";
import type { WebhookEventDetailResponseData } from "./WebhookEventDetailResponseData";
import {
  WebhookEventDetailResponseDataFromJSON,
  WebhookEventDetailResponseDataFromJSONTyped,
  WebhookEventDetailResponseDataToJSON,
} from "./WebhookEventDetailResponseData";

/**
 *
 * @export
 * @interface ListWebhookEventsResponse
 */
export interface ListWebhookEventsResponse {
  /**
   * The returned resources
   * @type {Array<WebhookEventDetailResponseData>}
   * @memberof ListWebhookEventsResponse
   */
  data: Array<WebhookEventDetailResponseData>;
  /**
   *
   * @type {ListWebhookEventsParams}
   * @memberof ListWebhookEventsResponse
   */
  params: ListWebhookEventsParams;
}

/**
 * Check if a given object implements the ListWebhookEventsResponse interface.
 */
export function instanceOfListWebhookEventsResponse(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("params" in value)) return false;
  return true;
}

export function ListWebhookEventsResponseFromJSON(
  json: any,
): ListWebhookEventsResponse {
  return ListWebhookEventsResponseFromJSONTyped(json, false);
}

export function ListWebhookEventsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListWebhookEventsResponse {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(
      WebhookEventDetailResponseDataFromJSON,
    ),
    params: ListWebhookEventsParamsFromJSON(json["params"]),
  };
}

export function ListWebhookEventsResponseToJSON(
  value?: ListWebhookEventsResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: (value["data"] as Array<any>).map(
      WebhookEventDetailResponseDataToJSON,
    ),
    params: ListWebhookEventsParamsToJSON(value["params"]),
  };
}
