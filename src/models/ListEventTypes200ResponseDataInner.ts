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
 * @interface ListEventTypes200ResponseDataInner
 */
export interface ListEventTypes200ResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof ListEventTypes200ResponseDataInner
     */
    accountId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListEventTypes200ResponseDataInner
     */
    environmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListEventTypes200ResponseDataInner
     */
    eventSubtype?: string;
    /**
     * 
     * @type {number}
     * @memberof ListEventTypes200ResponseDataInner
     */
    last30CompanyCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ListEventTypes200ResponseDataInner
     */
    last30Count?: number;
    /**
     * 
     * @type {number}
     * @memberof ListEventTypes200ResponseDataInner
     */
    last30UserCount?: number;
}

/**
 * Check if a given object implements the ListEventTypes200ResponseDataInner interface.
 */
export function instanceOfListEventTypes200ResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListEventTypes200ResponseDataInnerFromJSON(json: any): ListEventTypes200ResponseDataInner {
    return ListEventTypes200ResponseDataInnerFromJSONTyped(json, false);
}

export function ListEventTypes200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListEventTypes200ResponseDataInner {
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

export function ListEventTypes200ResponseDataInnerToJSON(value?: ListEventTypes200ResponseDataInner | null): any {
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
