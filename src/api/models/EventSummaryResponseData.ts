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
 * @interface EventSummaryResponseData
 */
export interface EventSummaryResponseData {
    /**
     * 
     * @type {number}
     * @memberof EventSummaryResponseData
     */
    companyCount: number;
    /**
     * 
     * @type {string}
     * @memberof EventSummaryResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {number}
     * @memberof EventSummaryResponseData
     */
    eventCount: number;
    /**
     * 
     * @type {string}
     * @memberof EventSummaryResponseData
     */
    eventSubtype: string;
    /**
     * 
     * @type {Date}
     * @memberof EventSummaryResponseData
     */
    lastSeenAt: Date;
    /**
     * 
     * @type {number}
     * @memberof EventSummaryResponseData
     */
    userCount: number;
}

/**
 * Check if a given object implements the EventSummaryResponseData interface.
 */
export function instanceOfEventSummaryResponseData(value: object): boolean {
    if (!('companyCount' in value)) return false;
    if (!('environmentId' in value)) return false;
    if (!('eventCount' in value)) return false;
    if (!('eventSubtype' in value)) return false;
    if (!('lastSeenAt' in value)) return false;
    if (!('userCount' in value)) return false;
    return true;
}

export function EventSummaryResponseDataFromJSON(json: any): EventSummaryResponseData {
    return EventSummaryResponseDataFromJSONTyped(json, false);
}

export function EventSummaryResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventSummaryResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'companyCount': json['company_count'],
        'environmentId': json['environment_id'],
        'eventCount': json['event_count'],
        'eventSubtype': json['event_subtype'],
        'lastSeenAt': (new Date(json['last_seen_at'])),
        'userCount': json['user_count'],
    };
}

export function EventSummaryResponseDataToJSON(value?: EventSummaryResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'company_count': value['companyCount'],
        'environment_id': value['environmentId'],
        'event_count': value['eventCount'],
        'event_subtype': value['eventSubtype'],
        'last_seen_at': ((value['lastSeenAt']).toISOString()),
        'user_count': value['userCount'],
    };
}

