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
import type { CreateCompany201ResponseDataKeysInner } from './CreateCompany201ResponseDataKeysInner';
import {
    CreateCompany201ResponseDataKeysInnerFromJSON,
    CreateCompany201ResponseDataKeysInnerFromJSONTyped,
    CreateCompany201ResponseDataKeysInnerToJSON,
} from './CreateCompany201ResponseDataKeysInner';
import type { ListCompanyMemberships200ResponseDataInner } from './ListCompanyMemberships200ResponseDataInner';
import {
    ListCompanyMemberships200ResponseDataInnerFromJSON,
    ListCompanyMemberships200ResponseDataInnerFromJSONTyped,
    ListCompanyMemberships200ResponseDataInnerToJSON,
} from './ListCompanyMemberships200ResponseDataInner';

/**
 * The returned resource
 * @export
 * @interface GetUser200ResponseData
 */
export interface GetUser200ResponseData {
    /**
     * 
     * @type {Array<ListCompanyMemberships200ResponseDataInner>}
     * @memberof GetUser200ResponseData
     */
    companyMemberships: Array<ListCompanyMemberships200ResponseDataInner>;
    /**
     * 
     * @type {string}
     * @memberof GetUser200ResponseData
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof GetUser200ResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof GetUser200ResponseData
     */
    id: string;
    /**
     * 
     * @type {Array<CreateCompany201ResponseDataKeysInner>}
     * @memberof GetUser200ResponseData
     */
    keys: Array<CreateCompany201ResponseDataKeysInner>;
    /**
     * 
     * @type {string}
     * @memberof GetUser200ResponseData
     */
    lastSeenAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetUser200ResponseData
     */
    name: string;
    /**
     * A map of trait names to trait values
     * @type {object}
     * @memberof GetUser200ResponseData
     */
    traits?: object;
    /**
     * 
     * @type {string}
     * @memberof GetUser200ResponseData
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the GetUser200ResponseData interface.
 */
export function instanceOfGetUser200ResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "companyMemberships" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "environmentId" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "keys" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function GetUser200ResponseDataFromJSON(json: any): GetUser200ResponseData {
    return GetUser200ResponseDataFromJSONTyped(json, false);
}

export function GetUser200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUser200ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyMemberships': ((json['company_memberships'] as Array<any>).map(ListCompanyMemberships200ResponseDataInnerFromJSON)),
        'createdAt': json['created_at'],
        'environmentId': json['environment_id'],
        'id': json['id'],
        'keys': ((json['keys'] as Array<any>).map(CreateCompany201ResponseDataKeysInnerFromJSON)),
        'lastSeenAt': !exists(json, 'last_seen_at') ? undefined : json['last_seen_at'],
        'name': json['name'],
        'traits': !exists(json, 'traits') ? undefined : json['traits'],
        'updatedAt': json['updated_at'],
    };
}

export function GetUser200ResponseDataToJSON(value?: GetUser200ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_memberships': ((value.companyMemberships as Array<any>).map(ListCompanyMemberships200ResponseDataInnerToJSON)),
        'created_at': value.createdAt,
        'environment_id': value.environmentId,
        'id': value.id,
        'keys': ((value.keys as Array<any>).map(CreateCompany201ResponseDataKeysInnerToJSON)),
        'last_seen_at': value.lastSeenAt,
        'name': value.name,
        'traits': value.traits,
        'updated_at': value.updatedAt,
    };
}

