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
import type { GetEvent200ResponseData } from './GetEvent200ResponseData';
import {
    GetEvent200ResponseDataFromJSON,
    GetEvent200ResponseDataFromJSONTyped,
    GetEvent200ResponseDataToJSON,
} from './GetEvent200ResponseData';

/**
 * 
 * @export
 * @interface GetEvent200Response
 */
export interface GetEvent200Response {
    /**
     * 
     * @type {GetEvent200ResponseData}
     * @memberof GetEvent200Response
     */
    data?: GetEvent200ResponseData;
    /**
     * 
     * @type {any}
     * @memberof GetEvent200Response
     */
    params?: any | null;
}

/**
 * Check if a given object implements the GetEvent200Response interface.
 */
export function instanceOfGetEvent200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetEvent200ResponseFromJSON(json: any): GetEvent200Response {
    return GetEvent200ResponseFromJSONTyped(json, false);
}

export function GetEvent200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEvent200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : GetEvent200ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function GetEvent200ResponseToJSON(value?: GetEvent200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetEvent200ResponseDataToJSON(value.data),
        'params': value.params,
    };
}
