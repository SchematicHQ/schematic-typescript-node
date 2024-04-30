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
import type { CountPlansParams } from './CountPlansParams';
import {
    CountPlansParamsFromJSON,
    CountPlansParamsFromJSONTyped,
    CountPlansParamsToJSON,
} from './CountPlansParams';
import type { CountResponse } from './CountResponse';
import {
    CountResponseFromJSON,
    CountResponseFromJSONTyped,
    CountResponseToJSON,
} from './CountResponse';

/**
 * 
 * @export
 * @interface CountPlansResponse
 */
export interface CountPlansResponse {
    /**
     * 
     * @type {CountResponse}
     * @memberof CountPlansResponse
     */
    data: CountResponse;
    /**
     * 
     * @type {CountPlansParams}
     * @memberof CountPlansResponse
     */
    params: CountPlansParams;
}

/**
 * Check if a given object implements the CountPlansResponse interface.
 */
export function instanceOfCountPlansResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function CountPlansResponseFromJSON(json: any): CountPlansResponse {
    return CountPlansResponseFromJSONTyped(json, false);
}

export function CountPlansResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountPlansResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CountResponseFromJSON(json['data']),
        'params': CountPlansParamsFromJSON(json['params']),
    };
}

export function CountPlansResponseToJSON(value?: CountPlansResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': CountResponseToJSON(value['data']),
        'params': CountPlansParamsToJSON(value['params']),
    };
}
