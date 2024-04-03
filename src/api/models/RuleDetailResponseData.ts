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
import type { RuleConditionGroupDetailResponseData } from './RuleConditionGroupDetailResponseData';
import {
    RuleConditionGroupDetailResponseDataFromJSON,
    RuleConditionGroupDetailResponseDataFromJSONTyped,
    RuleConditionGroupDetailResponseDataToJSON,
} from './RuleConditionGroupDetailResponseData';
import type { RuleConditionResponseData } from './RuleConditionResponseData';
import {
    RuleConditionResponseDataFromJSON,
    RuleConditionResponseDataFromJSONTyped,
    RuleConditionResponseDataToJSON,
} from './RuleConditionResponseData';

/**
 * 
 * @export
 * @interface RuleDetailResponseData
 */
export interface RuleDetailResponseData {
    /**
     * 
     * @type {Array<RuleConditionGroupDetailResponseData>}
     * @memberof RuleDetailResponseData
     */
    conditionGroups: Array<RuleConditionGroupDetailResponseData>;
    /**
     * 
     * @type {Array<RuleConditionResponseData>}
     * @memberof RuleDetailResponseData
     */
    conditions: Array<RuleConditionResponseData>;
    /**
     * 
     * @type {Date}
     * @memberof RuleDetailResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof RuleDetailResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof RuleDetailResponseData
     */
    flagId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RuleDetailResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof RuleDetailResponseData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RuleDetailResponseData
     */
    planId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RuleDetailResponseData
     */
    priority: number;
    /**
     * 
     * @type {string}
     * @memberof RuleDetailResponseData
     */
    ruleType: string;
    /**
     * 
     * @type {Date}
     * @memberof RuleDetailResponseData
     */
    updatedAt: Date;
    /**
     * 
     * @type {boolean}
     * @memberof RuleDetailResponseData
     */
    value: boolean;
}

/**
 * Check if a given object implements the RuleDetailResponseData interface.
 */
export function instanceOfRuleDetailResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "conditionGroups" in value;
    isInstance = isInstance && "conditions" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "environmentId" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "priority" in value;
    isInstance = isInstance && "ruleType" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function RuleDetailResponseDataFromJSON(json: any): RuleDetailResponseData {
    return RuleDetailResponseDataFromJSONTyped(json, false);
}

export function RuleDetailResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleDetailResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditionGroups': ((json['condition_groups'] as Array<any>).map(RuleConditionGroupDetailResponseDataFromJSON)),
        'conditions': ((json['conditions'] as Array<any>).map(RuleConditionResponseDataFromJSON)),
        'createdAt': (new Date(json['created_at'])),
        'environmentId': json['environment_id'],
        'flagId': !exists(json, 'flag_id') ? undefined : json['flag_id'],
        'id': json['id'],
        'name': json['name'],
        'planId': !exists(json, 'plan_id') ? undefined : json['plan_id'],
        'priority': json['priority'],
        'ruleType': json['rule_type'],
        'updatedAt': (new Date(json['updated_at'])),
        'value': json['value'],
    };
}

export function RuleDetailResponseDataToJSON(value?: RuleDetailResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'condition_groups': ((value.conditionGroups as Array<any>).map(RuleConditionGroupDetailResponseDataToJSON)),
        'conditions': ((value.conditions as Array<any>).map(RuleConditionResponseDataToJSON)),
        'created_at': (value.createdAt.toISOString()),
        'environment_id': value.environmentId,
        'flag_id': value.flagId,
        'id': value.id,
        'name': value.name,
        'plan_id': value.planId,
        'priority': value.priority,
        'rule_type': value.ruleType,
        'updated_at': (value.updatedAt.toISOString()),
        'value': value.value,
    };
}

