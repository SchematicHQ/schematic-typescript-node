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
 * The updated resource
 * @export
 * @interface ApiKeyResponseData
 */
export interface ApiKeyResponseData {
  /**
   *
   * @type {Date}
   * @memberof ApiKeyResponseData
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResponseData
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResponseData
   */
  environmentId?: string;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResponseData
   */
  id: string;
  /**
   *
   * @type {Date}
   * @memberof ApiKeyResponseData
   */
  lastUsedAt?: Date;
  /**
   *
   * @type {string}
   * @memberof ApiKeyResponseData
   */
  name: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ApiKeyResponseData
   */
  scopes: Array<string>;
  /**
   *
   * @type {Date}
   * @memberof ApiKeyResponseData
   */
  updatedAt: Date;
}

/**
 * Check if a given object implements the ApiKeyResponseData interface.
 */
export function instanceOfApiKeyResponseData(
  value: object,
): value is ApiKeyResponseData {
  if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
  if (!("id" in value) || value["id"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("scopes" in value) || value["scopes"] === undefined) return false;
  if (!("updatedAt" in value) || value["updatedAt"] === undefined) return false;
  return true;
}

export function ApiKeyResponseDataFromJSON(json: any): ApiKeyResponseData {
  return ApiKeyResponseDataFromJSONTyped(json, false);
}

export function ApiKeyResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ApiKeyResponseData {
  if (json == null) {
    return json;
  }
  return {
    createdAt: new Date(json["created_at"]),
    description: json["description"] == null ? undefined : json["description"],
    environmentId:
      json["environment_id"] == null ? undefined : json["environment_id"],
    id: json["id"],
    lastUsedAt:
      json["last_used_at"] == null ? undefined : new Date(json["last_used_at"]),
    name: json["name"],
    scopes: json["scopes"],
    updatedAt: new Date(json["updated_at"]),
  };
}

export function ApiKeyResponseDataToJSON(
  value?: ApiKeyResponseData | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    created_at: value["createdAt"].toISOString(),
    description: value["description"],
    environment_id: value["environmentId"],
    id: value["id"],
    last_used_at:
      value["lastUsedAt"] == null
        ? undefined
        : (value["lastUsedAt"] as any).toISOString(),
    name: value["name"],
    scopes: value["scopes"],
    updated_at: value["updatedAt"].toISOString(),
  };
}
