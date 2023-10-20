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

/**
 * The returned resource
 * @export
 * @interface CreateCompany201ResponseData
 */
export interface CreateCompany201ResponseData {
    /**
     * 
     * @type {string}
     * @memberof CreateCompany201ResponseData
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCompany201ResponseData
     */
    environmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCompany201ResponseData
     */
    id?: string;
    /**
     * 
     * @type {Array<CreateCompany201ResponseDataKeysInner>}
     * @memberof CreateCompany201ResponseData
     */
    keys?: Array<CreateCompany201ResponseDataKeysInner>;
    /**
     * 
     * @type {string}
     * @memberof CreateCompany201ResponseData
     */
    lastSeenAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCompany201ResponseData
     */
    name?: string;
    /**
     * A map of trait names to trait values
     * @type {object}
     * @memberof CreateCompany201ResponseData
     */
    traits?: object;
    /**
     * 
     * @type {string}
     * @memberof CreateCompany201ResponseData
     */
    updatedAt?: string;
}

/**
 * Check if a given object implements the CreateCompany201ResponseData interface.
 */
export function instanceOfCreateCompany201ResponseData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateCompany201ResponseDataFromJSON(json: any): CreateCompany201ResponseData {
    return CreateCompany201ResponseDataFromJSONTyped(json, false);
}

export function CreateCompany201ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCompany201ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'environmentId': !exists(json, 'environment_id') ? undefined : json['environment_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'keys': !exists(json, 'keys') ? undefined : ((json['keys'] as Array<any>).map(CreateCompany201ResponseDataKeysInnerFromJSON)),
        'lastSeenAt': !exists(json, 'last_seen_at') ? undefined : json['last_seen_at'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'traits': !exists(json, 'traits') ? undefined : json['traits'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}

export function CreateCompany201ResponseDataToJSON(value?: CreateCompany201ResponseData | null): any {
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
        'keys': value.keys === undefined ? undefined : ((value.keys as Array<any>).map(CreateCompany201ResponseDataKeysInnerToJSON)),
        'last_seen_at': value.lastSeenAt,
        'name': value.name,
        'traits': value.traits,
        'updated_at': value.updatedAt,
    };
}

