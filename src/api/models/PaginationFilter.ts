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
 * 
 * @export
 * @interface PaginationFilter
 */
export interface PaginationFilter {
    /**
     * Order direction
     * @type {string}
     * @memberof PaginationFilter
     */
    dir?: string | null;
    /**
     * Page limit (default 100)
     * @type {number}
     * @memberof PaginationFilter
     */
    limit?: number | null;
    /**
     * Page offset (default 0)
     * @type {number}
     * @memberof PaginationFilter
     */
    offset?: number | null;
    /**
     * Order by column
     * @type {string}
     * @memberof PaginationFilter
     */
    order?: string | null;
}

/**
 * Check if a given object implements the PaginationFilter interface.
 */
export function instanceOfPaginationFilter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginationFilterFromJSON(json: any): PaginationFilter {
    return PaginationFilterFromJSONTyped(json, false);
}

export function PaginationFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginationFilter {
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

export function PaginationFilterToJSON(value?: PaginationFilter | null): any {
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

