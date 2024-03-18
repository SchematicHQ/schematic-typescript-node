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
 * @interface ListFeaturesParams
 */
export interface ListFeaturesParams {
    /**
     * 
     * @type {number}
     * @memberof ListFeaturesParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListFeaturesParams
     */
    offset?: number;
}

/**
 * Check if a given object implements the ListFeaturesParams interface.
 */
export function instanceOfListFeaturesParams(value: object): boolean {
    return true;
}

export function ListFeaturesParamsFromJSON(json: any): ListFeaturesParams {
    return ListFeaturesParamsFromJSONTyped(json, false);
}

export function ListFeaturesParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFeaturesParams {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'] == null ? undefined : json['limit'],
        'offset': json['offset'] == null ? undefined : json['offset'],
    };
}

export function ListFeaturesParamsToJSON(value?: ListFeaturesParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'limit': value['limit'],
        'offset': value['offset'],
    };
}

