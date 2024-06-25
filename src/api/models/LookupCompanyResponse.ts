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
import type { LookupCompanyParams } from "./LookupCompanyParams";
import {
  LookupCompanyParamsFromJSON,
  LookupCompanyParamsFromJSONTyped,
  LookupCompanyParamsToJSON,
} from "./LookupCompanyParams";
import type { CompanyDetailResponseData } from "./CompanyDetailResponseData";
import {
  CompanyDetailResponseDataFromJSON,
  CompanyDetailResponseDataFromJSONTyped,
  CompanyDetailResponseDataToJSON,
} from "./CompanyDetailResponseData";

/**
 *
 * @export
 * @interface LookupCompanyResponse
 */
export interface LookupCompanyResponse {
  /**
   *
   * @type {CompanyDetailResponseData}
   * @memberof LookupCompanyResponse
   */
  data: CompanyDetailResponseData;
  /**
   *
   * @type {LookupCompanyParams}
   * @memberof LookupCompanyResponse
   */
  params: LookupCompanyParams;
}

/**
 * Check if a given object implements the LookupCompanyResponse interface.
 */
export function instanceOfLookupCompanyResponse(
  value: object,
): value is LookupCompanyResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function LookupCompanyResponseFromJSON(
  json: any,
): LookupCompanyResponse {
  return LookupCompanyResponseFromJSONTyped(json, false);
}

export function LookupCompanyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LookupCompanyResponse {
  if (json == null) {
    return json;
  }
  return {
    data: CompanyDetailResponseDataFromJSON(json["data"]),
    params: LookupCompanyParamsFromJSON(json["params"]),
  };
}

export function LookupCompanyResponseToJSON(
  value?: LookupCompanyResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: CompanyDetailResponseDataToJSON(value["data"]),
    params: LookupCompanyParamsToJSON(value["params"]),
  };
}
