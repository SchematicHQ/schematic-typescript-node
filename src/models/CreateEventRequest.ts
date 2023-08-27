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
import type { CreateEventRequestBody } from './CreateEventRequestBody';
import {
    CreateEventRequestBodyFromJSON,
    CreateEventRequestBodyFromJSONTyped,
    CreateEventRequestBodyToJSON,
} from './CreateEventRequestBody';

/**
 * 
 * @export
 * @interface CreateEventRequest
 */
export interface CreateEventRequest {
    /**
     * 
     * @type {CreateEventRequestBody}
     * @memberof CreateEventRequest
     */
    body?: CreateEventRequestBody;
    /**
     * Either 'identify' or 'track'
     * @type {string}
     * @memberof CreateEventRequest
     */
    eventType?: string;
    /**
     * Optionally provide a timestamp at which the event was sent to Schematic
     * @type {string}
     * @memberof CreateEventRequest
     */
    sentAt?: string | null;
}

/**
 * Check if a given object implements the CreateEventRequest interface.
 */
export function instanceOfCreateEventRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateEventRequestFromJSON(json: any): CreateEventRequest {
    return CreateEventRequestFromJSONTyped(json, false);
}

export function CreateEventRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEventRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'body': !exists(json, 'body') ? undefined : CreateEventRequestBodyFromJSON(json['body']),
        'eventType': !exists(json, 'event_type') ? undefined : json['event_type'],
        'sentAt': !exists(json, 'sent_at') ? undefined : json['sent_at'],
    };
}

export function CreateEventRequestToJSON(value?: CreateEventRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'body': CreateEventRequestBodyToJSON(value.body),
        'event_type': value.eventType,
        'sent_at': value.sentAt,
    };
}

