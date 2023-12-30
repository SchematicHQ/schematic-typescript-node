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
 * @interface ListUsersParams
 */
export interface ListUsersParams {
    /**
     * 
     * @type {Array<number>}
     * @memberof ListUsersParams
     */
    ids?: Array<number>;
}

/**
 * Check if a given object implements the ListUsersParams interface.
 */
export function instanceOfListUsersParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListUsersParamsFromJSON(json: any): ListUsersParams {
    return ListUsersParamsFromJSONTyped(json, false);
}

export function ListUsersParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListUsersParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ids': !exists(json, 'ids') ? undefined : json['ids'],
    };
}

export function ListUsersParamsToJSON(value?: ListUsersParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ids': value.ids,
    };
}

