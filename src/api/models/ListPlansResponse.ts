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
import type { ListPlansParams } from "./ListPlansParams";
import {
  ListPlansParamsFromJSON,
  ListPlansParamsFromJSONTyped,
  ListPlansParamsToJSON,
} from "./ListPlansParams";
import type { PlanDetailResponseData } from "./PlanDetailResponseData";
import {
  PlanDetailResponseDataFromJSON,
  PlanDetailResponseDataFromJSONTyped,
  PlanDetailResponseDataToJSON,
} from "./PlanDetailResponseData";

/**
 *
 * @export
 * @interface ListPlansResponse
 */
export interface ListPlansResponse {
  /**
   * The returned resources
   * @type {Array<PlanDetailResponseData>}
   * @memberof ListPlansResponse
   */
  data: Array<PlanDetailResponseData>;
  /**
   *
   * @type {ListPlansParams}
   * @memberof ListPlansResponse
   */
  params: ListPlansParams;
}

/**
 * Check if a given object implements the ListPlansResponse interface.
 */
export function instanceOfListPlansResponse(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("params" in value)) return false;
  return true;
}

export function ListPlansResponseFromJSON(json: any): ListPlansResponse {
  return ListPlansResponseFromJSONTyped(json, false);
}

export function ListPlansResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListPlansResponse {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(PlanDetailResponseDataFromJSON),
    params: ListPlansParamsFromJSON(json["params"]),
  };
}

export function ListPlansResponseToJSON(value?: ListPlansResponse | null): any {
  if (value == null) {
    return value;
  }
  return {
    data: (value["data"] as Array<any>).map(PlanDetailResponseDataToJSON),
    params: ListPlansParamsToJSON(value["params"]),
  };
}
