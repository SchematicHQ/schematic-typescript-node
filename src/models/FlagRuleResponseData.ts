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
 * @interface FlagRuleResponseData
 */
export interface FlagRuleResponseData {
    /**
     * 
     * @type {Date}
     * @memberof FlagRuleResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof FlagRuleResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof FlagRuleResponseData
     */
    flagId: string;
    /**
     * 
     * @type {string}
     * @memberof FlagRuleResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FlagRuleResponseData
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof FlagRuleResponseData
     */
    priority: number;
    /**
     * 
     * @type {number}
     * @memberof FlagRuleResponseData
     */
    priorityGroup?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof FlagRuleResponseData
     */
    updatedAt: Date;
    /**
     * 
     * @type {boolean}
     * @memberof FlagRuleResponseData
     */
    value: boolean;
}

/**
 * Check if a given object implements the FlagRuleResponseData interface.
 */
export function instanceOfFlagRuleResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "environmentId" in value;
    isInstance = isInstance && "flagId" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "priority" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function FlagRuleResponseDataFromJSON(json: any): FlagRuleResponseData {
    return FlagRuleResponseDataFromJSONTyped(json, false);
}

export function FlagRuleResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlagRuleResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['created_at'])),
        'environmentId': json['environment_id'],
        'flagId': json['flag_id'],
        'id': json['id'],
        'name': json['name'],
        'priority': json['priority'],
        'priorityGroup': !exists(json, 'priority_group') ? undefined : json['priority_group'],
        'updatedAt': (new Date(json['updated_at'])),
        'value': json['value'],
    };
}

export function FlagRuleResponseDataToJSON(value?: FlagRuleResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': (value.createdAt.toISOString()),
        'environment_id': value.environmentId,
        'flag_id': value.flagId,
        'id': value.id,
        'name': value.name,
        'priority': value.priority,
        'priority_group': value.priorityGroup,
        'updated_at': (value.updatedAt.toISOString()),
        'value': value.value,
    };
}

