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
 * @interface ListFlags200ResponseDataInner
 */
export interface ListFlags200ResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof ListFlags200ResponseDataInner
     */
    createdAt: string;
    /**
     * 
     * @type {boolean}
     * @memberof ListFlags200ResponseDataInner
     */
    defaultValue: boolean;
    /**
     * 
     * @type {string}
     * @memberof ListFlags200ResponseDataInner
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ListFlags200ResponseDataInner
     */
    featureId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListFlags200ResponseDataInner
     */
    flagType: string;
    /**
     * 
     * @type {string}
     * @memberof ListFlags200ResponseDataInner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ListFlags200ResponseDataInner
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof ListFlags200ResponseDataInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ListFlags200ResponseDataInner
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the ListFlags200ResponseDataInner interface.
 */
export function instanceOfListFlags200ResponseDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "defaultValue" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "flagType" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function ListFlags200ResponseDataInnerFromJSON(json: any): ListFlags200ResponseDataInner {
    return ListFlags200ResponseDataInnerFromJSONTyped(json, false);
}

export function ListFlags200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFlags200ResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': json['created_at'],
        'defaultValue': json['default_value'],
        'description': json['description'],
        'featureId': !exists(json, 'feature_id') ? undefined : json['feature_id'],
        'flagType': json['flag_type'],
        'id': json['id'],
        'key': json['key'],
        'name': json['name'],
        'updatedAt': json['updated_at'],
    };
}

export function ListFlags200ResponseDataInnerToJSON(value?: ListFlags200ResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': value.createdAt,
        'default_value': value.defaultValue,
        'description': value.description,
        'feature_id': value.featureId,
        'flag_type': value.flagType,
        'id': value.id,
        'key': value.key,
        'name': value.name,
        'updated_at': value.updatedAt,
    };
}

