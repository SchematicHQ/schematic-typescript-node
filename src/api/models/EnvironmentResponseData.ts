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
 * @interface EnvironmentResponseData
 */
export interface EnvironmentResponseData {
  /**
   *
   * @type {Date}
   * @memberof EnvironmentResponseData
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof EnvironmentResponseData
   */
  environmentType: string;
  /**
   *
   * @type {string}
   * @memberof EnvironmentResponseData
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof EnvironmentResponseData
   */
  name: string;
  /**
   *
   * @type {Date}
   * @memberof EnvironmentResponseData
   */
  updatedAt: Date;
}

/**
 * Check if a given object implements the EnvironmentResponseData interface.
 */
export function instanceOfEnvironmentResponseData(
  value: object,
): value is EnvironmentResponseData {
  if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
  if (!("environmentType" in value) || value["environmentType"] === undefined)
    return false;
  if (!("id" in value) || value["id"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("updatedAt" in value) || value["updatedAt"] === undefined) return false;
  return true;
}

export function EnvironmentResponseDataFromJSON(
  json: any,
): EnvironmentResponseData {
  return EnvironmentResponseDataFromJSONTyped(json, false);
}

export function EnvironmentResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EnvironmentResponseData {
  if (json == null) {
    return json;
  }
  return {
    createdAt: new Date(json["created_at"]),
    environmentType: json["environment_type"],
    id: json["id"],
    name: json["name"],
    updatedAt: new Date(json["updated_at"]),
  };
}

export function EnvironmentResponseDataToJSON(
  value?: EnvironmentResponseData | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    created_at: value["createdAt"].toISOString(),
    environment_type: value["environmentType"],
    id: value["id"],
    name: value["name"],
    updated_at: value["updatedAt"].toISOString(),
  };
}
