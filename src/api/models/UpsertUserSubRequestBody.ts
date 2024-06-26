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
 * @interface UpsertUserSubRequestBody
 */
export interface UpsertUserSubRequestBody {
  /**
   * Optionally specify company using Schematic company ID
   * @type {string}
   * @memberof UpsertUserSubRequestBody
   */
  companyId?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof UpsertUserSubRequestBody
   */
  keys: { [key: string]: string };
  /**
   *
   * @type {Date}
   * @memberof UpsertUserSubRequestBody
   */
  lastSeenAt?: Date;
  /**
   *
   * @type {string}
   * @memberof UpsertUserSubRequestBody
   */
  name?: string;
  /**
   * A map of trait names to trait values
   * @type {object}
   * @memberof UpsertUserSubRequestBody
   */
  traits?: object;
  /**
   *
   * @type {boolean}
   * @memberof UpsertUserSubRequestBody
   */
  updateOnly?: boolean;
}

/**
 * Check if a given object implements the UpsertUserSubRequestBody interface.
 */
export function instanceOfUpsertUserSubRequestBody(
  value: object,
): value is UpsertUserSubRequestBody {
  if (!("keys" in value) || value["keys"] === undefined) return false;
  return true;
}

export function UpsertUserSubRequestBodyFromJSON(
  json: any,
): UpsertUserSubRequestBody {
  return UpsertUserSubRequestBodyFromJSONTyped(json, false);
}

export function UpsertUserSubRequestBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UpsertUserSubRequestBody {
  if (json == null) {
    return json;
  }
  return {
    companyId: json["company_id"] == null ? undefined : json["company_id"],
    keys: json["keys"],
    lastSeenAt:
      json["last_seen_at"] == null ? undefined : new Date(json["last_seen_at"]),
    name: json["name"] == null ? undefined : json["name"],
    traits: json["traits"] == null ? undefined : json["traits"],
    updateOnly: json["update_only"] == null ? undefined : json["update_only"],
  };
}

export function UpsertUserSubRequestBodyToJSON(
  value?: UpsertUserSubRequestBody | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    company_id: value["companyId"],
    keys: value["keys"],
    last_seen_at:
      value["lastSeenAt"] == null
        ? undefined
        : (value["lastSeenAt"] as any).toISOString(),
    name: value["name"],
    traits: value["traits"],
    update_only: value["updateOnly"],
  };
}
