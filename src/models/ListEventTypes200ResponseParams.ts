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
 * @interface ListEventTypes200ResponseParams
 */
export interface ListEventTypes200ResponseParams {
    /**
     * Order direction
     * @type {string}
     * @memberof ListEventTypes200ResponseParams
     */
    dir?: string;
    /**
     * Page limit (default 100)
     * @type {number}
     * @memberof ListEventTypes200ResponseParams
     */
    limit?: number;
    /**
     * Page offset (default 0)
     * @type {number}
     * @memberof ListEventTypes200ResponseParams
     */
    offset?: number;
    /**
     * Order by column
     * @type {string}
     * @memberof ListEventTypes200ResponseParams
     */
    order?: string;
    /**
     * 
     * @type {string}
     * @memberof ListEventTypes200ResponseParams
     */
    q?: string;
}

/**
 * Check if a given object implements the ListEventTypes200ResponseParams interface.
 */
export function instanceOfListEventTypes200ResponseParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListEventTypes200ResponseParamsFromJSON(json: any): ListEventTypes200ResponseParams {
    return ListEventTypes200ResponseParamsFromJSONTyped(json, false);
}

export function ListEventTypes200ResponseParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListEventTypes200ResponseParams {
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

export function ListEventTypes200ResponseParamsToJSON(value?: ListEventTypes200ResponseParams | null): any {
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

