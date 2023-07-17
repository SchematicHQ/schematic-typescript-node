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
 * @interface CreateFeatures200ResponseDataInnerFlagsInner
 */
export interface CreateFeatures200ResponseDataInnerFlagsInner {
    /**
     * 
     * @type {string}
     * @memberof CreateFeatures200ResponseDataInnerFlagsInner
     */
    accountId?: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateFeatures200ResponseDataInnerFlagsInner
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatures200ResponseDataInnerFlagsInner
     */
    featureId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatures200ResponseDataInnerFlagsInner
     */
    flagType?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatures200ResponseDataInnerFlagsInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatures200ResponseDataInnerFlagsInner
     */
    key?: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateFeatures200ResponseDataInnerFlagsInner
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the CreateFeatures200ResponseDataInnerFlagsInner interface.
 */
export function instanceOfCreateFeatures200ResponseDataInnerFlagsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateFeatures200ResponseDataInnerFlagsInnerFromJSON(json: any): CreateFeatures200ResponseDataInnerFlagsInner {
    return CreateFeatures200ResponseDataInnerFlagsInnerFromJSONTyped(json, false);
}

export function CreateFeatures200ResponseDataInnerFlagsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFeatures200ResponseDataInnerFlagsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'featureId': !exists(json, 'feature_id') ? undefined : json['feature_id'],
        'flagType': !exists(json, 'flag_type') ? undefined : json['flag_type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'key': !exists(json, 'key') ? undefined : json['key'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function CreateFeatures200ResponseDataInnerFlagsInnerToJSON(value?: CreateFeatures200ResponseDataInnerFlagsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'feature_id': value.featureId,
        'flag_type': value.flagType,
        'id': value.id,
        'key': value.key,
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

