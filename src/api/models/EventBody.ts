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

import type { EventBodyIdentify } from "./EventBodyIdentify";
import {
  instanceOfEventBodyIdentify,
  EventBodyIdentifyFromJSON,
  EventBodyIdentifyFromJSONTyped,
  EventBodyIdentifyToJSON,
} from "./EventBodyIdentify";
import type { EventBodyTrack } from "./EventBodyTrack";
import {
  instanceOfEventBodyTrack,
  EventBodyTrackFromJSON,
  EventBodyTrackFromJSONTyped,
  EventBodyTrackToJSON,
} from "./EventBodyTrack";

/**
 * @type EventBody
 *
 * @export
 */
export type EventBody = EventBodyIdentify | EventBodyTrack;

export function EventBodyFromJSON(json: any): EventBody {
  return EventBodyFromJSONTyped(json, false);
}

export function EventBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EventBody {
  if (json == null) {
    return json;
  }
  if (instanceOfEventBodyIdentify(json)) {
    return EventBodyIdentifyFromJSONTyped(json, true);
  }
  if (instanceOfEventBodyTrack(json)) {
    return EventBodyTrackFromJSONTyped(json, true);
  }

  throw new Error("Invalid EventBody");
}

export function EventBodyToJSON(value?: EventBody | null): any {
  if (value == null) {
    return value;
  }

  if (instanceOfEventBodyIdentify(value)) {
    return EventBodyIdentifyToJSON(value as EventBodyIdentify);
  }
  if (instanceOfEventBodyTrack(value)) {
    return EventBodyTrackToJSON(value as EventBodyTrack);
  }

  return {};
}
