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
 * @interface ListFlagChecksParams
 */
export interface ListFlagChecksParams {
    /**
     * 
     * @type {string}
     * @memberof ListFlagChecksParams
     */
    dir?: string;
    /**
     * 
     * @type {string}
     * @memberof ListFlagChecksParams
     */
    flagId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListFlagChecksParams
     */
    flagIds?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ListFlagChecksParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListFlagChecksParams
     */
    offset?: number;
    /**
     * 
     * @type {string}
     * @memberof ListFlagChecksParams
     */
    order?: string;
}

/**
 * Check if a given object implements the ListFlagChecksParams interface.
 */
export function instanceOfListFlagChecksParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListFlagChecksParamsFromJSON(json: any): ListFlagChecksParams {
    return ListFlagChecksParamsFromJSONTyped(json, false);
}

export function ListFlagChecksParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFlagChecksParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dir': !exists(json, 'dir') ? undefined : json['dir'],
        'flagId': !exists(json, 'flag_id') ? undefined : json['flag_id'],
        'flagIds': !exists(json, 'flag_ids') ? undefined : json['flag_ids'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'order': !exists(json, 'order') ? undefined : json['order'],
    };
}

export function ListFlagChecksParamsToJSON(value?: ListFlagChecksParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dir': value.dir,
        'flag_id': value.flagId,
        'flag_ids': value.flagIds,
        'limit': value.limit,
        'offset': value.offset,
        'order': value.order,
    };
}

