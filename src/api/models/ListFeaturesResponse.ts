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
import type { FeatureDetailResponseData } from "./FeatureDetailResponseData";
import {
  FeatureDetailResponseDataFromJSON,
  FeatureDetailResponseDataFromJSONTyped,
  FeatureDetailResponseDataToJSON,
} from "./FeatureDetailResponseData";
import type { ListFeaturesParams } from "./ListFeaturesParams";
import {
  ListFeaturesParamsFromJSON,
  ListFeaturesParamsFromJSONTyped,
  ListFeaturesParamsToJSON,
} from "./ListFeaturesParams";

/**
 *
 * @export
 * @interface ListFeaturesResponse
 */
export interface ListFeaturesResponse {
  /**
   * The returned resources
   * @type {Array<FeatureDetailResponseData>}
   * @memberof ListFeaturesResponse
   */
  data: Array<FeatureDetailResponseData>;
  /**
   *
   * @type {ListFeaturesParams}
   * @memberof ListFeaturesResponse
   */
  params: ListFeaturesParams;
}

/**
 * Check if a given object implements the ListFeaturesResponse interface.
 */
export function instanceOfListFeaturesResponse(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("params" in value)) return false;
  return true;
}

export function ListFeaturesResponseFromJSON(json: any): ListFeaturesResponse {
  return ListFeaturesResponseFromJSONTyped(json, false);
}

export function ListFeaturesResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListFeaturesResponse {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(FeatureDetailResponseDataFromJSON),
    params: ListFeaturesParamsFromJSON(json["params"]),
  };
}

export function ListFeaturesResponseToJSON(
  value?: ListFeaturesResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: (value["data"] as Array<any>).map(FeatureDetailResponseDataToJSON),
    params: ListFeaturesParamsToJSON(value["params"]),
  };
}
