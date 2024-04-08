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
import type { CountFlagChecksParams } from './CountFlagChecksParams';
import {
    CountFlagChecksParamsFromJSON,
    CountFlagChecksParamsFromJSONTyped,
    CountFlagChecksParamsToJSON,
} from './CountFlagChecksParams';
import type { CountResponse } from './CountResponse';
import {
    CountResponseFromJSON,
    CountResponseFromJSONTyped,
    CountResponseToJSON,
} from './CountResponse';

/**
 * 
 * @export
 * @interface CountFlagChecksResponse
 */
export interface CountFlagChecksResponse {
    /**
     * 
     * @type {CountResponse}
     * @memberof CountFlagChecksResponse
     */
    data: CountResponse;
    /**
     * 
     * @type {CountFlagChecksParams}
     * @memberof CountFlagChecksResponse
     */
    params: CountFlagChecksParams;
}

/**
 * Check if a given object implements the CountFlagChecksResponse interface.
 */
export function instanceOfCountFlagChecksResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function CountFlagChecksResponseFromJSON(json: any): CountFlagChecksResponse {
    return CountFlagChecksResponseFromJSONTyped(json, false);
}

export function CountFlagChecksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountFlagChecksResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CountResponseFromJSON(json['data']),
        'params': CountFlagChecksParamsFromJSON(json['params']),
    };
}

export function CountFlagChecksResponseToJSON(value?: CountFlagChecksResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': CountResponseToJSON(value['data']),
        'params': CountFlagChecksParamsToJSON(value['params']),
    };
}

