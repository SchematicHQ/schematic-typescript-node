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
import type { GetUser200ResponseData } from './GetUser200ResponseData';
import {
    GetUser200ResponseDataFromJSON,
    GetUser200ResponseDataFromJSONTyped,
    GetUser200ResponseDataToJSON,
} from './GetUser200ResponseData';

/**
 * 
 * @export
 * @interface GetUser200Response
 */
export interface GetUser200Response {
    /**
     * 
     * @type {GetUser200ResponseData}
     * @memberof GetUser200Response
     */
    data?: GetUser200ResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof GetUser200Response
     */
    params?: object;
}

/**
 * Check if a given object implements the GetUser200Response interface.
 */
export function instanceOfGetUser200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetUser200ResponseFromJSON(json: any): GetUser200Response {
    return GetUser200ResponseFromJSONTyped(json, false);
}

export function GetUser200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUser200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : GetUser200ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function GetUser200ResponseToJSON(value?: GetUser200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetUser200ResponseDataToJSON(value.data),
        'params': value.params,
    };
}

