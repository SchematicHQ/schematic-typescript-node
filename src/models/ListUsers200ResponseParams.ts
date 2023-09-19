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
 * @interface ListUsers200ResponseParams
 */
export interface ListUsers200ResponseParams {
    /**
     * 
     * @type {string}
     * @memberof ListUsers200ResponseParams
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListUsers200ResponseParams
     */
    dir?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof ListUsers200ResponseParams
     */
    ids?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof ListUsers200ResponseParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListUsers200ResponseParams
     */
    offset?: number;
    /**
     * 
     * @type {string}
     * @memberof ListUsers200ResponseParams
     */
    order?: string;
}

/**
 * Check if a given object implements the ListUsers200ResponseParams interface.
 */
export function instanceOfListUsers200ResponseParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListUsers200ResponseParamsFromJSON(json: any): ListUsers200ResponseParams {
    return ListUsers200ResponseParamsFromJSONTyped(json, false);
}

export function ListUsers200ResponseParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListUsers200ResponseParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'dir': !exists(json, 'dir') ? undefined : json['dir'],
        'ids': !exists(json, 'ids') ? undefined : json['ids'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'order': !exists(json, 'order') ? undefined : json['order'],
    };
}

export function ListUsers200ResponseParamsToJSON(value?: ListUsers200ResponseParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'dir': value.dir,
        'ids': value.ids,
        'limit': value.limit,
        'offset': value.offset,
        'order': value.order,
    };
}

