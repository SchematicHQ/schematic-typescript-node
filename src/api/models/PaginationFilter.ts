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
 * @interface PaginationFilter
 */
export interface PaginationFilter {
  /**
   * Page limit (default 100)
   * @type {number}
   * @memberof PaginationFilter
   */
  limit?: number;
  /**
   * Page offset (default 0)
   * @type {number}
   * @memberof PaginationFilter
   */
  offset?: number;
}

/**
 * Check if a given object implements the PaginationFilter interface.
 */
export function instanceOfPaginationFilter(
  value: object,
): value is PaginationFilter {
  return true;
}

export function PaginationFilterFromJSON(json: any): PaginationFilter {
  return PaginationFilterFromJSONTyped(json, false);
}

export function PaginationFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PaginationFilter {
  if (json == null) {
    return json;
  }
  return {
    limit: json["limit"] == null ? undefined : json["limit"],
    offset: json["offset"] == null ? undefined : json["offset"],
  };
}

export function PaginationFilterToJSON(value?: PaginationFilter | null): any {
  if (value == null) {
    return value;
  }
  return {
    limit: value["limit"],
    offset: value["offset"],
  };
}
