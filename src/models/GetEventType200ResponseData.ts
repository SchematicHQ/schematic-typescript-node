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
 * The returned resource
 * @export
 * @interface GetEventType200ResponseData
 */
export interface GetEventType200ResponseData {
    /**
     * 
     * @type {string}
     * @memberof GetEventType200ResponseData
     */
    accountId?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEventType200ResponseData
     */
    environmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEventType200ResponseData
     */
    eventSubtype?: string;
    /**
     * 
     * @type {number}
     * @memberof GetEventType200ResponseData
     */
    last30CompanyCount?: number;
    /**
     * 
     * @type {number}
     * @memberof GetEventType200ResponseData
     */
    last30Count?: number;
    /**
     * 
     * @type {number}
     * @memberof GetEventType200ResponseData
     */
    last30UserCount?: number;
}

/**
 * Check if a given object implements the GetEventType200ResponseData interface.
 */
export function instanceOfGetEventType200ResponseData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetEventType200ResponseDataFromJSON(json: any): GetEventType200ResponseData {
    return GetEventType200ResponseDataFromJSONTyped(json, false);
}

export function GetEventType200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEventType200ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'environmentId': !exists(json, 'environment_id') ? undefined : json['environment_id'],
        'eventSubtype': !exists(json, 'event_subtype') ? undefined : json['event_subtype'],
        'last30CompanyCount': !exists(json, 'last_30_company_count') ? undefined : json['last_30_company_count'],
        'last30Count': !exists(json, 'last_30_count') ? undefined : json['last_30_count'],
        'last30UserCount': !exists(json, 'last_30_user_count') ? undefined : json['last_30_user_count'],
    };
}

export function GetEventType200ResponseDataToJSON(value?: GetEventType200ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'environment_id': value.environmentId,
        'event_subtype': value.eventSubtype,
        'last_30_company_count': value.last30CompanyCount,
        'last_30_count': value.last30Count,
        'last_30_user_count': value.last30UserCount,
    };
}
