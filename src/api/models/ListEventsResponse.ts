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

import { mapValues } from '../runtime';
import type { EventDetailResponseData } from './EventDetailResponseData';
import {
    EventDetailResponseDataFromJSON,
    EventDetailResponseDataFromJSONTyped,
    EventDetailResponseDataToJSON,
} from './EventDetailResponseData';
import type { ListEventsParams } from './ListEventsParams';
import {
    ListEventsParamsFromJSON,
    ListEventsParamsFromJSONTyped,
    ListEventsParamsToJSON,
} from './ListEventsParams';

/**
 * 
 * @export
 * @interface ListEventsResponse
 */
export interface ListEventsResponse {
    /**
     * The returned resources
     * @type {Array<EventDetailResponseData>}
     * @memberof ListEventsResponse
     */
    data: Array<EventDetailResponseData>;
    /**
     * 
     * @type {ListEventsParams}
     * @memberof ListEventsResponse
     */
    params: ListEventsParams;
}

/**
 * Check if a given object implements the ListEventsResponse interface.
 */
export function instanceOfListEventsResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function ListEventsResponseFromJSON(json: any): ListEventsResponse {
    return ListEventsResponseFromJSONTyped(json, false);
}

export function ListEventsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListEventsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(EventDetailResponseDataFromJSON)),
        'params': ListEventsParamsFromJSON(json['params']),
    };
}

export function ListEventsResponseToJSON(value?: ListEventsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': ((value['data'] as Array<any>).map(EventDetailResponseDataToJSON)),
        'params': ListEventsParamsToJSON(value['params']),
    };
}

