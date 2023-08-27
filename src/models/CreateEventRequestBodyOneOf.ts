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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateEventRequestBodyOneOf
 */
export interface CreateEventRequestBodyOneOf {
    /**
     * Key-value pairs to identify company associated with track event
     * @type {object}
     * @memberof CreateEventRequestBodyOneOf
     */
    company?: object;
    /**
     * The name of the type of track event
     * @type {string}
     * @memberof CreateEventRequestBodyOneOf
     */
    event?: string;
    /**
     * A map of trait names to trait values
     * @type {object}
     * @memberof CreateEventRequestBodyOneOf
     */
    traits?: object;
    /**
     * Key-value pairs to identify user associated with track event
     * @type {object}
     * @memberof CreateEventRequestBodyOneOf
     */
    user?: object;
}

/**
 * Check if a given object implements the CreateEventRequestBodyOneOf interface.
 */
export function instanceOfCreateEventRequestBodyOneOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateEventRequestBodyOneOfFromJSON(json: any): CreateEventRequestBodyOneOf {
    return CreateEventRequestBodyOneOfFromJSONTyped(json, false);
}

export function CreateEventRequestBodyOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEventRequestBodyOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': !exists(json, 'company') ? undefined : json['company'],
        'event': !exists(json, 'event') ? undefined : json['event'],
        'traits': !exists(json, 'traits') ? undefined : json['traits'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function CreateEventRequestBodyOneOfToJSON(value?: CreateEventRequestBodyOneOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company': value.company,
        'event': value.event,
        'traits': value.traits,
        'user': value.user,
    };
}

