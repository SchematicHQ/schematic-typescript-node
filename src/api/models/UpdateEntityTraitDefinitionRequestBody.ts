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
 * @interface UpdateEntityTraitDefinitionRequestBody
 */
export interface UpdateEntityTraitDefinitionRequestBody {
  /**
   *
   * @type {string}
   * @memberof UpdateEntityTraitDefinitionRequestBody
   */
  displayName?: string;
  /**
   *
   * @type {string}
   * @memberof UpdateEntityTraitDefinitionRequestBody
   */
  traitType: UpdateEntityTraitDefinitionRequestBodyTraitTypeEnum;
}

/**
 * @export
 */
export const UpdateEntityTraitDefinitionRequestBodyTraitTypeEnum = {
  Boolean: "boolean",
  Currency: "currency",
  Date: "date",
  Number: "number",
  String: "string",
  Url: "url",
} as const;
export type UpdateEntityTraitDefinitionRequestBodyTraitTypeEnum =
  (typeof UpdateEntityTraitDefinitionRequestBodyTraitTypeEnum)[keyof typeof UpdateEntityTraitDefinitionRequestBodyTraitTypeEnum];

/**
 * Check if a given object implements the UpdateEntityTraitDefinitionRequestBody interface.
 */
export function instanceOfUpdateEntityTraitDefinitionRequestBody(
  value: object,
): boolean {
  if (!("traitType" in value)) return false;
  return true;
}

export function UpdateEntityTraitDefinitionRequestBodyFromJSON(
  json: any,
): UpdateEntityTraitDefinitionRequestBody {
  return UpdateEntityTraitDefinitionRequestBodyFromJSONTyped(json, false);
}

export function UpdateEntityTraitDefinitionRequestBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UpdateEntityTraitDefinitionRequestBody {
  if (json == null) {
    return json;
  }
  return {
    displayName:
      json["display_name"] == null ? undefined : json["display_name"],
    traitType: json["trait_type"],
  };
}

export function UpdateEntityTraitDefinitionRequestBodyToJSON(
  value?: UpdateEntityTraitDefinitionRequestBody | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    display_name: value["displayName"],
    trait_type: value["traitType"],
  };
}
