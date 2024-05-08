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
 * @interface DeleteFeatureResponse
 */
export interface DeleteFeatureResponse {
  /**
   *
   * @type {DeleteResponse}
   * @memberof DeleteFeatureResponse
   */
  data: DeleteResponse;
  /**
   * Input parameters
   * @type {object}
   * @memberof DeleteFeatureResponse
   */
  params: object;
}

/**
 * Check if a given object implements the DeleteFeatureResponse interface.
 */
export function instanceOfDeleteFeatureResponse(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("params" in value)) return false;
  return true;
}

export function DeleteFeatureResponseFromJSON(
  json: any,
): DeleteFeatureResponse {
  return DeleteFeatureResponseFromJSONTyped(json, false);
}

export function DeleteFeatureResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DeleteFeatureResponse {
  if (json == null) {
    return json;
  }
  return {
    data: DeleteResponseFromJSON(json["data"]),
    params: json["params"],
  };
}

export function DeleteFeatureResponseToJSON(
  value?: DeleteFeatureResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: DeleteResponseToJSON(value["data"]),
    params: value["params"],
  };
}
