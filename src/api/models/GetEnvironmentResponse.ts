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
import type { EnvironmentResponseData } from './EnvironmentResponseData';
import {
    EnvironmentResponseDataFromJSON,
    EnvironmentResponseDataFromJSONTyped,
    EnvironmentResponseDataToJSON,
} from './EnvironmentResponseData';

/**
 * 
 * @export
 * @interface GetEnvironmentResponse
 */
export interface GetEnvironmentResponse {
    /**
     * 
     * @type {EnvironmentResponseData}
     * @memberof GetEnvironmentResponse
     */
    data: EnvironmentResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof GetEnvironmentResponse
     */
    params: object;
}

/**
 * Check if a given object implements the GetEnvironmentResponse interface.
 */
export function instanceOfGetEnvironmentResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function GetEnvironmentResponseFromJSON(json: any): GetEnvironmentResponse {
    return GetEnvironmentResponseFromJSONTyped(json, false);
}

export function GetEnvironmentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEnvironmentResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': EnvironmentResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function GetEnvironmentResponseToJSON(value?: GetEnvironmentResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': EnvironmentResponseDataToJSON(value['data']),
        'params': value['params'],
    };
}

