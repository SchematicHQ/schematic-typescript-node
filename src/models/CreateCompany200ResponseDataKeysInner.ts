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
 * @interface CreateCompany200ResponseDataKeysInner
 */
export interface CreateCompany200ResponseDataKeysInner {
    /**
     * 
     * @type {string}
     * @memberof CreateCompany200ResponseDataKeysInner
     */
    accountId?: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateCompany200ResponseDataKeysInner
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateCompany200ResponseDataKeysInner
     */
    entityId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCompany200ResponseDataKeysInner
     */
    entityType?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCompany200ResponseDataKeysInner
     */
    environmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCompany200ResponseDataKeysInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCompany200ResponseDataKeysInner
     */
    keyType?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCompany200ResponseDataKeysInner
     */
    keyTypeId?: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateCompany200ResponseDataKeysInner
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateCompany200ResponseDataKeysInner
     */
    value?: string;
}

/**
 * Check if a given object implements the CreateCompany200ResponseDataKeysInner interface.
 */
export function instanceOfCreateCompany200ResponseDataKeysInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateCompany200ResponseDataKeysInnerFromJSON(json: any): CreateCompany200ResponseDataKeysInner {
    return CreateCompany200ResponseDataKeysInnerFromJSONTyped(json, false);
}

export function CreateCompany200ResponseDataKeysInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCompany200ResponseDataKeysInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'entityId': !exists(json, 'entity_id') ? undefined : json['entity_id'],
        'entityType': !exists(json, 'entity_type') ? undefined : json['entity_type'],
        'environmentId': !exists(json, 'environment_id') ? undefined : json['environment_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'keyType': !exists(json, 'key_type') ? undefined : json['key_type'],
        'keyTypeId': !exists(json, 'key_type_id') ? undefined : json['key_type_id'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function CreateCompany200ResponseDataKeysInnerToJSON(value?: CreateCompany200ResponseDataKeysInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'entity_id': value.entityId,
        'entity_type': value.entityType,
        'environment_id': value.environmentId,
        'id': value.id,
        'key_type': value.keyType,
        'key_type_id': value.keyTypeId,
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'value': value.value,
    };
}

