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
 * @interface CountApiRequestsParams
 */
export interface CountApiRequestsParams {
  /**
   *
   * @type {string}
   * @memberof CountApiRequestsParams
   */
  environmentId?: string;
  /**
   * Page limit (default 100)
   * @type {number}
   * @memberof CountApiRequestsParams
   */
  limit?: number;
  /**
   * Page offset (default 0)
   * @type {number}
   * @memberof CountApiRequestsParams
   */
  offset?: number;
  /**
   *
   * @type {string}
   * @memberof CountApiRequestsParams
   */
  q?: string;
  /**
   *
   * @type {string}
   * @memberof CountApiRequestsParams
   */
  requestType?: string;
}

/**
 * Check if a given object implements the CountApiRequestsParams interface.
 */
export function instanceOfCountApiRequestsParams(
  value: object,
): value is CountApiRequestsParams {
  return true;
}

export function CountApiRequestsParamsFromJSON(
  json: any,
): CountApiRequestsParams {
  return CountApiRequestsParamsFromJSONTyped(json, false);
}

export function CountApiRequestsParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountApiRequestsParams {
  if (json == null) {
    return json;
  }
  return {
    environmentId:
      json["environment_id"] == null ? undefined : json["environment_id"],
    limit: json["limit"] == null ? undefined : json["limit"],
    offset: json["offset"] == null ? undefined : json["offset"],
    q: json["q"] == null ? undefined : json["q"],
    requestType:
      json["request_type"] == null ? undefined : json["request_type"],
  };
}

export function CountApiRequestsParamsToJSON(
  value?: CountApiRequestsParams | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    environment_id: value["environmentId"],
    limit: value["limit"],
    offset: value["offset"],
    q: value["q"],
    request_type: value["requestType"],
  };
}
