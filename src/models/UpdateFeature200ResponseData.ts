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
 * The returned resource
 * @export
 * @interface UpdateFeature200ResponseData
 */
export interface UpdateFeature200ResponseData {
    /**
     * 
     * @type {string}
     * @memberof UpdateFeature200ResponseData
     */
    accountId?: string;
    /**
     * 
     * @type {Date}
     * @memberof UpdateFeature200ResponseData
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof UpdateFeature200ResponseData
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateFeature200ResponseData
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof UpdateFeature200ResponseData
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the UpdateFeature200ResponseData interface.
 */
export function instanceOfUpdateFeature200ResponseData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateFeature200ResponseDataFromJSON(json: any): UpdateFeature200ResponseData {
    return UpdateFeature200ResponseDataFromJSONTyped(json, false);
}

export function UpdateFeature200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFeature200ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function UpdateFeature200ResponseDataToJSON(value?: UpdateFeature200ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'id': value.id,
        'name': value.name,
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}
