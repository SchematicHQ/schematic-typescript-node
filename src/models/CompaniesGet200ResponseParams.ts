/* tslint:disable */
/* eslint-disable */
/**
 * Schematic API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
 * @interface CompaniesGet200ResponseParams
 */
export interface CompaniesGet200ResponseParams {
    /**
     * Order direction
     * @type {string}
     * @memberof CompaniesGet200ResponseParams
     */
    dir?: string;
    /**
     * Page limit (default 100)
     * @type {number}
     * @memberof CompaniesGet200ResponseParams
     */
    limit?: number;
    /**
     * Page offset (default 0)
     * @type {number}
     * @memberof CompaniesGet200ResponseParams
     */
    offset?: number;
    /**
     * Order by column
     * @type {string}
     * @memberof CompaniesGet200ResponseParams
     */
    order?: string;
}

/**
 * Check if a given object implements the CompaniesGet200ResponseParams interface.
 */
export function instanceOfCompaniesGet200ResponseParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompaniesGet200ResponseParamsFromJSON(json: any): CompaniesGet200ResponseParams {
    return CompaniesGet200ResponseParamsFromJSONTyped(json, false);
}

export function CompaniesGet200ResponseParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompaniesGet200ResponseParams {
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

export function CompaniesGet200ResponseParamsToJSON(value?: CompaniesGet200ResponseParams | null): any {
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

