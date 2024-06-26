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
 * @interface CountFlagChecksParams
 */
export interface CountFlagChecksParams {
  /**
   *
   * @type {string}
   * @memberof CountFlagChecksParams
   */
  flagId?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof CountFlagChecksParams
   */
  flagIds?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof CountFlagChecksParams
   */
  id?: string;
  /**
   * Page limit (default 100)
   * @type {number}
   * @memberof CountFlagChecksParams
   */
  limit?: number;
  /**
   * Page offset (default 0)
   * @type {number}
   * @memberof CountFlagChecksParams
   */
  offset?: number;
}

/**
 * Check if a given object implements the CountFlagChecksParams interface.
 */
export function instanceOfCountFlagChecksParams(
  value: object,
): value is CountFlagChecksParams {
  return true;
}

export function CountFlagChecksParamsFromJSON(
  json: any,
): CountFlagChecksParams {
  return CountFlagChecksParamsFromJSONTyped(json, false);
}

export function CountFlagChecksParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountFlagChecksParams {
  if (json == null) {
    return json;
  }
  return {
    flagId: json["flag_id"] == null ? undefined : json["flag_id"],
    flagIds: json["flag_ids"] == null ? undefined : json["flag_ids"],
    id: json["id"] == null ? undefined : json["id"],
    limit: json["limit"] == null ? undefined : json["limit"],
    offset: json["offset"] == null ? undefined : json["offset"],
  };
}

export function CountFlagChecksParamsToJSON(
  value?: CountFlagChecksParams | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    flag_id: value["flagId"],
    flag_ids: value["flagIds"],
    id: value["id"],
    limit: value["limit"],
    offset: value["offset"],
  };
}
