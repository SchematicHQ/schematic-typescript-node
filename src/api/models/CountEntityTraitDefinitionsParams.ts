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
 * Input parameters
 * @export
 * @interface CountEntityTraitDefinitionsParams
 */
export interface CountEntityTraitDefinitionsParams {
  /**
   *
   * @type {string}
   * @memberof CountEntityTraitDefinitionsParams
   */
  entityType?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof CountEntityTraitDefinitionsParams
   */
  ids?: Array<string>;
  /**
   *
   * @type {number}
   * @memberof CountEntityTraitDefinitionsParams
   */
  limit?: number;
  /**
   *
   * @type {number}
   * @memberof CountEntityTraitDefinitionsParams
   */
  offset?: number;
  /**
   *
   * @type {string}
   * @memberof CountEntityTraitDefinitionsParams
   */
  q?: string;
  /**
   *
   * @type {string}
   * @memberof CountEntityTraitDefinitionsParams
   */
  traitType?: string;
}

/**
 * Check if a given object implements the CountEntityTraitDefinitionsParams interface.
 */
export function instanceOfCountEntityTraitDefinitionsParams(
  value: object,
): boolean {
  return true;
}

export function CountEntityTraitDefinitionsParamsFromJSON(
  json: any,
): CountEntityTraitDefinitionsParams {
  return CountEntityTraitDefinitionsParamsFromJSONTyped(json, false);
}

export function CountEntityTraitDefinitionsParamsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountEntityTraitDefinitionsParams {
  if (json == null) {
    return json;
  }
  return {
    entityType: json["entity_type"] == null ? undefined : json["entity_type"],
    ids: json["ids"] == null ? undefined : json["ids"],
    limit: json["limit"] == null ? undefined : json["limit"],
    offset: json["offset"] == null ? undefined : json["offset"],
    q: json["q"] == null ? undefined : json["q"],
    traitType: json["trait_type"] == null ? undefined : json["trait_type"],
  };
}

export function CountEntityTraitDefinitionsParamsToJSON(
  value?: CountEntityTraitDefinitionsParams | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    entity_type: value["entityType"],
    ids: value["ids"],
    limit: value["limit"],
    offset: value["offset"],
    q: value["q"],
    trait_type: value["traitType"],
  };
}
