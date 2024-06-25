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
import type { CreateOrUpdateConditionRequestBody } from "./CreateOrUpdateConditionRequestBody";
import {
  CreateOrUpdateConditionRequestBodyFromJSON,
  CreateOrUpdateConditionRequestBodyFromJSONTyped,
  CreateOrUpdateConditionRequestBodyToJSON,
} from "./CreateOrUpdateConditionRequestBody";

/**
 *
 * @export
 * @interface CreateOrUpdateConditionGroupRequestBody
 */
export interface CreateOrUpdateConditionGroupRequestBody {
  /**
   *
   * @type {Array<CreateOrUpdateConditionRequestBody>}
   * @memberof CreateOrUpdateConditionGroupRequestBody
   */
  conditions: Array<CreateOrUpdateConditionRequestBody>;
  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateConditionGroupRequestBody
   */
  flagId?: string;
  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateConditionGroupRequestBody
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateConditionGroupRequestBody
   */
  planId?: string;
}

/**
 * Check if a given object implements the CreateOrUpdateConditionGroupRequestBody interface.
 */
export function instanceOfCreateOrUpdateConditionGroupRequestBody(
  value: object,
): value is CreateOrUpdateConditionGroupRequestBody {
  if (!("conditions" in value) || value["conditions"] === undefined)
    return false;
  return true;
}

export function CreateOrUpdateConditionGroupRequestBodyFromJSON(
  json: any,
): CreateOrUpdateConditionGroupRequestBody {
  return CreateOrUpdateConditionGroupRequestBodyFromJSONTyped(json, false);
}

export function CreateOrUpdateConditionGroupRequestBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateOrUpdateConditionGroupRequestBody {
  if (json == null) {
    return json;
  }
  return {
    conditions: (json["conditions"] as Array<any>).map(
      CreateOrUpdateConditionRequestBodyFromJSON,
    ),
    flagId: json["flag_id"] == null ? undefined : json["flag_id"],
    id: json["id"] == null ? undefined : json["id"],
    planId: json["plan_id"] == null ? undefined : json["plan_id"],
  };
}

export function CreateOrUpdateConditionGroupRequestBodyToJSON(
  value?: CreateOrUpdateConditionGroupRequestBody | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    conditions: (value["conditions"] as Array<any>).map(
      CreateOrUpdateConditionRequestBodyToJSON,
    ),
    flag_id: value["flagId"],
    id: value["id"],
    plan_id: value["planId"],
  };
}
