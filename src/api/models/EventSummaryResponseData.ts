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
 * @interface EventSummaryResponseData
 */
export interface EventSummaryResponseData {
    /**
     * 
     * @type {string}
     * @memberof EventSummaryResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof EventSummaryResponseData
     */
    eventSubtype: string;
    /**
     * 
     * @type {number}
     * @memberof EventSummaryResponseData
     */
    last30CompanyCount: number;
    /**
     * 
     * @type {number}
     * @memberof EventSummaryResponseData
     */
    last30Count: number;
    /**
     * 
     * @type {number}
     * @memberof EventSummaryResponseData
     */
    last30UserCount: number;
}

/**
 * Check if a given object implements the EventSummaryResponseData interface.
 */
export function instanceOfEventSummaryResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "environmentId" in value;
    isInstance = isInstance && "eventSubtype" in value;
    isInstance = isInstance && "last30CompanyCount" in value;
    isInstance = isInstance && "last30Count" in value;
    isInstance = isInstance && "last30UserCount" in value;

    return isInstance;
}

export function EventSummaryResponseDataFromJSON(json: any): EventSummaryResponseData {
    return EventSummaryResponseDataFromJSONTyped(json, false);
}

export function EventSummaryResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventSummaryResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'environmentId': json['environment_id'],
        'eventSubtype': json['event_subtype'],
        'last30CompanyCount': json['last_30_company_count'],
        'last30Count': json['last_30_count'],
        'last30UserCount': json['last_30_user_count'],
    };
}

export function EventSummaryResponseDataToJSON(value?: EventSummaryResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'environment_id': value.environmentId,
        'event_subtype': value.eventSubtype,
        'last_30_company_count': value.last30CompanyCount,
        'last_30_count': value.last30Count,
        'last_30_user_count': value.last30UserCount,
    };
}

