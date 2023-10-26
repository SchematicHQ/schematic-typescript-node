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
import type { FlagRuleDetailResponseData } from './FlagRuleDetailResponseData';
import {
    FlagRuleDetailResponseDataFromJSON,
    FlagRuleDetailResponseDataFromJSONTyped,
    FlagRuleDetailResponseDataToJSON,
} from './FlagRuleDetailResponseData';

/**
 * The updated resource
 * @export
 * @interface FlagDetailResponseData
 */
export interface FlagDetailResponseData {
    /**
     * 
     * @type {Date}
     * @memberof FlagDetailResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {boolean}
     * @memberof FlagDetailResponseData
     */
    defaultValue: boolean;
    /**
     * 
     * @type {string}
     * @memberof FlagDetailResponseData
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof FlagDetailResponseData
     */
    featureId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlagDetailResponseData
     */
    flagType: string;
    /**
     * 
     * @type {string}
     * @memberof FlagDetailResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FlagDetailResponseData
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof FlagDetailResponseData
     */
    name: string;
    /**
     * 
     * @type {Array<FlagRuleDetailResponseData>}
     * @memberof FlagDetailResponseData
     */
    rules: Array<FlagRuleDetailResponseData>;
    /**
     * 
     * @type {Date}
     * @memberof FlagDetailResponseData
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the FlagDetailResponseData interface.
 */
export function instanceOfFlagDetailResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "defaultValue" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "flagType" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "rules" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function FlagDetailResponseDataFromJSON(json: any): FlagDetailResponseData {
    return FlagDetailResponseDataFromJSONTyped(json, false);
}

export function FlagDetailResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlagDetailResponseData {
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
        'rules': ((json['rules'] as Array<any>).map(FlagRuleDetailResponseDataFromJSON)),
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function FlagDetailResponseDataToJSON(value?: FlagDetailResponseData | null): any {
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
        'rules': ((value.rules as Array<any>).map(FlagRuleDetailResponseDataToJSON)),
        'updated_at': (value.updatedAt.toISOString()),
    };
}

