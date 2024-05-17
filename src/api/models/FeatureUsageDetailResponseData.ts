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
import type { FeatureUsageResponseData } from "./FeatureUsageResponseData";
import {
  FeatureUsageResponseDataFromJSON,
  FeatureUsageResponseDataFromJSONTyped,
  FeatureUsageResponseDataToJSON,
} from "./FeatureUsageResponseData";

/**
 * The returned resource
 * @export
 * @interface FeatureUsageDetailResponseData
 */
export interface FeatureUsageDetailResponseData {
  /**
   *
   * @type {Array<FeatureUsageResponseData>}
   * @memberof FeatureUsageDetailResponseData
   */
  features: Array<FeatureUsageResponseData>;
}

/**
 * Check if a given object implements the FeatureUsageDetailResponseData interface.
 */
export function instanceOfFeatureUsageDetailResponseData(
  value: object,
): boolean {
  if (!("features" in value)) return false;
  return true;
}

export function FeatureUsageDetailResponseDataFromJSON(
  json: any,
): FeatureUsageDetailResponseData {
  return FeatureUsageDetailResponseDataFromJSONTyped(json, false);
}

export function FeatureUsageDetailResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): FeatureUsageDetailResponseData {
  if (json == null) {
    return json;
  }
  return {
    features: (json["features"] as Array<any>).map(
      FeatureUsageResponseDataFromJSON,
    ),
  };
}

export function FeatureUsageDetailResponseDataToJSON(
  value?: FeatureUsageDetailResponseData | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    features: (value["features"] as Array<any>).map(
      FeatureUsageResponseDataToJSON,
    ),
  };
}
