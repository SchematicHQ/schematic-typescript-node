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
import type { FeatureUsageDetailResponseData } from "./FeatureUsageDetailResponseData";
import {
  FeatureUsageDetailResponseDataFromJSON,
  FeatureUsageDetailResponseDataFromJSONTyped,
  FeatureUsageDetailResponseDataToJSON,
} from "./FeatureUsageDetailResponseData";
import type { GetFeatureUsageByCompanyParams } from "./GetFeatureUsageByCompanyParams";
import {
  GetFeatureUsageByCompanyParamsFromJSON,
  GetFeatureUsageByCompanyParamsFromJSONTyped,
  GetFeatureUsageByCompanyParamsToJSON,
} from "./GetFeatureUsageByCompanyParams";

/**
 *
 * @export
 * @interface GetFeatureUsageByCompanyResponse
 */
export interface GetFeatureUsageByCompanyResponse {
  /**
   *
   * @type {FeatureUsageDetailResponseData}
   * @memberof GetFeatureUsageByCompanyResponse
   */
  data: FeatureUsageDetailResponseData;
  /**
   *
   * @type {GetFeatureUsageByCompanyParams}
   * @memberof GetFeatureUsageByCompanyResponse
   */
  params: GetFeatureUsageByCompanyParams;
}

/**
 * Check if a given object implements the GetFeatureUsageByCompanyResponse interface.
 */
export function instanceOfGetFeatureUsageByCompanyResponse(
  value: object,
): boolean {
  if (!("data" in value)) return false;
  if (!("params" in value)) return false;
  return true;
}

export function GetFeatureUsageByCompanyResponseFromJSON(
  json: any,
): GetFeatureUsageByCompanyResponse {
  return GetFeatureUsageByCompanyResponseFromJSONTyped(json, false);
}

export function GetFeatureUsageByCompanyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetFeatureUsageByCompanyResponse {
  if (json == null) {
    return json;
  }
  return {
    data: FeatureUsageDetailResponseDataFromJSON(json["data"]),
    params: GetFeatureUsageByCompanyParamsFromJSON(json["params"]),
  };
}

export function GetFeatureUsageByCompanyResponseToJSON(
  value?: GetFeatureUsageByCompanyResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: FeatureUsageDetailResponseDataToJSON(value["data"]),
    params: GetFeatureUsageByCompanyParamsToJSON(value["params"]),
  };
}
