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
import type { CreateOrUpdateFlagRequestBody } from "./CreateOrUpdateFlagRequestBody";
import {
  CreateOrUpdateFlagRequestBodyFromJSON,
  CreateOrUpdateFlagRequestBodyFromJSONTyped,
  CreateOrUpdateFlagRequestBodyToJSON,
} from "./CreateOrUpdateFlagRequestBody";

/**
 *
 * @export
 * @interface UpdateFeatureRequestBody
 */
export interface UpdateFeatureRequestBody {
  /**
   *
   * @type {string}
   * @memberof UpdateFeatureRequestBody
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof UpdateFeatureRequestBody
   */
  eventSubtype?: string;
  /**
   *
   * @type {string}
   * @memberof UpdateFeatureRequestBody
   */
  featureType?: UpdateFeatureRequestBodyFeatureTypeEnum;
  /**
   *
   * @type {CreateOrUpdateFlagRequestBody}
   * @memberof UpdateFeatureRequestBody
   */
  flag?: CreateOrUpdateFlagRequestBody;
  /**
   *
   * @type {string}
   * @memberof UpdateFeatureRequestBody
   */
  lifecyclePhase?: string;
  /**
   *
   * @type {string}
   * @memberof UpdateFeatureRequestBody
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof UpdateFeatureRequestBody
   */
  traitId?: string;
}

/**
 * @export
 */
export const UpdateFeatureRequestBodyFeatureTypeEnum = {
  Boolean: "boolean",
  Event: "event",
  Trait: "trait",
} as const;
export type UpdateFeatureRequestBodyFeatureTypeEnum =
  (typeof UpdateFeatureRequestBodyFeatureTypeEnum)[keyof typeof UpdateFeatureRequestBodyFeatureTypeEnum];

/**
 * Check if a given object implements the UpdateFeatureRequestBody interface.
 */
export function instanceOfUpdateFeatureRequestBody(value: object): boolean {
  return true;
}

export function UpdateFeatureRequestBodyFromJSON(
  json: any,
): UpdateFeatureRequestBody {
  return UpdateFeatureRequestBodyFromJSONTyped(json, false);
}

export function UpdateFeatureRequestBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): UpdateFeatureRequestBody {
  if (json == null) {
    return json;
  }
  return {
    description: json["description"] == null ? undefined : json["description"],
    eventSubtype:
      json["event_subtype"] == null ? undefined : json["event_subtype"],
    featureType:
      json["feature_type"] == null ? undefined : json["feature_type"],
    flag:
      json["flag"] == null
        ? undefined
        : CreateOrUpdateFlagRequestBodyFromJSON(json["flag"]),
    lifecyclePhase:
      json["lifecycle_phase"] == null ? undefined : json["lifecycle_phase"],
    name: json["name"] == null ? undefined : json["name"],
    traitId: json["trait_id"] == null ? undefined : json["trait_id"],
  };
}

export function UpdateFeatureRequestBodyToJSON(
  value?: UpdateFeatureRequestBody | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    description: value["description"],
    event_subtype: value["eventSubtype"],
    feature_type: value["featureType"],
    flag: CreateOrUpdateFlagRequestBodyToJSON(value["flag"]),
    lifecycle_phase: value["lifecyclePhase"],
    name: value["name"],
    trait_id: value["traitId"],
  };
}
