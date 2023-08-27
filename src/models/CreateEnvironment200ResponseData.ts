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
import type { CreateEnvironment200ResponseDataApiKeysInner } from './CreateEnvironment200ResponseDataApiKeysInner';
import {
    CreateEnvironment200ResponseDataApiKeysInnerFromJSON,
    CreateEnvironment200ResponseDataApiKeysInnerFromJSONTyped,
    CreateEnvironment200ResponseDataApiKeysInnerToJSON,
} from './CreateEnvironment200ResponseDataApiKeysInner';

/**
 * The returned resource
 * @export
 * @interface CreateEnvironment200ResponseData
 */
export interface CreateEnvironment200ResponseData {
    /**
     * 
     * @type {Array<CreateEnvironment200ResponseDataApiKeysInner>}
     * @memberof CreateEnvironment200ResponseData
     */
    apiKeys?: Array<CreateEnvironment200ResponseDataApiKeysInner>;
    /**
     * 
     * @type {string}
     * @memberof CreateEnvironment200ResponseData
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEnvironment200ResponseData
     */
    environmentType?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEnvironment200ResponseData
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEnvironment200ResponseData
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEnvironment200ResponseData
     */
    updatedAt?: string;
}

/**
 * Check if a given object implements the CreateEnvironment200ResponseData interface.
 */
export function instanceOfCreateEnvironment200ResponseData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateEnvironment200ResponseDataFromJSON(json: any): CreateEnvironment200ResponseData {
    return CreateEnvironment200ResponseDataFromJSONTyped(json, false);
}

export function CreateEnvironment200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEnvironment200ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiKeys': !exists(json, 'ApiKeys') ? undefined : ((json['ApiKeys'] as Array<any>).map(CreateEnvironment200ResponseDataApiKeysInnerFromJSON)),
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'environmentType': !exists(json, 'environment_type') ? undefined : json['environment_type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}

export function CreateEnvironment200ResponseDataToJSON(value?: CreateEnvironment200ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ApiKeys': value.apiKeys === undefined ? undefined : ((value.apiKeys as Array<any>).map(CreateEnvironment200ResponseDataApiKeysInnerToJSON)),
        'created_at': value.createdAt,
        'environment_type': value.environmentType,
        'id': value.id,
        'name': value.name,
        'updated_at': value.updatedAt,
    };
}

