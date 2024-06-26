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
 * @interface PreviewObject
 */
export interface PreviewObject {
  /**
   *
   * @type {string}
   * @memberof PreviewObject
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof PreviewObject
   */
  imageUrl?: string;
  /**
   *
   * @type {string}
   * @memberof PreviewObject
   */
  name: string;
}

/**
 * Check if a given object implements the PreviewObject interface.
 */
export function instanceOfPreviewObject(value: object): value is PreviewObject {
  if (!("id" in value) || value["id"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  return true;
}

export function PreviewObjectFromJSON(json: any): PreviewObject {
  return PreviewObjectFromJSONTyped(json, false);
}

export function PreviewObjectFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PreviewObject {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"],
    imageUrl: json["image_url"] == null ? undefined : json["image_url"],
    name: json["name"],
  };
}

export function PreviewObjectToJSON(value?: PreviewObject | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value["id"],
    image_url: value["imageUrl"],
    name: value["name"],
  };
}
