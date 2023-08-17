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
 * @interface ListUsers200ResponseDataInner
 */
export interface ListUsers200ResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof ListUsers200ResponseDataInner
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListUsers200ResponseDataInner
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof ListUsers200ResponseDataInner
     */
    environmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListUsers200ResponseDataInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ListUsers200ResponseDataInner
     */
    lastSeenAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListUsers200ResponseDataInner
     */
    updatedAt?: string;
}

/**
 * Check if a given object implements the ListUsers200ResponseDataInner interface.
 */
export function instanceOfListUsers200ResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListUsers200ResponseDataInnerFromJSON(json: any): ListUsers200ResponseDataInner {
    return ListUsers200ResponseDataInnerFromJSONTyped(json, false);
}

export function ListUsers200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListUsers200ResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'environmentId': !exists(json, 'environment_id') ? undefined : json['environment_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastSeenAt': !exists(json, 'last_seen_at') ? undefined : json['last_seen_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}

export function ListUsers200ResponseDataInnerToJSON(value?: ListUsers200ResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'created_at': value.createdAt,
        'environment_id': value.environmentId,
        'id': value.id,
        'last_seen_at': value.lastSeenAt,
        'updated_at': value.updatedAt,
    };
}

