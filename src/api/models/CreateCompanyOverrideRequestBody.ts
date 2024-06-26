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
 * @interface CreateCompanyOverrideRequestBody
 */
export interface CreateCompanyOverrideRequestBody {
  /**
   *
   * @type {string}
   * @memberof CreateCompanyOverrideRequestBody
   */
  companyId: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyOverrideRequestBody
   */
  featureId: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyOverrideRequestBody
   */
  metricPeriod?: CreateCompanyOverrideRequestBodyMetricPeriodEnum;
  /**
   *
   * @type {boolean}
   * @memberof CreateCompanyOverrideRequestBody
   */
  valueBool?: boolean;
  /**
   *
   * @type {number}
   * @memberof CreateCompanyOverrideRequestBody
   */
  valueNumeric?: number;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyOverrideRequestBody
   */
  valueTraitId?: string;
  /**
   *
   * @type {string}
   * @memberof CreateCompanyOverrideRequestBody
   */
  valueType: CreateCompanyOverrideRequestBodyValueTypeEnum;
}

/**
 * @export
 */
export const CreateCompanyOverrideRequestBodyMetricPeriodEnum = {
  Month: "current_month",
  Week: "current_week",
  Day: "current_day",
} as const;
export type CreateCompanyOverrideRequestBodyMetricPeriodEnum =
  (typeof CreateCompanyOverrideRequestBodyMetricPeriodEnum)[keyof typeof CreateCompanyOverrideRequestBodyMetricPeriodEnum];

/**
 * @export
 */
export const CreateCompanyOverrideRequestBodyValueTypeEnum = {
  Boolean: "boolean",
  Numeric: "numeric",
  Trait: "trait",
  Unlimited: "unlimited",
} as const;
export type CreateCompanyOverrideRequestBodyValueTypeEnum =
  (typeof CreateCompanyOverrideRequestBodyValueTypeEnum)[keyof typeof CreateCompanyOverrideRequestBodyValueTypeEnum];

/**
 * Check if a given object implements the CreateCompanyOverrideRequestBody interface.
 */
export function instanceOfCreateCompanyOverrideRequestBody(
  value: object,
): value is CreateCompanyOverrideRequestBody {
  if (!("companyId" in value) || value["companyId"] === undefined) return false;
  if (!("featureId" in value) || value["featureId"] === undefined) return false;
  if (!("valueType" in value) || value["valueType"] === undefined) return false;
  return true;
}

export function CreateCompanyOverrideRequestBodyFromJSON(
  json: any,
): CreateCompanyOverrideRequestBody {
  return CreateCompanyOverrideRequestBodyFromJSONTyped(json, false);
}

export function CreateCompanyOverrideRequestBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateCompanyOverrideRequestBody {
  if (json == null) {
    return json;
  }
  return {
    companyId: json["company_id"],
    featureId: json["feature_id"],
    metricPeriod:
      json["metric_period"] == null ? undefined : json["metric_period"],
    valueBool: json["value_bool"] == null ? undefined : json["value_bool"],
    valueNumeric:
      json["value_numeric"] == null ? undefined : json["value_numeric"],
    valueTraitId:
      json["value_trait_id"] == null ? undefined : json["value_trait_id"],
    valueType: json["value_type"],
  };
}

export function CreateCompanyOverrideRequestBodyToJSON(
  value?: CreateCompanyOverrideRequestBody | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    company_id: value["companyId"],
    feature_id: value["featureId"],
    metric_period: value["metricPeriod"],
    value_bool: value["valueBool"],
    value_numeric: value["valueNumeric"],
    value_trait_id: value["valueTraitId"],
    value_type: value["valueType"],
  };
}
