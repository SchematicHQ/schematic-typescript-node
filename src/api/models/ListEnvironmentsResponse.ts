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
import type { ListEnvironmentsParams } from './ListEnvironmentsParams';
import {
    ListEnvironmentsParamsFromJSON,
    ListEnvironmentsParamsFromJSONTyped,
    ListEnvironmentsParamsToJSON,
} from './ListEnvironmentsParams';

/**
 * 
 * @export
 * @interface ListEnvironmentsResponse
 */
export interface ListEnvironmentsResponse {
    /**
     * The returned resources
     * @type {Array<EnvironmentResponseData>}
     * @memberof ListEnvironmentsResponse
     */
    data: Array<EnvironmentResponseData>;
    /**
     * 
     * @type {ListEnvironmentsParams}
     * @memberof ListEnvironmentsResponse
     */
    params: ListEnvironmentsParams;
}

/**
 * Check if a given object implements the ListEnvironmentsResponse interface.
 */
export function instanceOfListEnvironmentsResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function ListEnvironmentsResponseFromJSON(json: any): ListEnvironmentsResponse {
    return ListEnvironmentsResponseFromJSONTyped(json, false);
}

export function ListEnvironmentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListEnvironmentsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(EnvironmentResponseDataFromJSON)),
        'params': ListEnvironmentsParamsFromJSON(json['params']),
    };
}

export function ListEnvironmentsResponseToJSON(value?: ListEnvironmentsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': ((value['data'] as Array<any>).map(EnvironmentResponseDataToJSON)),
        'params': ListEnvironmentsParamsToJSON(value['params']),
    };
}

