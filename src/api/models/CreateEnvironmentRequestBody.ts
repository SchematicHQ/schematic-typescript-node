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
 * @interface CreateEnvironmentRequestBody
 */
export interface CreateEnvironmentRequestBody {
  /**
   *
   * @type {string}
   * @memberof CreateEnvironmentRequestBody
   */
  environmentType: CreateEnvironmentRequestBodyEnvironmentTypeEnum;
  /**
   *
   * @type {string}
   * @memberof CreateEnvironmentRequestBody
   */
  name: string;
}

/**
 * @export
 */
export const CreateEnvironmentRequestBodyEnvironmentTypeEnum = {
  Development: "development",
  Staging: "staging",
  Production: "production",
} as const;
export type CreateEnvironmentRequestBodyEnvironmentTypeEnum =
  (typeof CreateEnvironmentRequestBodyEnvironmentTypeEnum)[keyof typeof CreateEnvironmentRequestBodyEnvironmentTypeEnum];

/**
 * Check if a given object implements the CreateEnvironmentRequestBody interface.
 */
export function instanceOfCreateEnvironmentRequestBody(value: object): boolean {
  if (!("environmentType" in value)) return false;
  if (!("name" in value)) return false;
  return true;
}

export function CreateEnvironmentRequestBodyFromJSON(
  json: any,
): CreateEnvironmentRequestBody {
  return CreateEnvironmentRequestBodyFromJSONTyped(json, false);
}

export function CreateEnvironmentRequestBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateEnvironmentRequestBody {
  if (json == null) {
    return json;
  }
  return {
    environmentType: json["environment_type"],
    name: json["name"],
  };
}

export function CreateEnvironmentRequestBodyToJSON(
  value?: CreateEnvironmentRequestBody | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    environment_type: value["environmentType"],
    name: value["name"],
  };
}
