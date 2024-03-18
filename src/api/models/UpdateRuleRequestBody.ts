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
import type { CreateOrUpdateConditionGroupRequestBody } from './CreateOrUpdateConditionGroupRequestBody';
import {
    CreateOrUpdateConditionGroupRequestBodyFromJSON,
    CreateOrUpdateConditionGroupRequestBodyFromJSONTyped,
    CreateOrUpdateConditionGroupRequestBodyToJSON,
} from './CreateOrUpdateConditionGroupRequestBody';
import type { CreateOrUpdateConditionRequestBody } from './CreateOrUpdateConditionRequestBody';
import {
    CreateOrUpdateConditionRequestBodyFromJSON,
    CreateOrUpdateConditionRequestBodyFromJSONTyped,
    CreateOrUpdateConditionRequestBodyToJSON,
} from './CreateOrUpdateConditionRequestBody';

/**
 * 
 * @export
 * @interface UpdateRuleRequestBody
 */
export interface UpdateRuleRequestBody {
    /**
     * 
     * @type {Array<CreateOrUpdateConditionGroupRequestBody>}
     * @memberof UpdateRuleRequestBody
     */
    conditionGroups: Array<CreateOrUpdateConditionGroupRequestBody>;
    /**
     * 
     * @type {Array<CreateOrUpdateConditionRequestBody>}
     * @memberof UpdateRuleRequestBody
     */
    conditions: Array<CreateOrUpdateConditionRequestBody>;
    /**
     * 
     * @type {string}
     * @memberof UpdateRuleRequestBody
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateRuleRequestBody
     */
    priority: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateRuleRequestBody
     */
    priorityGroup?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateRuleRequestBody
     */
    value: boolean;
}

/**
 * Check if a given object implements the UpdateRuleRequestBody interface.
 */
export function instanceOfUpdateRuleRequestBody(value: object): boolean {
    if (!('conditionGroups' in value)) return false;
    if (!('conditions' in value)) return false;
    if (!('name' in value)) return false;
    if (!('priority' in value)) return false;
    if (!('value' in value)) return false;
    return true;
}

export function UpdateRuleRequestBodyFromJSON(json: any): UpdateRuleRequestBody {
    return UpdateRuleRequestBodyFromJSONTyped(json, false);
}

export function UpdateRuleRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRuleRequestBody {
    if (json == null) {
        return json;
    }
    return {
        
        'conditionGroups': ((json['condition_groups'] as Array<any>).map(CreateOrUpdateConditionGroupRequestBodyFromJSON)),
        'conditions': ((json['conditions'] as Array<any>).map(CreateOrUpdateConditionRequestBodyFromJSON)),
        'name': json['name'],
        'priority': json['priority'],
        'priorityGroup': json['priority_group'] == null ? undefined : json['priority_group'],
        'value': json['value'],
    };
}

export function UpdateRuleRequestBodyToJSON(value?: UpdateRuleRequestBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'condition_groups': ((value['conditionGroups'] as Array<any>).map(CreateOrUpdateConditionGroupRequestBodyToJSON)),
        'conditions': ((value['conditions'] as Array<any>).map(CreateOrUpdateConditionRequestBodyToJSON)),
        'name': value['name'],
        'priority': value['priority'],
        'priority_group': value['priorityGroup'],
        'value': value['value'],
    };
}

