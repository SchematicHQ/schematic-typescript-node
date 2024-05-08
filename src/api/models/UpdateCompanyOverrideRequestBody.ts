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
 * @interface UpdateCompanyOverrideRequestBody
 */
export interface UpdateCompanyOverrideRequestBody {
  /**
   *
   * @type {string}
   * @memberof UpdateCompanyOverrideRequestBody
   */
  metricPeriod?: UpdateCompanyOverrideRequestBodyMetricPeriodEnum;
  /**
   *
   * @type {boolean}
   * @memberof UpdateCompanyOverrideRequestBody
   */
  valueBool?: boolean;
  /**
   *
   * @type {number}
   * @memberof UpdateCompanyOverrideRequestBody
   */
  valueNumeric?: number;
  /**
   *
   * @type {string}
   * @memberof UpdateCompanyOverrideRequestBody
   */
  valueTraitId?: string;
  /**
   *
   * @type {string}
   * @memberof UpdateCompanyOverrideRequestBody
   */
  valueType: UpdateCompanyOverrideRequestBodyValueTypeEnum;
}

/**
 * @export
 */
export const UpdateCompanyOverrideRequestBodyMetricPeriodEnum = {
  Month: "current_month",
  Week: "current_week",
  Day: "current_day",
} as const;
export type UpdateCompanyOverrideRequestBodyMetricPeriodEnum =
  (typeof UpdateCompanyOverrideRequestBodyMetricPeriodEnum)[keyof typeof UpdateCompanyOverrideRequestBodyMetricPeriodEnum];

/**
 * @export
 */
export const UpdateCompanyOverrideRequestBodyValueTypeEnum = {
  Boolean: "Boolean",
  Numeric: "Numeric",
  Trait: "Trait",
  Unlimited: "Unlimited",
} as const;
export type UpdateCompanyOverrideRequestBodyValueTypeEnum =
  (typeof UpdateCompanyOverrideRequestBodyValueTypeEnum)[keyof typeof UpdateCompanyOverrideRequestBodyValueTypeEnum];

/**
 * Check if a given object implements the UpdateCompanyOverrideRequestBody interface.
 */
export function instanceOfUpdateCompanyOverrideRequestBody(
  value: object,
): boolean {
  if (!("valueType" in value)) return false;
  return true;
}

export function UpdateCompanyOverrideRequestBodyFromJSON(
  json: any,
): UpdateCompanyOverrideRequestBody {
  return UpdateCompanyOverrideRequestBodyFromJSONTyped(json, false);
}

export function UpdateCompanyOverrideRequestBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UpdateCompanyOverrideRequestBody {
  if (json == null) {
    return json;
  }
  return {
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

export function UpdateCompanyOverrideRequestBodyToJSON(
  value?: UpdateCompanyOverrideRequestBody | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    metric_period: value["metricPeriod"],
    value_bool: value["valueBool"],
    value_numeric: value["valueNumeric"],
    value_trait_id: value["valueTraitId"],
    value_type: value["valueType"],
  };
}
