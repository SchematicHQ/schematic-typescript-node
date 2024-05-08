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
 *
 * @export
 * @interface MetricCountsHourlyResponseData
 */
export interface MetricCountsHourlyResponseData {
  /**
   *
   * @type {string}
   * @memberof MetricCountsHourlyResponseData
   */
  companyId?: string;
  /**
   *
   * @type {Date}
   * @memberof MetricCountsHourlyResponseData
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof MetricCountsHourlyResponseData
   */
  environmentId: string;
  /**
   *
   * @type {string}
   * @memberof MetricCountsHourlyResponseData
   */
  eventSubtype: string;
  /**
   *
   * @type {Date}
   * @memberof MetricCountsHourlyResponseData
   */
  startTime: Date;
  /**
   *
   * @type {string}
   * @memberof MetricCountsHourlyResponseData
   */
  userId?: string;
  /**
   *
   * @type {number}
   * @memberof MetricCountsHourlyResponseData
   */
  value: number;
}

/**
 * Check if a given object implements the MetricCountsHourlyResponseData interface.
 */
export function instanceOfMetricCountsHourlyResponseData(
  value: object,
): boolean {
  if (!("createdAt" in value)) return false;
  if (!("environmentId" in value)) return false;
  if (!("eventSubtype" in value)) return false;
  if (!("startTime" in value)) return false;
  if (!("value" in value)) return false;
  return true;
}

export function MetricCountsHourlyResponseDataFromJSON(
  json: any,
): MetricCountsHourlyResponseData {
  return MetricCountsHourlyResponseDataFromJSONTyped(json, false);
}

export function MetricCountsHourlyResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MetricCountsHourlyResponseData {
  if (json == null) {
    return json;
  }
  return {
    companyId: json["company_id"] == null ? undefined : json["company_id"],
    createdAt: new Date(json["created_at"]),
    environmentId: json["environment_id"],
    eventSubtype: json["event_subtype"],
    startTime: new Date(json["start_time"]),
    userId: json["user_id"] == null ? undefined : json["user_id"],
    value: json["value"],
  };
}

export function MetricCountsHourlyResponseDataToJSON(
  value?: MetricCountsHourlyResponseData | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    company_id: value["companyId"],
    created_at: value["createdAt"].toISOString(),
    environment_id: value["environmentId"],
    event_subtype: value["eventSubtype"],
    start_time: value["startTime"].toISOString(),
    user_id: value["userId"],
    value: value["value"],
  };
}
