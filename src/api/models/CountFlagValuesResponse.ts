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
import type { CountFlagValuesParams } from './CountFlagValuesParams';
import {
    CountFlagValuesParamsFromJSON,
    CountFlagValuesParamsFromJSONTyped,
    CountFlagValuesParamsToJSON,
} from './CountFlagValuesParams';
import type { CountResponse } from './CountResponse';
import {
    CountResponseFromJSON,
    CountResponseFromJSONTyped,
    CountResponseToJSON,
} from './CountResponse';

/**
 * 
 * @export
 * @interface CountFlagValuesResponse
 */
export interface CountFlagValuesResponse {
    /**
     * 
     * @type {CountResponse}
     * @memberof CountFlagValuesResponse
     */
    data: CountResponse;
    /**
     * 
     * @type {CountFlagValuesParams}
     * @memberof CountFlagValuesResponse
     */
    params: CountFlagValuesParams;
}

/**
 * Check if a given object implements the CountFlagValuesResponse interface.
 */
export function instanceOfCountFlagValuesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function CountFlagValuesResponseFromJSON(json: any): CountFlagValuesResponse {
    return CountFlagValuesResponseFromJSONTyped(json, false);
}

export function CountFlagValuesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountFlagValuesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CountResponseFromJSON(json['data']),
        'params': CountFlagValuesParamsFromJSON(json['params']),
    };
}

export function CountFlagValuesResponseToJSON(value?: CountFlagValuesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CountResponseToJSON(value.data),
        'params': CountFlagValuesParamsToJSON(value.params),
    };
}

