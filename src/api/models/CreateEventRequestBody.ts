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
import type { EventBody } from './EventBody';
import {
    EventBodyFromJSON,
    EventBodyFromJSONTyped,
    EventBodyToJSON,
} from './EventBody';

/**
 * 
 * @export
 * @interface CreateEventRequestBody
 */
export interface CreateEventRequestBody {
    /**
     * 
     * @type {EventBody}
     * @memberof CreateEventRequestBody
     */
    body?: EventBody;
    /**
     * Either 'identify' or 'track'
     * @type {string}
     * @memberof CreateEventRequestBody
     */
    eventType: string;
    /**
     * Optionally provide a timestamp at which the event was sent to Schematic
     * @type {Date}
     * @memberof CreateEventRequestBody
     */
    sentAt?: Date | null;
}

/**
 * Check if a given object implements the CreateEventRequestBody interface.
 */
export function instanceOfCreateEventRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "eventType" in value;

    return isInstance;
}

export function CreateEventRequestBodyFromJSON(json: any): CreateEventRequestBody {
    return CreateEventRequestBodyFromJSONTyped(json, false);
}

export function CreateEventRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEventRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'body': !exists(json, 'body') ? undefined : EventBodyFromJSON(json['body']),
        'eventType': json['event_type'],
        'sentAt': !exists(json, 'sent_at') ? undefined : (json['sent_at'] === null ? null : new Date(json['sent_at'])),
    };
}

export function CreateEventRequestBodyToJSON(value?: CreateEventRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'body': EventBodyToJSON(value.body),
        'event_type': value.eventType,
        'sent_at': value.sentAt === undefined ? undefined : (value.sentAt === null ? null : value.sentAt.toISOString()),
    };
}
