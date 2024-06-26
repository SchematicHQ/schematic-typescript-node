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
 * The returned resource
 * @export
 * @interface SegmentStatusResp
 */
export interface SegmentStatusResp {
  /**
   *
   * @type {boolean}
   * @memberof SegmentStatusResp
   */
  connected: boolean;
  /**
   *
   * @type {string}
   * @memberof SegmentStatusResp
   */
  environmentId: string;
  /**
   *
   * @type {Date}
   * @memberof SegmentStatusResp
   */
  lastEventAt?: Date;
}

/**
 * Check if a given object implements the SegmentStatusResp interface.
 */
export function instanceOfSegmentStatusResp(
  value: object,
): value is SegmentStatusResp {
  if (!("connected" in value) || value["connected"] === undefined) return false;
  if (!("environmentId" in value) || value["environmentId"] === undefined)
    return false;
  return true;
}

export function SegmentStatusRespFromJSON(json: any): SegmentStatusResp {
  return SegmentStatusRespFromJSONTyped(json, false);
}

export function SegmentStatusRespFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SegmentStatusResp {
  if (json == null) {
    return json;
  }
  return {
    connected: json["connected"],
    environmentId: json["environment_id"],
    lastEventAt:
      json["last_event_at"] == null
        ? undefined
        : new Date(json["last_event_at"]),
  };
}

export function SegmentStatusRespToJSON(value?: SegmentStatusResp | null): any {
  if (value == null) {
    return value;
  }
  return {
    connected: value["connected"],
    environment_id: value["environmentId"],
    last_event_at:
      value["lastEventAt"] == null
        ? undefined
        : (value["lastEventAt"] as any).toISOString(),
  };
}
