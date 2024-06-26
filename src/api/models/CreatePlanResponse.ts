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
import type { PlanDetailResponseData } from "./PlanDetailResponseData";
import {
  PlanDetailResponseDataFromJSON,
  PlanDetailResponseDataFromJSONTyped,
  PlanDetailResponseDataToJSON,
} from "./PlanDetailResponseData";

/**
 *
 * @export
 * @interface CreatePlanResponse
 */
export interface CreatePlanResponse {
  /**
   *
   * @type {PlanDetailResponseData}
   * @memberof CreatePlanResponse
   */
  data: PlanDetailResponseData;
  /**
   * Input parameters
   * @type {object}
   * @memberof CreatePlanResponse
   */
  params: object;
}

/**
 * Check if a given object implements the CreatePlanResponse interface.
 */
export function instanceOfCreatePlanResponse(
  value: object,
): value is CreatePlanResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function CreatePlanResponseFromJSON(json: any): CreatePlanResponse {
  return CreatePlanResponseFromJSONTyped(json, false);
}

export function CreatePlanResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreatePlanResponse {
  if (json == null) {
    return json;
  }
  return {
    data: PlanDetailResponseDataFromJSON(json["data"]),
    params: json["params"],
  };
}

export function CreatePlanResponseToJSON(
  value?: CreatePlanResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: PlanDetailResponseDataToJSON(value["data"]),
    params: value["params"],
  };
}
