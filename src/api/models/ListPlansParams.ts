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
 * @interface ListPlansParams
 */
export interface ListPlansParams {
    /**
     * 
     * @type {number}
     * @memberof ListPlansParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListPlansParams
     */
    offset?: number;
}

/**
 * Check if a given object implements the ListPlansParams interface.
 */
export function instanceOfListPlansParams(value: object): boolean {
    return true;
}

export function ListPlansParamsFromJSON(json: any): ListPlansParams {
    return ListPlansParamsFromJSONTyped(json, false);
}

export function ListPlansParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListPlansParams {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'] == null ? undefined : json['limit'],
        'offset': json['offset'] == null ? undefined : json['offset'],
    };
}

export function ListPlansParamsToJSON(value?: ListPlansParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'limit': value['limit'],
        'offset': value['offset'],
    };
}

