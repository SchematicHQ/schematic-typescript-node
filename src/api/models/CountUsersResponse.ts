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
import type { CountResponse } from './CountResponse';
import {
    CountResponseFromJSON,
    CountResponseFromJSONTyped,
    CountResponseToJSON,
} from './CountResponse';
import type { CountUsersParams } from './CountUsersParams';
import {
    CountUsersParamsFromJSON,
    CountUsersParamsFromJSONTyped,
    CountUsersParamsToJSON,
} from './CountUsersParams';

/**
 * 
 * @export
 * @interface CountUsersResponse
 */
export interface CountUsersResponse {
    /**
     * 
     * @type {CountResponse}
     * @memberof CountUsersResponse
     */
    data: CountResponse;
    /**
     * 
     * @type {CountUsersParams}
     * @memberof CountUsersResponse
     */
    params: CountUsersParams;
}

/**
 * Check if a given object implements the CountUsersResponse interface.
 */
export function instanceOfCountUsersResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function CountUsersResponseFromJSON(json: any): CountUsersResponse {
    return CountUsersResponseFromJSONTyped(json, false);
}

export function CountUsersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountUsersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CountResponseFromJSON(json['data']),
        'params': CountUsersParamsFromJSON(json['params']),
    };
}

export function CountUsersResponseToJSON(value?: CountUsersResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': CountResponseToJSON(value['data']),
        'params': CountUsersParamsToJSON(value['params']),
    };
}

