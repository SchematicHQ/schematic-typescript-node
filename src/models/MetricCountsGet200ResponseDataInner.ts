/* tslint:disable */
/* eslint-disable */
/**
 * Schematic API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
 * @interface MetricCountsGet200ResponseDataInner
 */
export interface MetricCountsGet200ResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof MetricCountsGet200ResponseDataInner
     */
    accountId?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricCountsGet200ResponseDataInner
     */
    companyId?: string;
    /**
     * 
     * @type {Date}
     * @memberof MetricCountsGet200ResponseDataInner
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof MetricCountsGet200ResponseDataInner
     */
    definitionId?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricCountsGet200ResponseDataInner
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof MetricCountsGet200ResponseDataInner
     */
    startTime?: Date;
    /**
     * 
     * @type {number}
     * @memberof MetricCountsGet200ResponseDataInner
     */
    value?: number;
}

/**
 * Check if a given object implements the MetricCountsGet200ResponseDataInner interface.
 */
export function instanceOfMetricCountsGet200ResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MetricCountsGet200ResponseDataInnerFromJSON(json: any): MetricCountsGet200ResponseDataInner {
    return MetricCountsGet200ResponseDataInnerFromJSONTyped(json, false);
}

export function MetricCountsGet200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricCountsGet200ResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'definitionId': !exists(json, 'definition_id') ? undefined : json['definition_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'startTime': !exists(json, 'start_time') ? undefined : (new Date(json['start_time'])),
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function MetricCountsGet200ResponseDataInnerToJSON(value?: MetricCountsGet200ResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'company_id': value.companyId,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'definition_id': value.definitionId,
        'id': value.id,
        'start_time': value.startTime === undefined ? undefined : (value.startTime.toISOString()),
        'value': value.value,
    };
}

