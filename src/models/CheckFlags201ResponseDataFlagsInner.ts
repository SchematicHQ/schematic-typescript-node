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
 * @interface CheckFlags201ResponseDataFlagsInner
 */
export interface CheckFlags201ResponseDataFlagsInner {
    /**
     * 
     * @type {string}
     * @memberof CheckFlags201ResponseDataFlagsInner
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckFlags201ResponseDataFlagsInner
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckFlags201ResponseDataFlagsInner
     */
    flag: string;
    /**
     * 
     * @type {string}
     * @memberof CheckFlags201ResponseDataFlagsInner
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof CheckFlags201ResponseDataFlagsInner
     */
    ruleId?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckFlags201ResponseDataFlagsInner
     */
    userId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CheckFlags201ResponseDataFlagsInner
     */
    value: boolean;
}

/**
 * Check if a given object implements the CheckFlags201ResponseDataFlagsInner interface.
 */
export function instanceOfCheckFlags201ResponseDataFlagsInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "flag" in value;
    isInstance = isInstance && "reason" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CheckFlags201ResponseDataFlagsInnerFromJSON(json: any): CheckFlags201ResponseDataFlagsInner {
    return CheckFlags201ResponseDataFlagsInnerFromJSONTyped(json, false);
}

export function CheckFlags201ResponseDataFlagsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckFlags201ResponseDataFlagsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'flag': json['flag'],
        'reason': json['reason'],
        'ruleId': !exists(json, 'rule_id') ? undefined : json['rule_id'],
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
        'value': json['value'],
    };
}

export function CheckFlags201ResponseDataFlagsInnerToJSON(value?: CheckFlags201ResponseDataFlagsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'error': value.error,
        'flag': value.flag,
        'reason': value.reason,
        'rule_id': value.ruleId,
        'user_id': value.userId,
        'value': value.value,
    };
}

