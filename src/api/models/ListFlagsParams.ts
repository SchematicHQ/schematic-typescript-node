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
 * @interface ListFlagsParams
 */
export interface ListFlagsParams {
    /**
     * 
     * @type {string}
     * @memberof ListFlagsParams
     */
    featureId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListFlagsParams
     */
    flagIds?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ListFlagsParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListFlagsParams
     */
    offset?: number;
}

/**
 * Check if a given object implements the ListFlagsParams interface.
 */
export function instanceOfListFlagsParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListFlagsParamsFromJSON(json: any): ListFlagsParams {
    return ListFlagsParamsFromJSONTyped(json, false);
}

export function ListFlagsParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFlagsParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'featureId': !exists(json, 'feature_id') ? undefined : json['feature_id'],
        'flagIds': !exists(json, 'flag_ids') ? undefined : json['flag_ids'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
    };
}

export function ListFlagsParamsToJSON(value?: ListFlagsParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'feature_id': value.featureId,
        'flag_ids': value.flagIds,
        'limit': value.limit,
        'offset': value.offset,
    };
}

