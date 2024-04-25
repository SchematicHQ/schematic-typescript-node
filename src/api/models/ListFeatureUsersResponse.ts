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
import type { FeatureCompanyUserResponseData } from './FeatureCompanyUserResponseData';
import {
    FeatureCompanyUserResponseDataFromJSON,
    FeatureCompanyUserResponseDataFromJSONTyped,
    FeatureCompanyUserResponseDataToJSON,
} from './FeatureCompanyUserResponseData';
import type { ListFeatureUsersParams } from './ListFeatureUsersParams';
import {
    ListFeatureUsersParamsFromJSON,
    ListFeatureUsersParamsFromJSONTyped,
    ListFeatureUsersParamsToJSON,
} from './ListFeatureUsersParams';

/**
 * 
 * @export
 * @interface ListFeatureUsersResponse
 */
export interface ListFeatureUsersResponse {
    /**
     * The returned resources
     * @type {Array<FeatureCompanyUserResponseData>}
     * @memberof ListFeatureUsersResponse
     */
    data: Array<FeatureCompanyUserResponseData>;
    /**
     * 
     * @type {ListFeatureUsersParams}
     * @memberof ListFeatureUsersResponse
     */
    params: ListFeatureUsersParams;
}

/**
 * Check if a given object implements the ListFeatureUsersResponse interface.
 */
export function instanceOfListFeatureUsersResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function ListFeatureUsersResponseFromJSON(json: any): ListFeatureUsersResponse {
    return ListFeatureUsersResponseFromJSONTyped(json, false);
}

export function ListFeatureUsersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFeatureUsersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(FeatureCompanyUserResponseDataFromJSON)),
        'params': ListFeatureUsersParamsFromJSON(json['params']),
    };
}

export function ListFeatureUsersResponseToJSON(value?: ListFeatureUsersResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': ((value['data'] as Array<any>).map(FeatureCompanyUserResponseDataToJSON)),
        'params': ListFeatureUsersParamsToJSON(value['params']),
    };
}

