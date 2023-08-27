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

import {
    CreateEventRequestBodyOneOf,
    instanceOfCreateEventRequestBodyOneOf,
    CreateEventRequestBodyOneOfFromJSON,
    CreateEventRequestBodyOneOfFromJSONTyped,
    CreateEventRequestBodyOneOfToJSON,
} from './CreateEventRequestBodyOneOf';
import {
    CreateEventRequestBodyOneOf1,
    instanceOfCreateEventRequestBodyOneOf1,
    CreateEventRequestBodyOneOf1FromJSON,
    CreateEventRequestBodyOneOf1FromJSONTyped,
    CreateEventRequestBodyOneOf1ToJSON,
} from './CreateEventRequestBodyOneOf1';

/**
 * @type CreateEventRequestBody
 * 
 * @export
 */
export type CreateEventRequestBody = CreateEventRequestBodyOneOf | CreateEventRequestBodyOneOf1;

export function CreateEventRequestBodyFromJSON(json: any): CreateEventRequestBody {
    return CreateEventRequestBodyFromJSONTyped(json, false);
}

export function CreateEventRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEventRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...CreateEventRequestBodyOneOfFromJSONTyped(json, true), ...CreateEventRequestBodyOneOf1FromJSONTyped(json, true) };
}

export function CreateEventRequestBodyToJSON(value?: CreateEventRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfCreateEventRequestBodyOneOf(value)) {
        return CreateEventRequestBodyOneOfToJSON(value as CreateEventRequestBodyOneOf);
    }
    if (instanceOfCreateEventRequestBodyOneOf1(value)) {
        return CreateEventRequestBodyOneOf1ToJSON(value as CreateEventRequestBodyOneOf1);
    }

    return {};
}
