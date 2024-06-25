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
import type { FeatureCompanyResponseData } from "./FeatureCompanyResponseData";
import {
  FeatureCompanyResponseDataFromJSON,
  FeatureCompanyResponseDataFromJSONTyped,
  FeatureCompanyResponseDataToJSON,
} from "./FeatureCompanyResponseData";
import type { ListFeatureCompaniesParams } from "./ListFeatureCompaniesParams";
import {
  ListFeatureCompaniesParamsFromJSON,
  ListFeatureCompaniesParamsFromJSONTyped,
  ListFeatureCompaniesParamsToJSON,
} from "./ListFeatureCompaniesParams";

/**
 *
 * @export
 * @interface ListFeatureCompaniesResponse
 */
export interface ListFeatureCompaniesResponse {
  /**
   * The returned resources
   * @type {Array<FeatureCompanyResponseData>}
   * @memberof ListFeatureCompaniesResponse
   */
  data: Array<FeatureCompanyResponseData>;
  /**
   *
   * @type {ListFeatureCompaniesParams}
   * @memberof ListFeatureCompaniesResponse
   */
  params: ListFeatureCompaniesParams;
}

/**
 * Check if a given object implements the ListFeatureCompaniesResponse interface.
 */
export function instanceOfListFeatureCompaniesResponse(
  value: object,
): value is ListFeatureCompaniesResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function ListFeatureCompaniesResponseFromJSON(
  json: any,
): ListFeatureCompaniesResponse {
  return ListFeatureCompaniesResponseFromJSONTyped(json, false);
}

export function ListFeatureCompaniesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListFeatureCompaniesResponse {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(FeatureCompanyResponseDataFromJSON),
    params: ListFeatureCompaniesParamsFromJSON(json["params"]),
  };
}

export function ListFeatureCompaniesResponseToJSON(
  value?: ListFeatureCompaniesResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: (value["data"] as Array<any>).map(FeatureCompanyResponseDataToJSON),
    params: ListFeatureCompaniesParamsToJSON(value["params"]),
  };
}
