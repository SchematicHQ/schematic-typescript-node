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
 * @interface CreatePlanEntitlementRequestBody
 */
export interface CreatePlanEntitlementRequestBody {
  /**
   *
   * @type {string}
   * @memberof CreatePlanEntitlementRequestBody
   */
  featureId: string;
  /**
   *
   * @type {string}
   * @memberof CreatePlanEntitlementRequestBody
   */
  metricPeriod?: CreatePlanEntitlementRequestBodyMetricPeriodEnum;
  /**
   *
   * @type {string}
   * @memberof CreatePlanEntitlementRequestBody
   */
  planId: string;
  /**
   *
   * @type {boolean}
   * @memberof CreatePlanEntitlementRequestBody
   */
  valueBool?: boolean;
  /**
   *
   * @type {number}
   * @memberof CreatePlanEntitlementRequestBody
   */
  valueNumeric?: number;
  /**
   *
   * @type {string}
   * @memberof CreatePlanEntitlementRequestBody
   */
  valueTraitId?: string;
  /**
   *
   * @type {string}
   * @memberof CreatePlanEntitlementRequestBody
   */
  valueType: CreatePlanEntitlementRequestBodyValueTypeEnum;
}

/**
 * @export
 */
export const CreatePlanEntitlementRequestBodyMetricPeriodEnum = {
  Month: "current_month",
  Week: "current_week",
  Day: "current_day",
} as const;
export type CreatePlanEntitlementRequestBodyMetricPeriodEnum =
  (typeof CreatePlanEntitlementRequestBodyMetricPeriodEnum)[keyof typeof CreatePlanEntitlementRequestBodyMetricPeriodEnum];

/**
 * @export
 */
export const CreatePlanEntitlementRequestBodyValueTypeEnum = {
  Boolean: "boolean",
  Numeric: "numeric",
  Trait: "trait",
  Unlimited: "unlimited",
} as const;
export type CreatePlanEntitlementRequestBodyValueTypeEnum =
  (typeof CreatePlanEntitlementRequestBodyValueTypeEnum)[keyof typeof CreatePlanEntitlementRequestBodyValueTypeEnum];

/**
 * Check if a given object implements the CreatePlanEntitlementRequestBody interface.
 */
export function instanceOfCreatePlanEntitlementRequestBody(
  value: object,
): value is CreatePlanEntitlementRequestBody {
  if (!("featureId" in value) || value["featureId"] === undefined) return false;
  if (!("planId" in value) || value["planId"] === undefined) return false;
  if (!("valueType" in value) || value["valueType"] === undefined) return false;
  return true;
}

export function CreatePlanEntitlementRequestBodyFromJSON(
  json: any,
): CreatePlanEntitlementRequestBody {
  return CreatePlanEntitlementRequestBodyFromJSONTyped(json, false);
}

export function CreatePlanEntitlementRequestBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreatePlanEntitlementRequestBody {
  if (json == null) {
    return json;
  }
  return {
    featureId: json["feature_id"],
    metricPeriod:
      json["metric_period"] == null ? undefined : json["metric_period"],
    planId: json["plan_id"],
    valueBool: json["value_bool"] == null ? undefined : json["value_bool"],
    valueNumeric:
      json["value_numeric"] == null ? undefined : json["value_numeric"],
    valueTraitId:
      json["value_trait_id"] == null ? undefined : json["value_trait_id"],
    valueType: json["value_type"],
  };
}

export function CreatePlanEntitlementRequestBodyToJSON(
  value?: CreatePlanEntitlementRequestBody | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    feature_id: value["featureId"],
    metric_period: value["metricPeriod"],
    plan_id: value["planId"],
    value_bool: value["valueBool"],
    value_numeric: value["valueNumeric"],
    value_trait_id: value["valueTraitId"],
    value_type: value["valueType"],
  };
}
