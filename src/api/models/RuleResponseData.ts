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
 * @interface RuleResponseData
 */
export interface RuleResponseData {
    /**
     * 
     * @type {Date}
     * @memberof RuleResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof RuleResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof RuleResponseData
     */
    flagId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RuleResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof RuleResponseData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RuleResponseData
     */
    planId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RuleResponseData
     */
    priority: number;
    /**
     * 
     * @type {number}
     * @memberof RuleResponseData
     */
    priorityGroup?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof RuleResponseData
     */
    updatedAt: Date;
    /**
     * 
     * @type {boolean}
     * @memberof RuleResponseData
     */
    value: boolean;
}

/**
 * Check if a given object implements the RuleResponseData interface.
 */
export function instanceOfRuleResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "environmentId" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "priority" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function RuleResponseDataFromJSON(json: any): RuleResponseData {
    return RuleResponseDataFromJSONTyped(json, false);
}

export function RuleResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['created_at'])),
        'environmentId': json['environment_id'],
        'flagId': !exists(json, 'flag_id') ? undefined : json['flag_id'],
        'id': json['id'],
        'name': json['name'],
        'planId': !exists(json, 'plan_id') ? undefined : json['plan_id'],
        'priority': json['priority'],
        'priorityGroup': !exists(json, 'priority_group') ? undefined : json['priority_group'],
        'updatedAt': (new Date(json['updated_at'])),
        'value': json['value'],
    };
}

export function RuleResponseDataToJSON(value?: RuleResponseData | null): any {
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
        'plan_id': value.planId,
        'priority': value.priority,
        'priority_group': value.priorityGroup,
        'updated_at': (value.updatedAt.toISOString()),
        'value': value.value,
    };
}

