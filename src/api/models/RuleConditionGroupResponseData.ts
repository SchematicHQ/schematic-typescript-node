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
 * @interface RuleConditionGroupResponseData
 */
export interface RuleConditionGroupResponseData {
  /**
   *
   * @type {Date}
   * @memberof RuleConditionGroupResponseData
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof RuleConditionGroupResponseData
   */
  environmentId: string;
  /**
   *
   * @type {string}
   * @memberof RuleConditionGroupResponseData
   */
  flagId?: string;
  /**
   *
   * @type {string}
   * @memberof RuleConditionGroupResponseData
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof RuleConditionGroupResponseData
   */
  planId?: string;
  /**
   *
   * @type {string}
   * @memberof RuleConditionGroupResponseData
   */
  ruleId: string;
  /**
   *
   * @type {Date}
   * @memberof RuleConditionGroupResponseData
   */
  updatedAt: Date;
}

/**
 * Check if a given object implements the RuleConditionGroupResponseData interface.
 */
export function instanceOfRuleConditionGroupResponseData(
  value: object,
): boolean {
  if (!("createdAt" in value)) return false;
  if (!("environmentId" in value)) return false;
  if (!("id" in value)) return false;
  if (!("ruleId" in value)) return false;
  if (!("updatedAt" in value)) return false;
  return true;
}

export function RuleConditionGroupResponseDataFromJSON(
  json: any,
): RuleConditionGroupResponseData {
  return RuleConditionGroupResponseDataFromJSONTyped(json, false);
}

export function RuleConditionGroupResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RuleConditionGroupResponseData {
  if (json == null) {
    return json;
  }
  return {
    createdAt: new Date(json["created_at"]),
    environmentId: json["environment_id"],
    flagId: json["flag_id"] == null ? undefined : json["flag_id"],
    id: json["id"],
    planId: json["plan_id"] == null ? undefined : json["plan_id"],
    ruleId: json["rule_id"],
    updatedAt: new Date(json["updated_at"]),
  };
}

export function RuleConditionGroupResponseDataToJSON(
  value?: RuleConditionGroupResponseData | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    created_at: value["createdAt"].toISOString(),
    environment_id: value["environmentId"],
    flag_id: value["flagId"],
    id: value["id"],
    plan_id: value["planId"],
    rule_id: value["ruleId"],
    updated_at: value["updatedAt"].toISOString(),
  };
}
