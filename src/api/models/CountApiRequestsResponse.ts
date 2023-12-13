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
import type { CountApiRequestsParams } from './CountApiRequestsParams';
import {
    CountApiRequestsParamsFromJSON,
    CountApiRequestsParamsFromJSONTyped,
    CountApiRequestsParamsToJSON,
} from './CountApiRequestsParams';
import type { CountResponse } from './CountResponse';
import {
    CountResponseFromJSON,
    CountResponseFromJSONTyped,
    CountResponseToJSON,
} from './CountResponse';

/**
 * 
 * @export
 * @interface CountApiRequestsResponse
 */
export interface CountApiRequestsResponse {
    /**
     * 
     * @type {CountResponse}
     * @memberof CountApiRequestsResponse
     */
    data: CountResponse;
    /**
     * 
     * @type {CountApiRequestsParams}
     * @memberof CountApiRequestsResponse
     */
    params: CountApiRequestsParams;
}

/**
 * Check if a given object implements the CountApiRequestsResponse interface.
 */
export function instanceOfCountApiRequestsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function CountApiRequestsResponseFromJSON(json: any): CountApiRequestsResponse {
    return CountApiRequestsResponseFromJSONTyped(json, false);
}

export function CountApiRequestsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountApiRequestsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CountResponseFromJSON(json['data']),
        'params': CountApiRequestsParamsFromJSON(json['params']),
    };
}

export function CountApiRequestsResponseToJSON(value?: CountApiRequestsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CountResponseToJSON(value.data),
        'params': CountApiRequestsParamsToJSON(value.params),
    };
}

