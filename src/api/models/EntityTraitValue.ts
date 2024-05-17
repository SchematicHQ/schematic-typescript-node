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
 * @interface EntityTraitValue
 */
export interface EntityTraitValue {
  /**
   *
   * @type {string}
   * @memberof EntityTraitValue
   */
  definitionId: string;
  /**
   *
   * @type {string}
   * @memberof EntityTraitValue
   */
  value: string;
}

/**
 * Check if a given object implements the EntityTraitValue interface.
 */
export function instanceOfEntityTraitValue(value: object): boolean {
  if (!("definitionId" in value)) return false;
  if (!("value" in value)) return false;
  return true;
}

export function EntityTraitValueFromJSON(json: any): EntityTraitValue {
  return EntityTraitValueFromJSONTyped(json, false);
}

export function EntityTraitValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EntityTraitValue {
  if (json == null) {
    return json;
  }
  return {
    definitionId: json["definition_id"],
    value: json["value"],
  };
}

export function EntityTraitValueToJSON(value?: EntityTraitValue | null): any {
  if (value == null) {
    return value;
  }
  return {
    definition_id: value["definitionId"],
    value: value["value"],
  };
}
