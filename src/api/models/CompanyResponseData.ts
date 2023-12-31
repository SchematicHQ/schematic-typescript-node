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
 * @interface CompanyResponseData
 */
export interface CompanyResponseData {
    /**
     * 
     * @type {Date}
     * @memberof CompanyResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CompanyResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyResponseData
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof CompanyResponseData
     */
    lastSeenAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CompanyResponseData
     */
    name: string;
    /**
     * 
     * @type {Date}
     * @memberof CompanyResponseData
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the CompanyResponseData interface.
 */
export function instanceOfCompanyResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "environmentId" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function CompanyResponseDataFromJSON(json: any): CompanyResponseData {
    return CompanyResponseDataFromJSONTyped(json, false);
}

export function CompanyResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['created_at'])),
        'environmentId': json['environment_id'],
        'id': json['id'],
        'lastSeenAt': !exists(json, 'last_seen_at') ? undefined : (json['last_seen_at'] === null ? null : new Date(json['last_seen_at'])),
        'name': json['name'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function CompanyResponseDataToJSON(value?: CompanyResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': (value.createdAt.toISOString()),
        'environment_id': value.environmentId,
        'id': value.id,
        'last_seen_at': value.lastSeenAt === undefined ? undefined : (value.lastSeenAt === null ? null : value.lastSeenAt.toISOString()),
        'name': value.name,
        'updated_at': (value.updatedAt.toISOString()),
    };
}

