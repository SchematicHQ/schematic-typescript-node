/* tslint:disable */
/* eslint-disable */
/**
 * Schematic API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
 * @interface ListFeatures200ResponseDataInner
 */
export interface ListFeatures200ResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof ListFeatures200ResponseDataInner
     */
    accountId?: string;
    /**
     * 
     * @type {Date}
     * @memberof ListFeatures200ResponseDataInner
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof ListFeatures200ResponseDataInner
     */
    featureType?: string;
    /**
     * 
     * @type {string}
     * @memberof ListFeatures200ResponseDataInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ListFeatures200ResponseDataInner
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof ListFeatures200ResponseDataInner
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the ListFeatures200ResponseDataInner interface.
 */
export function instanceOfListFeatures200ResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListFeatures200ResponseDataInnerFromJSON(json: any): ListFeatures200ResponseDataInner {
    return ListFeatures200ResponseDataInnerFromJSONTyped(json, false);
}

export function ListFeatures200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFeatures200ResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'featureType': !exists(json, 'feature_type') ? undefined : json['feature_type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function ListFeatures200ResponseDataInnerToJSON(value?: ListFeatures200ResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'feature_type': value.featureType,
        'id': value.id,
        'name': value.name,
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

