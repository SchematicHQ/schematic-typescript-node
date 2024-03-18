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
    checkStatus: string;
    /**
     * 
     * @type {string}
     * @memberof FlagCheckLogResponseData
     */
    companyId?: string;
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
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof FlagCheckLogResponseData
     */
    flagId?: string;
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
    reqCompany?: object;
    /**
     * 
     * @type {object}
     * @memberof FlagCheckLogResponseData
     */
    reqUser?: object;
    /**
     * 
     * @type {string}
     * @memberof FlagCheckLogResponseData
     */
    ruleId?: string;
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
    userId?: string;
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
    if (!('checkStatus' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('environmentId' in value)) return false;
    if (!('flagKey' in value)) return false;
    if (!('id' in value)) return false;
    if (!('reason' in value)) return false;
    if (!('updatedAt' in value)) return false;
    if (!('value' in value)) return false;
    return true;
}

export function FlagCheckLogResponseDataFromJSON(json: any): FlagCheckLogResponseData {
    return FlagCheckLogResponseDataFromJSONTyped(json, false);
}

export function FlagCheckLogResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlagCheckLogResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'checkStatus': json['check_status'],
        'companyId': json['company_id'] == null ? undefined : json['company_id'],
        'createdAt': (new Date(json['created_at'])),
        'environmentId': json['environment_id'],
        'error': json['error'] == null ? undefined : json['error'],
        'flagId': json['flag_id'] == null ? undefined : json['flag_id'],
        'flagKey': json['flag_key'],
        'id': json['id'],
        'reason': json['reason'],
        'reqCompany': json['req_company'] == null ? undefined : json['req_company'],
        'reqUser': json['req_user'] == null ? undefined : json['req_user'],
        'ruleId': json['rule_id'] == null ? undefined : json['rule_id'],
        'updatedAt': (new Date(json['updated_at'])),
        'userId': json['user_id'] == null ? undefined : json['user_id'],
        'value': json['value'],
    };
}

export function FlagCheckLogResponseDataToJSON(value?: FlagCheckLogResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'check_status': value['checkStatus'],
        'company_id': value['companyId'],
        'created_at': ((value['createdAt']).toISOString()),
        'environment_id': value['environmentId'],
        'error': value['error'],
        'flag_id': value['flagId'],
        'flag_key': value['flagKey'],
        'id': value['id'],
        'reason': value['reason'],
        'req_company': value['reqCompany'],
        'req_user': value['reqUser'],
        'rule_id': value['ruleId'],
        'updated_at': ((value['updatedAt']).toISOString()),
        'user_id': value['userId'],
        'value': value['value'],
    };
}

