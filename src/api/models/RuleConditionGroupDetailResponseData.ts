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

import { mapValues } from '../runtime';
import type { RuleConditionDetailResponseData } from './RuleConditionDetailResponseData';
import {
    RuleConditionDetailResponseDataFromJSON,
    RuleConditionDetailResponseDataFromJSONTyped,
    RuleConditionDetailResponseDataToJSON,
} from './RuleConditionDetailResponseData';

/**
 * 
 * @export
 * @interface RuleConditionGroupDetailResponseData
 */
export interface RuleConditionGroupDetailResponseData {
    /**
     * 
     * @type {Array<RuleConditionDetailResponseData>}
     * @memberof RuleConditionGroupDetailResponseData
     */
    conditions: Array<RuleConditionDetailResponseData>;
    /**
     * 
     * @type {Date}
     * @memberof RuleConditionGroupDetailResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof RuleConditionGroupDetailResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof RuleConditionGroupDetailResponseData
     */
    flagId?: string;
    /**
     * 
     * @type {string}
     * @memberof RuleConditionGroupDetailResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof RuleConditionGroupDetailResponseData
     */
    planId?: string;
    /**
     * 
     * @type {string}
     * @memberof RuleConditionGroupDetailResponseData
     */
    ruleId: string;
    /**
     * 
     * @type {Date}
     * @memberof RuleConditionGroupDetailResponseData
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the RuleConditionGroupDetailResponseData interface.
 */
export function instanceOfRuleConditionGroupDetailResponseData(value: object): boolean {
    if (!('conditions' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('environmentId' in value)) return false;
    if (!('id' in value)) return false;
    if (!('ruleId' in value)) return false;
    if (!('updatedAt' in value)) return false;
    return true;
}

export function RuleConditionGroupDetailResponseDataFromJSON(json: any): RuleConditionGroupDetailResponseData {
    return RuleConditionGroupDetailResponseDataFromJSONTyped(json, false);
}

export function RuleConditionGroupDetailResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleConditionGroupDetailResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'conditions': ((json['conditions'] as Array<any>).map(RuleConditionDetailResponseDataFromJSON)),
        'createdAt': (new Date(json['created_at'])),
        'environmentId': json['environment_id'],
        'flagId': json['flag_id'] == null ? undefined : json['flag_id'],
        'id': json['id'],
        'planId': json['plan_id'] == null ? undefined : json['plan_id'],
        'ruleId': json['rule_id'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function RuleConditionGroupDetailResponseDataToJSON(value?: RuleConditionGroupDetailResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'conditions': ((value['conditions'] as Array<any>).map(RuleConditionDetailResponseDataToJSON)),
        'created_at': ((value['createdAt']).toISOString()),
        'environment_id': value['environmentId'],
        'flag_id': value['flagId'],
        'id': value['id'],
        'plan_id': value['planId'],
        'rule_id': value['ruleId'],
        'updated_at': ((value['updatedAt']).toISOString()),
    };
}

