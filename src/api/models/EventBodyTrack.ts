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
 * @interface EventBodyTrack
 */
export interface EventBodyTrack {
    /**
     * Key-value pairs to identify company associated with track event
     * @type {object}
     * @memberof EventBodyTrack
     */
    company?: object;
    /**
     * The name of the type of track event
     * @type {string}
     * @memberof EventBodyTrack
     */
    event: string;
    /**
     * A map of trait names to trait values
     * @type {object}
     * @memberof EventBodyTrack
     */
    traits?: object;
    /**
     * Key-value pairs to identify user associated with track event
     * @type {object}
     * @memberof EventBodyTrack
     */
    user?: object;
}

/**
 * Check if a given object implements the EventBodyTrack interface.
 */
export function instanceOfEventBodyTrack(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "event" in value;

    return isInstance;
}

export function EventBodyTrackFromJSON(json: any): EventBodyTrack {
    return EventBodyTrackFromJSONTyped(json, false);
}

export function EventBodyTrackFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventBodyTrack {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': !exists(json, 'company') ? undefined : json['company'],
        'event': json['event'],
        'traits': !exists(json, 'traits') ? undefined : json['traits'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function EventBodyTrackToJSON(value?: EventBodyTrack | null): any {
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

