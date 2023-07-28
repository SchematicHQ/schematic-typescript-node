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
 * @interface ListFlagValues200ResponseDataInner
 */
export interface ListFlagValues200ResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof ListFlagValues200ResponseDataInner
     */
    accountId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListFlagValues200ResponseDataInner
     */
    entityId?: string;
    /**
     * 
     * @type {number}
     * @memberof ListFlagValues200ResponseDataInner
     */
    entityType?: number;
    /**
     * 
     * @type {string}
     * @memberof ListFlagValues200ResponseDataInner
     */
    environmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListFlagValues200ResponseDataInner
     */
    flagId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListFlagValues200ResponseDataInner
     */
    ruleId?: string;
    /**
     * 
     * @type {number}
     * @memberof ListFlagValues200ResponseDataInner
     */
    targetingLevel?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ListFlagValues200ResponseDataInner
     */
    value?: boolean;
}

/**
 * Check if a given object implements the ListFlagValues200ResponseDataInner interface.
 */
export function instanceOfListFlagValues200ResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListFlagValues200ResponseDataInnerFromJSON(json: any): ListFlagValues200ResponseDataInner {
    return ListFlagValues200ResponseDataInnerFromJSONTyped(json, false);
}

export function ListFlagValues200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFlagValues200ResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'entityId': !exists(json, 'entity_id') ? undefined : json['entity_id'],
        'entityType': !exists(json, 'entity_type') ? undefined : json['entity_type'],
        'environmentId': !exists(json, 'environment_id') ? undefined : json['environment_id'],
        'flagId': !exists(json, 'flag_id') ? undefined : json['flag_id'],
        'ruleId': !exists(json, 'rule_id') ? undefined : json['rule_id'],
        'targetingLevel': !exists(json, 'targeting_level') ? undefined : json['targeting_level'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function ListFlagValues200ResponseDataInnerToJSON(value?: ListFlagValues200ResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'entity_id': value.entityId,
        'entity_type': value.entityType,
        'environment_id': value.environmentId,
        'flag_id': value.flagId,
        'rule_id': value.ruleId,
        'targeting_level': value.targetingLevel,
        'value': value.value,
    };
}
