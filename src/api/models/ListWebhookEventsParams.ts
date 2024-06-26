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
/**
 * Input parameters
 * @export
 * @interface ListWebhookEventsParams
 */
export interface ListWebhookEventsParams {
  /**
   *
   * @type {Array<string>}
   * @memberof ListWebhookEventsParams
   */
  ids?: Array<string>;
  /**
   * Page limit (default 100)
   * @type {number}
   * @memberof ListWebhookEventsParams
   */
  limit?: number;
  /**
   * Page offset (default 0)
   * @type {number}
   * @memberof ListWebhookEventsParams
   */
  offset?: number;
  /**
   *
   * @type {string}
   * @memberof ListWebhookEventsParams
   */
  q?: string;
  /**
   *
   * @type {string}
   * @memberof ListWebhookEventsParams
   */
  webhookId?: string;
}

/**
 * Check if a given object implements the ListWebhookEventsParams interface.
 */
export function instanceOfListWebhookEventsParams(
  value: object,
): value is ListWebhookEventsParams {
  return true;
}

export function ListWebhookEventsParamsFromJSON(
  json: any,
): ListWebhookEventsParams {
  return ListWebhookEventsParamsFromJSONTyped(json, false);
}

export function ListWebhookEventsParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListWebhookEventsParams {
  if (json == null) {
    return json;
  }
  return {
    ids: json["ids"] == null ? undefined : json["ids"],
    limit: json["limit"] == null ? undefined : json["limit"],
    offset: json["offset"] == null ? undefined : json["offset"],
    q: json["q"] == null ? undefined : json["q"],
    webhookId: json["webhook_id"] == null ? undefined : json["webhook_id"],
  };
}

export function ListWebhookEventsParamsToJSON(
  value?: ListWebhookEventsParams | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    ids: value["ids"],
    limit: value["limit"],
    offset: value["offset"],
    q: value["q"],
    webhook_id: value["webhookId"],
  };
}
