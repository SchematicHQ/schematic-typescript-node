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
import type { CreateOrUpdateConditionRequestBody } from './CreateOrUpdateConditionRequestBody';
import {
    CreateOrUpdateConditionRequestBodyFromJSON,
    CreateOrUpdateConditionRequestBodyFromJSONTyped,
    CreateOrUpdateConditionRequestBodyToJSON,
} from './CreateOrUpdateConditionRequestBody';

/**
 * 
 * @export
 * @interface CreateOrUpdateRuleRequestBody
 */
export interface CreateOrUpdateRuleRequestBody {
    /**
     * 
     * @type {Array<CreateOrUpdateConditionRequestBody>}
     * @memberof CreateOrUpdateRuleRequestBody
     */
    conditions: Array<CreateOrUpdateConditionRequestBody>;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateRuleRequestBody
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateRuleRequestBody
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof CreateOrUpdateRuleRequestBody
     */
    priority: number;
    /**
     * 
     * @type {number}
     * @memberof CreateOrUpdateRuleRequestBody
     */
    priorityGroup?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateOrUpdateRuleRequestBody
     */
    value: boolean;
}

/**
 * Check if a given object implements the CreateOrUpdateRuleRequestBody interface.
 */
export function instanceOfCreateOrUpdateRuleRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "conditions" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "priority" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CreateOrUpdateRuleRequestBodyFromJSON(json: any): CreateOrUpdateRuleRequestBody {
    return CreateOrUpdateRuleRequestBodyFromJSONTyped(json, false);
}

export function CreateOrUpdateRuleRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrUpdateRuleRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': ((json['conditions'] as Array<any>).map(CreateOrUpdateConditionRequestBodyFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'priority': json['priority'],
        'priorityGroup': !exists(json, 'priority_group') ? undefined : json['priority_group'],
        'value': json['value'],
    };
}

export function CreateOrUpdateRuleRequestBodyToJSON(value?: CreateOrUpdateRuleRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': ((value.conditions as Array<any>).map(CreateOrUpdateConditionRequestBodyToJSON)),
        'id': value.id,
        'name': value.name,
        'priority': value.priority,
        'priority_group': value.priorityGroup,
        'value': value.value,
    };
}
