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
 * @interface FlagCheckLogResponseData
 */
export interface FlagCheckLogResponseData {
    /**
     * 
     * @type {string}
     * @memberof FlagCheckLogResponseData
     */
    companyId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof FlagCheckLogResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof FlagCheckLogResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof FlagCheckLogResponseData
     */
    error?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlagCheckLogResponseData
     */
    flagId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FlagCheckLogResponseData
     */
    flagKey: string;
    /**
     * 
     * @type {string}
     * @memberof FlagCheckLogResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FlagCheckLogResponseData
     */
    reason: string;
    /**
     * 
     * @type {object}
     * @memberof FlagCheckLogResponseData
     */
    reqCompany: object;
    /**
     * 
     * @type {object}
     * @memberof FlagCheckLogResponseData
     */
    reqUser: object;
    /**
     * 
     * @type {string}
     * @memberof FlagCheckLogResponseData
     */
    ruleId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof FlagCheckLogResponseData
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof FlagCheckLogResponseData
     */
    userId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof FlagCheckLogResponseData
     */
    value: boolean;
}

/**
 * Check if a given object implements the FlagCheckLogResponseData interface.
 */
export function instanceOfFlagCheckLogResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "environmentId" in value;
    isInstance = isInstance && "flagKey" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "reason" in value;
    isInstance = isInstance && "reqCompany" in value;
    isInstance = isInstance && "reqUser" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function FlagCheckLogResponseDataFromJSON(json: any): FlagCheckLogResponseData {
    return FlagCheckLogResponseDataFromJSONTyped(json, false);
}

export function FlagCheckLogResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlagCheckLogResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'createdAt': (new Date(json['created_at'])),
        'environmentId': json['environment_id'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'flagId': !exists(json, 'flag_id') ? undefined : json['flag_id'],
        'flagKey': json['flag_key'],
        'id': json['id'],
        'reason': json['reason'],
        'reqCompany': json['req_company'],
        'reqUser': json['req_user'],
        'ruleId': !exists(json, 'rule_id') ? undefined : json['rule_id'],
        'updatedAt': (new Date(json['updated_at'])),
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
        'value': json['value'],
    };
}

export function FlagCheckLogResponseDataToJSON(value?: FlagCheckLogResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'created_at': (value.createdAt.toISOString()),
        'environment_id': value.environmentId,
        'error': value.error,
        'flag_id': value.flagId,
        'flag_key': value.flagKey,
        'id': value.id,
        'reason': value.reason,
        'req_company': value.reqCompany,
        'req_user': value.reqUser,
        'rule_id': value.ruleId,
        'updated_at': (value.updatedAt.toISOString()),
        'user_id': value.userId,
        'value': value.value,
    };
}

