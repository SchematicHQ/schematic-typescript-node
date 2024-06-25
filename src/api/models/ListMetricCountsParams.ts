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
 * @interface ListMetricCountsParams
 */
export interface ListMetricCountsParams {
  /**
   *
   * @type {string}
   * @memberof ListMetricCountsParams
   */
  companyId?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ListMetricCountsParams
   */
  companyIds?: Array<string>;
  /**
   *
   * @type {Date}
   * @memberof ListMetricCountsParams
   */
  endTime?: Date;
  /**
   *
   * @type {string}
   * @memberof ListMetricCountsParams
   */
  eventSubtype?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ListMetricCountsParams
   */
  eventSubtypes?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof ListMetricCountsParams
   */
  grouping?: string;
  /**
   * Page limit (default 100)
   * @type {number}
   * @memberof ListMetricCountsParams
   */
  limit?: number;
  /**
   * Page offset (default 0)
   * @type {number}
   * @memberof ListMetricCountsParams
   */
  offset?: number;
  /**
   *
   * @type {Date}
   * @memberof ListMetricCountsParams
   */
  startTime?: Date;
  /**
   *
   * @type {string}
   * @memberof ListMetricCountsParams
   */
  userId?: string;
}

/**
 * Check if a given object implements the ListMetricCountsParams interface.
 */
export function instanceOfListMetricCountsParams(
  value: object,
): value is ListMetricCountsParams {
  return true;
}

export function ListMetricCountsParamsFromJSON(
  json: any,
): ListMetricCountsParams {
  return ListMetricCountsParamsFromJSONTyped(json, false);
}

export function ListMetricCountsParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListMetricCountsParams {
  if (json == null) {
    return json;
  }
  return {
    companyId: json["company_id"] == null ? undefined : json["company_id"],
    companyIds: json["company_ids"] == null ? undefined : json["company_ids"],
    endTime: json["end_time"] == null ? undefined : new Date(json["end_time"]),
    eventSubtype:
      json["event_subtype"] == null ? undefined : json["event_subtype"],
    eventSubtypes:
      json["event_subtypes"] == null ? undefined : json["event_subtypes"],
    grouping: json["grouping"] == null ? undefined : json["grouping"],
    limit: json["limit"] == null ? undefined : json["limit"],
    offset: json["offset"] == null ? undefined : json["offset"],
    startTime:
      json["start_time"] == null ? undefined : new Date(json["start_time"]),
    userId: json["user_id"] == null ? undefined : json["user_id"],
  };
}

export function ListMetricCountsParamsToJSON(
  value?: ListMetricCountsParams | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    company_id: value["companyId"],
    company_ids: value["companyIds"],
    end_time:
      value["endTime"] == null ? undefined : value["endTime"].toISOString(),
    event_subtype: value["eventSubtype"],
    event_subtypes: value["eventSubtypes"],
    grouping: value["grouping"],
    limit: value["limit"],
    offset: value["offset"],
    start_time:
      value["startTime"] == null ? undefined : value["startTime"].toISOString(),
    user_id: value["userId"],
  };
}
