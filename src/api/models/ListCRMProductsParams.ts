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
 * @interface ListCRMProductsParams
 */
export interface ListCRMProductsParams {
  /**
   *
   * @type {Array<string>}
   * @memberof ListCRMProductsParams
   */
  ids?: Array<string>;
  /**
   *
   * @type {number}
   * @memberof ListCRMProductsParams
   */
  limit?: number;
  /**
   *
   * @type {string}
   * @memberof ListCRMProductsParams
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof ListCRMProductsParams
   */
  offset?: number;
}

/**
 * Check if a given object implements the ListCRMProductsParams interface.
 */
export function instanceOfListCRMProductsParams(value: object): boolean {
  return true;
}

export function ListCRMProductsParamsFromJSON(
  json: any,
): ListCRMProductsParams {
  return ListCRMProductsParamsFromJSONTyped(json, false);
}

export function ListCRMProductsParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListCRMProductsParams {
  if (json == null) {
    return json;
  }
  return {
    ids: json["ids"] == null ? undefined : json["ids"],
    limit: json["limit"] == null ? undefined : json["limit"],
    name: json["name"] == null ? undefined : json["name"],
    offset: json["offset"] == null ? undefined : json["offset"],
  };
}

export function ListCRMProductsParamsToJSON(
  value?: ListCRMProductsParams | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    ids: value["ids"],
    limit: value["limit"],
    name: value["name"],
    offset: value["offset"],
  };
}
