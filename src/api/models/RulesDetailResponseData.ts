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
import type { FlagResponseData } from "./FlagResponseData";
import {
  FlagResponseDataFromJSON,
  FlagResponseDataFromJSONTyped,
  FlagResponseDataToJSON,
} from "./FlagResponseData";
import type { RuleDetailResponseData } from "./RuleDetailResponseData";
import {
  RuleDetailResponseDataFromJSON,
  RuleDetailResponseDataFromJSONTyped,
  RuleDetailResponseDataToJSON,
} from "./RuleDetailResponseData";

/**
 * The updated resource
 * @export
 * @interface RulesDetailResponseData
 */
export interface RulesDetailResponseData {
  /**
   *
   * @type {FlagResponseData}
   * @memberof RulesDetailResponseData
   */
  flag?: FlagResponseData;
  /**
   *
   * @type {Array<RuleDetailResponseData>}
   * @memberof RulesDetailResponseData
   */
  rules: Array<RuleDetailResponseData>;
}

/**
 * Check if a given object implements the RulesDetailResponseData interface.
 */
export function instanceOfRulesDetailResponseData(value: object): boolean {
  if (!("rules" in value)) return false;
  return true;
}

export function RulesDetailResponseDataFromJSON(
  json: any,
): RulesDetailResponseData {
  return RulesDetailResponseDataFromJSONTyped(json, false);
}

export function RulesDetailResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RulesDetailResponseData {
  if (json == null) {
    return json;
  }
  return {
    flag:
      json["Flag"] == null ? undefined : FlagResponseDataFromJSON(json["Flag"]),
    rules: (json["rules"] as Array<any>).map(RuleDetailResponseDataFromJSON),
  };
}

export function RulesDetailResponseDataToJSON(
  value?: RulesDetailResponseData | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    Flag: FlagResponseDataToJSON(value["flag"]),
    rules: (value["rules"] as Array<any>).map(RuleDetailResponseDataToJSON),
  };
}
