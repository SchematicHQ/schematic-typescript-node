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
 * @interface ListFlagChecksParams
 */
export interface ListFlagChecksParams {
  /**
   *
   * @type {string}
   * @memberof ListFlagChecksParams
   */
  flagId?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ListFlagChecksParams
   */
  flagIds?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof ListFlagChecksParams
   */
  id?: string;
  /**
   * Page limit (default 100)
   * @type {number}
   * @memberof ListFlagChecksParams
   */
  limit?: number;
  /**
   * Page offset (default 0)
   * @type {number}
   * @memberof ListFlagChecksParams
   */
  offset?: number;
}

/**
 * Check if a given object implements the ListFlagChecksParams interface.
 */
export function instanceOfListFlagChecksParams(
  value: object,
): value is ListFlagChecksParams {
  return true;
}

export function ListFlagChecksParamsFromJSON(json: any): ListFlagChecksParams {
  return ListFlagChecksParamsFromJSONTyped(json, false);
}

export function ListFlagChecksParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListFlagChecksParams {
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

export function ListFlagChecksParamsToJSON(
  value?: ListFlagChecksParams | null,
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
