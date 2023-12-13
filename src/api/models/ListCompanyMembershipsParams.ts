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
 * @interface ListCompanyMembershipsParams
 */
export interface ListCompanyMembershipsParams {
    /**
     * 
     * @type {string}
     * @memberof ListCompanyMembershipsParams
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListCompanyMembershipsParams
     */
    dir?: string;
    /**
     * 
     * @type {number}
     * @memberof ListCompanyMembershipsParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListCompanyMembershipsParams
     */
    offset?: number;
    /**
     * 
     * @type {string}
     * @memberof ListCompanyMembershipsParams
     */
    order?: string;
    /**
     * 
     * @type {string}
     * @memberof ListCompanyMembershipsParams
     */
    userId?: string;
}

/**
 * Check if a given object implements the ListCompanyMembershipsParams interface.
 */
export function instanceOfListCompanyMembershipsParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListCompanyMembershipsParamsFromJSON(json: any): ListCompanyMembershipsParams {
    return ListCompanyMembershipsParamsFromJSONTyped(json, false);
}

export function ListCompanyMembershipsParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCompanyMembershipsParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'dir': !exists(json, 'dir') ? undefined : json['dir'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
    };
}

export function ListCompanyMembershipsParamsToJSON(value?: ListCompanyMembershipsParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'dir': value.dir,
        'limit': value.limit,
        'offset': value.offset,
        'order': value.order,
        'user_id': value.userId,
    };
}

