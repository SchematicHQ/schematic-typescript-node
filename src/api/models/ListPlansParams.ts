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
 * @interface ListPlansParams
 */
export interface ListPlansParams {
    /**
     * 
     * @type {string}
     * @memberof ListPlansParams
     */
    dir?: string;
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
    /**
     * 
     * @type {string}
     * @memberof ListPlansParams
     */
    order?: string;
}

/**
 * Check if a given object implements the ListPlansParams interface.
 */
export function instanceOfListPlansParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListPlansParamsFromJSON(json: any): ListPlansParams {
    return ListPlansParamsFromJSONTyped(json, false);
}

export function ListPlansParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListPlansParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dir': !exists(json, 'dir') ? undefined : json['dir'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'order': !exists(json, 'order') ? undefined : json['order'],
    };
}

export function ListPlansParamsToJSON(value?: ListPlansParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dir': value.dir,
        'limit': value.limit,
        'offset': value.offset,
        'order': value.order,
    };
}

