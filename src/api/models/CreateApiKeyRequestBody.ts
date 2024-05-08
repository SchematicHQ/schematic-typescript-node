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
 * @interface CreateApiKeyRequestBody
 */
export interface CreateApiKeyRequestBody {
  /**
   *
   * @type {string}
   * @memberof CreateApiKeyRequestBody
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof CreateApiKeyRequestBody
   */
  environmentId?: string;
  /**
   *
   * @type {string}
   * @memberof CreateApiKeyRequestBody
   */
  name: string;
}

/**
 * Check if a given object implements the CreateApiKeyRequestBody interface.
 */
export function instanceOfCreateApiKeyRequestBody(value: object): boolean {
  if (!("name" in value)) return false;
  return true;
}

export function CreateApiKeyRequestBodyFromJSON(
  json: any,
): CreateApiKeyRequestBody {
  return CreateApiKeyRequestBodyFromJSONTyped(json, false);
}

export function CreateApiKeyRequestBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CreateApiKeyRequestBody {
  if (json == null) {
    return json;
  }
  return {
    description: json["description"] == null ? undefined : json["description"],
    environmentId:
      json["environment_id"] == null ? undefined : json["environment_id"],
    name: json["name"],
  };
}

export function CreateApiKeyRequestBodyToJSON(
  value?: CreateApiKeyRequestBody | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    description: value["description"],
    environment_id: value["environmentId"],
    name: value["name"],
  };
}
