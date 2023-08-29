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
 * @interface UpdateBillingPeriodRequest
 */
export interface UpdateBillingPeriodRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateBillingPeriodRequest
     */
    endedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateBillingPeriodRequest
     */
    startedAt?: string | null;
}

/**
 * Check if a given object implements the UpdateBillingPeriodRequest interface.
 */
export function instanceOfUpdateBillingPeriodRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateBillingPeriodRequestFromJSON(json: any): UpdateBillingPeriodRequest {
    return UpdateBillingPeriodRequestFromJSONTyped(json, false);
}

export function UpdateBillingPeriodRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateBillingPeriodRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endedAt': !exists(json, 'ended_at') ? undefined : json['ended_at'],
        'startedAt': !exists(json, 'started_at') ? undefined : json['started_at'],
    };
}

export function UpdateBillingPeriodRequestToJSON(value?: UpdateBillingPeriodRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ended_at': value.endedAt,
        'started_at': value.startedAt,
    };
}

