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
 * @interface FlagResponseData
 */
export interface FlagResponseData {
    /**
     * 
     * @type {Date}
     * @memberof FlagResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {boolean}
     * @memberof FlagResponseData
     */
    defaultValue: boolean;
    /**
     * 
     * @type {string}
     * @memberof FlagResponseData
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof FlagResponseData
     */
    featureId?: string;
    /**
     * 
     * @type {string}
     * @memberof FlagResponseData
     */
    flagType: string;
    /**
     * 
     * @type {string}
     * @memberof FlagResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FlagResponseData
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof FlagResponseData
     */
    name: string;
    /**
     * 
     * @type {Date}
     * @memberof FlagResponseData
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the FlagResponseData interface.
 */
export function instanceOfFlagResponseData(value: object): boolean {
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

export function FlagResponseDataFromJSON(json: any): FlagResponseData {
    return FlagResponseDataFromJSONTyped(json, false);
}

export function FlagResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlagResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['created_at'])),
        'defaultValue': json['default_value'],
        'description': json['description'],
        'featureId': !exists(json, 'feature_id') ? undefined : json['feature_id'],
        'flagType': json['flag_type'],
        'id': json['id'],
        'key': json['key'],
        'name': json['name'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function FlagResponseDataToJSON(value?: FlagResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': (value.createdAt.toISOString()),
        'default_value': value.defaultValue,
        'description': value.description,
        'feature_id': value.featureId,
        'flag_type': value.flagType,
        'id': value.id,
        'key': value.key,
        'name': value.name,
        'updated_at': (value.updatedAt.toISOString()),
    };
}

