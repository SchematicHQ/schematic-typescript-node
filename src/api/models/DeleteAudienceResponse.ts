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
 * @interface DeleteAudienceResponse
 */
export interface DeleteAudienceResponse {
  /**
   *
   * @type {DeleteResponse}
   * @memberof DeleteAudienceResponse
   */
  data: DeleteResponse;
  /**
   * Input parameters
   * @type {object}
   * @memberof DeleteAudienceResponse
   */
  params: object;
}

/**
 * Check if a given object implements the DeleteAudienceResponse interface.
 */
export function instanceOfDeleteAudienceResponse(value: object): boolean {
  if (!("data" in value)) return false;
  if (!("params" in value)) return false;
  return true;
}

export function DeleteAudienceResponseFromJSON(
  json: any,
): DeleteAudienceResponse {
  return DeleteAudienceResponseFromJSONTyped(json, false);
}

export function DeleteAudienceResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DeleteAudienceResponse {
  if (json == null) {
    return json;
  }
  return {
    data: DeleteResponseFromJSON(json["data"]),
    params: json["params"],
  };
}

export function DeleteAudienceResponseToJSON(
  value?: DeleteAudienceResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: DeleteResponseToJSON(value["data"]),
    params: value["params"],
  };
}
