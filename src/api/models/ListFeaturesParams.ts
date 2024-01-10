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
    let isInstance = true;

    return isInstance;
}

export function ListFeaturesParamsFromJSON(json: any): ListFeaturesParams {
    return ListFeaturesParamsFromJSONTyped(json, false);
}

export function ListFeaturesParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFeaturesParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
    };
}

export function ListFeaturesParamsToJSON(value?: ListFeaturesParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'offset': value.offset,
    };
}

