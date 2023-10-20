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
 * @interface UpsertBillingPeriodRequest
 */
export interface UpsertBillingPeriodRequest {
    /**
     * 
     * @type {string}
     * @memberof UpsertBillingPeriodRequest
     */
    companyId: string;
    /**
     * 
     * @type {string}
     * @memberof UpsertBillingPeriodRequest
     */
    endedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpsertBillingPeriodRequest
     */
    startedAt: string;
}

/**
 * Check if a given object implements the UpsertBillingPeriodRequest interface.
 */
export function instanceOfUpsertBillingPeriodRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "companyId" in value;
    isInstance = isInstance && "startedAt" in value;

    return isInstance;
}

export function UpsertBillingPeriodRequestFromJSON(json: any): UpsertBillingPeriodRequest {
    return UpsertBillingPeriodRequestFromJSONTyped(json, false);
}

export function UpsertBillingPeriodRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsertBillingPeriodRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': json['company_id'],
        'endedAt': !exists(json, 'ended_at') ? undefined : json['ended_at'],
        'startedAt': json['started_at'],
    };
}

export function UpsertBillingPeriodRequestToJSON(value?: UpsertBillingPeriodRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'ended_at': value.endedAt,
        'started_at': value.startedAt,
    };
}

