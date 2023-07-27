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
import type { CheckFlag200ResponseData } from './CheckFlag200ResponseData';
import {
    CheckFlag200ResponseDataFromJSON,
    CheckFlag200ResponseDataFromJSONTyped,
    CheckFlag200ResponseDataToJSON,
} from './CheckFlag200ResponseData';

/**
 * 
 * @export
 * @interface CheckFlag200Response
 */
export interface CheckFlag200Response {
    /**
     * 
     * @type {CheckFlag200ResponseData}
     * @memberof CheckFlag200Response
     */
    data?: CheckFlag200ResponseData;
    /**
     * 
     * @type {any}
     * @memberof CheckFlag200Response
     */
    params?: any | null;
}

/**
 * Check if a given object implements the CheckFlag200Response interface.
 */
export function instanceOfCheckFlag200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CheckFlag200ResponseFromJSON(json: any): CheckFlag200Response {
    return CheckFlag200ResponseFromJSONTyped(json, false);
}

export function CheckFlag200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckFlag200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CheckFlag200ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function CheckFlag200ResponseToJSON(value?: CheckFlag200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CheckFlag200ResponseDataToJSON(value.data),
        'params': value.params,
    };
}

