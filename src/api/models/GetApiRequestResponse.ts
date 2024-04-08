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
import type { ApiKeyRequestResponseData } from './ApiKeyRequestResponseData';
import {
    ApiKeyRequestResponseDataFromJSON,
    ApiKeyRequestResponseDataFromJSONTyped,
    ApiKeyRequestResponseDataToJSON,
} from './ApiKeyRequestResponseData';

/**
 * 
 * @export
 * @interface GetApiRequestResponse
 */
export interface GetApiRequestResponse {
    /**
     * 
     * @type {ApiKeyRequestResponseData}
     * @memberof GetApiRequestResponse
     */
    data: ApiKeyRequestResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof GetApiRequestResponse
     */
    params: object;
}

/**
 * Check if a given object implements the GetApiRequestResponse interface.
 */
export function instanceOfGetApiRequestResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function GetApiRequestResponseFromJSON(json: any): GetApiRequestResponse {
    return GetApiRequestResponseFromJSONTyped(json, false);
}

export function GetApiRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetApiRequestResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ApiKeyRequestResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function GetApiRequestResponseToJSON(value?: GetApiRequestResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': ApiKeyRequestResponseDataToJSON(value['data']),
        'params': value['params'],
    };
}

