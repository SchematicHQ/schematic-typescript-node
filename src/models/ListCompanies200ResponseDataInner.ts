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
 * @interface ListCompanies200ResponseDataInner
 */
export interface ListCompanies200ResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof ListCompanies200ResponseDataInner
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof ListCompanies200ResponseDataInner
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof ListCompanies200ResponseDataInner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ListCompanies200ResponseDataInner
     */
    lastSeenAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListCompanies200ResponseDataInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ListCompanies200ResponseDataInner
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the ListCompanies200ResponseDataInner interface.
 */
export function instanceOfListCompanies200ResponseDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "environmentId" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function ListCompanies200ResponseDataInnerFromJSON(json: any): ListCompanies200ResponseDataInner {
    return ListCompanies200ResponseDataInnerFromJSONTyped(json, false);
}

export function ListCompanies200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCompanies200ResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': json['created_at'],
        'environmentId': json['environment_id'],
        'id': json['id'],
        'lastSeenAt': !exists(json, 'last_seen_at') ? undefined : json['last_seen_at'],
        'name': json['name'],
        'updatedAt': json['updated_at'],
    };
}

export function ListCompanies200ResponseDataInnerToJSON(value?: ListCompanies200ResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': value.createdAt,
        'environment_id': value.environmentId,
        'id': value.id,
        'last_seen_at': value.lastSeenAt,
        'name': value.name,
        'updated_at': value.updatedAt,
    };
}

