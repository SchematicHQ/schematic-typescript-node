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
/**
 * Input parameters
 * @export
 * @interface ListFeatureUsersParams
 */
export interface ListFeatureUsersParams {
    /**
     * 
     * @type {string}
     * @memberof ListFeatureUsersParams
     */
    featureId?: string;
    /**
     * 
     * @type {number}
     * @memberof ListFeatureUsersParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListFeatureUsersParams
     */
    offset?: number;
    /**
     * 
     * @type {string}
     * @memberof ListFeatureUsersParams
     */
    q?: string;
}

/**
 * Check if a given object implements the ListFeatureUsersParams interface.
 */
export function instanceOfListFeatureUsersParams(value: object): boolean {
    return true;
}

export function ListFeatureUsersParamsFromJSON(json: any): ListFeatureUsersParams {
    return ListFeatureUsersParamsFromJSONTyped(json, false);
}

export function ListFeatureUsersParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFeatureUsersParams {
    if (json == null) {
        return json;
    }
    return {
        
        'featureId': json['feature_id'] == null ? undefined : json['feature_id'],
        'limit': json['limit'] == null ? undefined : json['limit'],
        'offset': json['offset'] == null ? undefined : json['offset'],
        'q': json['q'] == null ? undefined : json['q'],
    };
}

export function ListFeatureUsersParamsToJSON(value?: ListFeatureUsersParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'feature_id': value['featureId'],
        'limit': value['limit'],
        'offset': value['offset'],
        'q': value['q'],
    };
}
