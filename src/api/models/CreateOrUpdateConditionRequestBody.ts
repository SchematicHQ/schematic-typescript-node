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
 * @interface CreateOrUpdateConditionRequestBody
 */
export interface CreateOrUpdateConditionRequestBody {
  /**
   * Optionally provide a trait ID to compare a metric or trait value against instead of a value
   * @type {string}
   * @memberof CreateOrUpdateConditionRequestBody
   */
  comparisonTraitId?: string;
  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateConditionRequestBody
   */
  conditionType: CreateOrUpdateConditionRequestBodyConditionTypeEnum;
  /**
   * Name of track event type used to measure this condition
   * @type {string}
   * @memberof CreateOrUpdateConditionRequestBody
   */
  eventSubtype?: string;
  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateConditionRequestBody
   */
  id?: string;
  /**
   * Period of time over which to measure the track event metric
   * @type {string}
   * @memberof CreateOrUpdateConditionRequestBody
   */
  metricPeriod?: CreateOrUpdateConditionRequestBodyMetricPeriodEnum;
  /**
   * Value to compare the track event metric against
   * @type {number}
   * @memberof CreateOrUpdateConditionRequestBody
   */
  metricValue: number;
  /**
   *
   * @type {string}
   * @memberof CreateOrUpdateConditionRequestBody
   */
  operator: CreateOrUpdateConditionRequestBodyOperatorEnum;
  /**
   * List of resource IDs (companies, users, or plans) targeted by this condition
   * @type {Array<string>}
   * @memberof CreateOrUpdateConditionRequestBody
   */
  resourceIds: Array<string>;
  /**
   * ID of trait to use to measure this condition
   * @type {string}
   * @memberof CreateOrUpdateConditionRequestBody
   */
  traitId?: string;
  /**
   * Value to compare the trait value against
   * @type {string}
   * @memberof CreateOrUpdateConditionRequestBody
   */
  traitValue?: string;
}

/**
 * @export
 */
export const CreateOrUpdateConditionRequestBodyConditionTypeEnum = {
  Company: "company",
  Metric: "metric",
  Trait: "trait",
  User: "user",
  Plan: "plan",
  BillingProduct: "billing_product",
} as const;
export type CreateOrUpdateConditionRequestBodyConditionTypeEnum =
  (typeof CreateOrUpdateConditionRequestBodyConditionTypeEnum)[keyof typeof CreateOrUpdateConditionRequestBodyConditionTypeEnum];

/**
 * @export
 */
export const CreateOrUpdateConditionRequestBodyMetricPeriodEnum = {
  Month: "current_month",
  Week: "current_week",
  Day: "current_day",
} as const;
export type CreateOrUpdateConditionRequestBodyMetricPeriodEnum =
  (typeof CreateOrUpdateConditionRequestBodyMetricPeriodEnum)[keyof typeof CreateOrUpdateConditionRequestBodyMetricPeriodEnum];

/**
 * @export
 */
export const CreateOrUpdateConditionRequestBodyOperatorEnum = {
  Eq: "eq",
  Ne: "ne",
  Gt: "gt",
  Gte: "gte",
  Lt: "lt",
  Lte: "lte",
} as const;
export type CreateOrUpdateConditionRequestBodyOperatorEnum =
  (typeof CreateOrUpdateConditionRequestBodyOperatorEnum)[keyof typeof CreateOrUpdateConditionRequestBodyOperatorEnum];

/**
 * Check if a given object implements the CreateOrUpdateConditionRequestBody interface.
 */
export function instanceOfCreateOrUpdateConditionRequestBody(
  value: object,
): boolean {
  if (!("conditionType" in value)) return false;
  if (!("metricValue" in value)) return false;
  if (!("operator" in value)) return false;
  if (!("resourceIds" in value)) return false;
  return true;
}

export function CreateOrUpdateConditionRequestBodyFromJSON(
  json: any,
): CreateOrUpdateConditionRequestBody {
  return CreateOrUpdateConditionRequestBodyFromJSONTyped(json, false);
}

export function CreateOrUpdateConditionRequestBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateOrUpdateConditionRequestBody {
  if (json == null) {
    return json;
  }
  return {
    comparisonTraitId:
      json["comparison_trait_id"] == null
        ? undefined
        : json["comparison_trait_id"],
    conditionType: json["condition_type"],
    eventSubtype:
      json["event_subtype"] == null ? undefined : json["event_subtype"],
    id: json["id"] == null ? undefined : json["id"],
    metricPeriod:
      json["metric_period"] == null ? undefined : json["metric_period"],
    metricValue: json["metric_value"],
    operator: json["operator"],
    resourceIds: json["resource_ids"],
    traitId: json["trait_id"] == null ? undefined : json["trait_id"],
    traitValue: json["trait_value"] == null ? undefined : json["trait_value"],
  };
}

export function CreateOrUpdateConditionRequestBodyToJSON(
  value?: CreateOrUpdateConditionRequestBody | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    comparison_trait_id: value["comparisonTraitId"],
    condition_type: value["conditionType"],
    event_subtype: value["eventSubtype"],
    id: value["id"],
    metric_period: value["metricPeriod"],
    metric_value: value["metricValue"],
    operator: value["operator"],
    resource_ids: value["resourceIds"],
    trait_id: value["traitId"],
    trait_value: value["traitValue"],
  };
}
