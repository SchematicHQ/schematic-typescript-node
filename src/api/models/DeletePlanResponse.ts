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
import type { DeleteResponse } from "./DeleteResponse";
import {
  DeleteResponseFromJSON,
  DeleteResponseFromJSONTyped,
  DeleteResponseToJSON,
} from "./DeleteResponse";

/**
 *
 * @export
 * @interface DeletePlanResponse
 */
export interface DeletePlanResponse {
  /**
   *
   * @type {DeleteResponse}
   * @memberof DeletePlanResponse
   */
  data: DeleteResponse;
  /**
   * Input parameters
   * @type {object}
   * @memberof DeletePlanResponse
   */
  params: object;
}

/**
 * Check if a given object implements the DeletePlanResponse interface.
 */
export function instanceOfDeletePlanResponse(
  value: object,
): value is DeletePlanResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function DeletePlanResponseFromJSON(json: any): DeletePlanResponse {
  return DeletePlanResponseFromJSONTyped(json, false);
}

export function DeletePlanResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DeletePlanResponse {
  if (json == null) {
    return json;
  }
  return {
    data: DeleteResponseFromJSON(json["data"]),
    params: json["params"],
  };
}

export function DeletePlanResponseToJSON(
  value?: DeletePlanResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: DeleteResponseToJSON(value["data"]),
    params: value["params"],
  };
}
