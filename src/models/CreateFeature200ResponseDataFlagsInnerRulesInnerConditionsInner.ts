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
 * @interface CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
 */
export interface CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner {
    /**
     * 
     * @type {string}
     * @memberof CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
     */
    accountId?: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
     */
    environmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
     */
    eventSubtype?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
     */
    flagId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
     */
    objectType?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
     */
    operator?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
     */
    priority?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
     */
    resourceIds?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
     */
    ruleId?: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
     */
    updatedAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner
     */
    value?: number;
}

/**
 * Check if a given object implements the CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner interface.
 */
export function instanceOfCreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInnerFromJSON(json: any): CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner {
    return CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInnerFromJSONTyped(json, false);
}

export function CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'environmentId': !exists(json, 'environment_id') ? undefined : json['environment_id'],
        'eventSubtype': !exists(json, 'event_subtype') ? undefined : json['event_subtype'],
        'flagId': !exists(json, 'flag_id') ? undefined : json['flag_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'objectType': !exists(json, 'object_type') ? undefined : json['object_type'],
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'resourceIds': !exists(json, 'resource_ids') ? undefined : json['resource_ids'],
        'ruleId': !exists(json, 'rule_id') ? undefined : json['rule_id'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInnerToJSON(value?: CreateFeature200ResponseDataFlagsInnerRulesInnerConditionsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'environment_id': value.environmentId,
        'event_subtype': value.eventSubtype,
        'flag_id': value.flagId,
        'id': value.id,
        'object_type': value.objectType,
        'operator': value.operator,
        'priority': value.priority,
        'resource_ids': value.resourceIds,
        'rule_id': value.ruleId,
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'value': value.value,
    };
}
