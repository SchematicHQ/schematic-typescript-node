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
import type { GetEventType200ResponseData } from './GetEventType200ResponseData';
import {
    GetEventType200ResponseDataFromJSON,
    GetEventType200ResponseDataFromJSONTyped,
    GetEventType200ResponseDataToJSON,
} from './GetEventType200ResponseData';

/**
 * 
 * @export
 * @interface GetEventType200Response
 */
export interface GetEventType200Response {
    /**
     * 
     * @type {GetEventType200ResponseData}
     * @memberof GetEventType200Response
     */
    data?: GetEventType200ResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof GetEventType200Response
     */
    params?: object;
}

/**
 * Check if a given object implements the GetEventType200Response interface.
 */
export function instanceOfGetEventType200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetEventType200ResponseFromJSON(json: any): GetEventType200Response {
    return GetEventType200ResponseFromJSONTyped(json, false);
}

export function GetEventType200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEventType200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : GetEventType200ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function GetEventType200ResponseToJSON(value?: GetEventType200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetEventType200ResponseDataToJSON(value.data),
        'params': value.params,
    };
}

