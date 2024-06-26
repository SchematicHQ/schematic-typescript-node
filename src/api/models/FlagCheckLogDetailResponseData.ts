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
import type { UserResponseData } from "./UserResponseData";
import {
  UserResponseDataFromJSON,
  UserResponseDataFromJSONTyped,
  UserResponseDataToJSON,
} from "./UserResponseData";
import type { FlagResponseData } from "./FlagResponseData";
import {
  FlagResponseDataFromJSON,
  FlagResponseDataFromJSONTyped,
  FlagResponseDataToJSON,
} from "./FlagResponseData";
import type { EnvironmentResponseData } from "./EnvironmentResponseData";
import {
  EnvironmentResponseDataFromJSON,
  EnvironmentResponseDataFromJSONTyped,
  EnvironmentResponseDataToJSON,
} from "./EnvironmentResponseData";
import type { RuleResponseData } from "./RuleResponseData";
import {
  RuleResponseDataFromJSON,
  RuleResponseDataFromJSONTyped,
  RuleResponseDataToJSON,
} from "./RuleResponseData";
import type { CompanyResponseData } from "./CompanyResponseData";
import {
  CompanyResponseDataFromJSON,
  CompanyResponseDataFromJSONTyped,
  CompanyResponseDataToJSON,
} from "./CompanyResponseData";

/**
 *
 * @export
 * @interface FlagCheckLogDetailResponseData
 */
export interface FlagCheckLogDetailResponseData {
  /**
   *
   * @type {string}
   * @memberof FlagCheckLogDetailResponseData
   */
  checkStatus: string;
  /**
   *
   * @type {CompanyResponseData}
   * @memberof FlagCheckLogDetailResponseData
   */
  company?: CompanyResponseData;
  /**
   *
   * @type {string}
   * @memberof FlagCheckLogDetailResponseData
   */
  companyId?: string;
  /**
   *
   * @type {Date}
   * @memberof FlagCheckLogDetailResponseData
   */
  createdAt: Date;
  /**
   *
   * @type {EnvironmentResponseData}
   * @memberof FlagCheckLogDetailResponseData
   */
  environment?: EnvironmentResponseData;
  /**
   *
   * @type {string}
   * @memberof FlagCheckLogDetailResponseData
   */
  environmentId: string;
  /**
   *
   * @type {string}
   * @memberof FlagCheckLogDetailResponseData
   */
  error?: string;
  /**
   *
   * @type {FlagResponseData}
   * @memberof FlagCheckLogDetailResponseData
   */
  flag?: FlagResponseData;
  /**
   *
   * @type {string}
   * @memberof FlagCheckLogDetailResponseData
   */
  flagId?: string;
  /**
   *
   * @type {string}
   * @memberof FlagCheckLogDetailResponseData
   */
  flagKey: string;
  /**
   *
   * @type {string}
   * @memberof FlagCheckLogDetailResponseData
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof FlagCheckLogDetailResponseData
   */
  reason: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof FlagCheckLogDetailResponseData
   */
  reqCompany?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof FlagCheckLogDetailResponseData
   */
  reqUser?: { [key: string]: string };
  /**
   *
   * @type {RuleResponseData}
   * @memberof FlagCheckLogDetailResponseData
   */
  rule?: RuleResponseData;
  /**
   *
   * @type {string}
   * @memberof FlagCheckLogDetailResponseData
   */
  ruleId?: string;
  /**
   *
   * @type {Date}
   * @memberof FlagCheckLogDetailResponseData
   */
  updatedAt: Date;
  /**
   *
   * @type {UserResponseData}
   * @memberof FlagCheckLogDetailResponseData
   */
  user?: UserResponseData;
  /**
   *
   * @type {string}
   * @memberof FlagCheckLogDetailResponseData
   */
  userId?: string;
  /**
   *
   * @type {boolean}
   * @memberof FlagCheckLogDetailResponseData
   */
  value: boolean;
}

/**
 * Check if a given object implements the FlagCheckLogDetailResponseData interface.
 */
export function instanceOfFlagCheckLogDetailResponseData(
  value: object,
): value is FlagCheckLogDetailResponseData {
  if (!("checkStatus" in value) || value["checkStatus"] === undefined)
    return false;
  if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
  if (!("environmentId" in value) || value["environmentId"] === undefined)
    return false;
  if (!("flagKey" in value) || value["flagKey"] === undefined) return false;
  if (!("id" in value) || value["id"] === undefined) return false;
  if (!("reason" in value) || value["reason"] === undefined) return false;
  if (!("updatedAt" in value) || value["updatedAt"] === undefined) return false;
  if (!("value" in value) || value["value"] === undefined) return false;
  return true;
}

export function FlagCheckLogDetailResponseDataFromJSON(
  json: any,
): FlagCheckLogDetailResponseData {
  return FlagCheckLogDetailResponseDataFromJSONTyped(json, false);
}

export function FlagCheckLogDetailResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): FlagCheckLogDetailResponseData {
  if (json == null) {
    return json;
  }
  return {
    checkStatus: json["check_status"],
    company:
      json["company"] == null
        ? undefined
        : CompanyResponseDataFromJSON(json["company"]),
    companyId: json["company_id"] == null ? undefined : json["company_id"],
    createdAt: new Date(json["created_at"]),
    environment:
      json["environment"] == null
        ? undefined
        : EnvironmentResponseDataFromJSON(json["environment"]),
    environmentId: json["environment_id"],
    error: json["error"] == null ? undefined : json["error"],
    flag:
      json["flag"] == null ? undefined : FlagResponseDataFromJSON(json["flag"]),
    flagId: json["flag_id"] == null ? undefined : json["flag_id"],
    flagKey: json["flag_key"],
    id: json["id"],
    reason: json["reason"],
    reqCompany: json["req_company"] == null ? undefined : json["req_company"],
    reqUser: json["req_user"] == null ? undefined : json["req_user"],
    rule:
      json["rule"] == null ? undefined : RuleResponseDataFromJSON(json["rule"]),
    ruleId: json["rule_id"] == null ? undefined : json["rule_id"],
    updatedAt: new Date(json["updated_at"]),
    user:
      json["user"] == null ? undefined : UserResponseDataFromJSON(json["user"]),
    userId: json["user_id"] == null ? undefined : json["user_id"],
    value: json["value"],
  };
}

export function FlagCheckLogDetailResponseDataToJSON(
  value?: FlagCheckLogDetailResponseData | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    check_status: value["checkStatus"],
    company: CompanyResponseDataToJSON(value["company"]),
    company_id: value["companyId"],
    created_at: value["createdAt"].toISOString(),
    environment: EnvironmentResponseDataToJSON(value["environment"]),
    environment_id: value["environmentId"],
    error: value["error"],
    flag: FlagResponseDataToJSON(value["flag"]),
    flag_id: value["flagId"],
    flag_key: value["flagKey"],
    id: value["id"],
    reason: value["reason"],
    req_company: value["reqCompany"],
    req_user: value["reqUser"],
    rule: RuleResponseDataToJSON(value["rule"]),
    rule_id: value["ruleId"],
    updated_at: value["updatedAt"].toISOString(),
    user: UserResponseDataToJSON(value["user"]),
    user_id: value["userId"],
    value: value["value"],
  };
}
