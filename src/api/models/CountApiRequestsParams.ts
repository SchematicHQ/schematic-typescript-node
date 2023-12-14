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
 * @interface CountApiRequestsParams
 */
export interface CountApiRequestsParams {
    /**
     * 
     * @type {string}
     * @memberof CountApiRequestsParams
     */
    dir?: string;
    /**
     * 
     * @type {number}
     * @memberof CountApiRequestsParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof CountApiRequestsParams
     */
    offset?: number;
    /**
     * 
     * @type {string}
     * @memberof CountApiRequestsParams
     */
    order?: string;
    /**
     * 
     * @type {string}
     * @memberof CountApiRequestsParams
     */
    q?: string;
}

/**
 * Check if a given object implements the CountApiRequestsParams interface.
 */
export function instanceOfCountApiRequestsParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CountApiRequestsParamsFromJSON(json: any): CountApiRequestsParams {
    return CountApiRequestsParamsFromJSONTyped(json, false);
}

export function CountApiRequestsParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountApiRequestsParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dir': !exists(json, 'dir') ? undefined : json['dir'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'q': !exists(json, 'q') ? undefined : json['q'],
    };
}

export function CountApiRequestsParamsToJSON(value?: CountApiRequestsParams | null): any {
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
        'q': value.q,
    };
}
