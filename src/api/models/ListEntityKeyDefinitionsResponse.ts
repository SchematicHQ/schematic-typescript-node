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
import type { EntityKeyDefinitionResponseData } from "./EntityKeyDefinitionResponseData";
import {
  EntityKeyDefinitionResponseDataFromJSON,
  EntityKeyDefinitionResponseDataFromJSONTyped,
  EntityKeyDefinitionResponseDataToJSON,
} from "./EntityKeyDefinitionResponseData";
import type { ListEntityKeyDefinitionsParams } from "./ListEntityKeyDefinitionsParams";
import {
  ListEntityKeyDefinitionsParamsFromJSON,
  ListEntityKeyDefinitionsParamsFromJSONTyped,
  ListEntityKeyDefinitionsParamsToJSON,
} from "./ListEntityKeyDefinitionsParams";

/**
 *
 * @export
 * @interface ListEntityKeyDefinitionsResponse
 */
export interface ListEntityKeyDefinitionsResponse {
  /**
   * The returned resources
   * @type {Array<EntityKeyDefinitionResponseData>}
   * @memberof ListEntityKeyDefinitionsResponse
   */
  data: Array<EntityKeyDefinitionResponseData>;
  /**
   *
   * @type {ListEntityKeyDefinitionsParams}
   * @memberof ListEntityKeyDefinitionsResponse
   */
  params: ListEntityKeyDefinitionsParams;
}

/**
 * Check if a given object implements the ListEntityKeyDefinitionsResponse interface.
 */
export function instanceOfListEntityKeyDefinitionsResponse(
  value: object,
): value is ListEntityKeyDefinitionsResponse {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("params" in value) || value["params"] === undefined) return false;
  return true;
}

export function ListEntityKeyDefinitionsResponseFromJSON(
  json: any,
): ListEntityKeyDefinitionsResponse {
  return ListEntityKeyDefinitionsResponseFromJSONTyped(json, false);
}

export function ListEntityKeyDefinitionsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ListEntityKeyDefinitionsResponse {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(
      EntityKeyDefinitionResponseDataFromJSON,
    ),
    params: ListEntityKeyDefinitionsParamsFromJSON(json["params"]),
  };
}

export function ListEntityKeyDefinitionsResponseToJSON(
  value?: ListEntityKeyDefinitionsResponse | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    data: (value["data"] as Array<any>).map(
      EntityKeyDefinitionResponseDataToJSON,
    ),
    params: ListEntityKeyDefinitionsParamsToJSON(value["params"]),
  };
}
