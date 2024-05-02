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
import type { BillingSubscriptionResponseData } from './BillingSubscriptionResponseData';
import {
    BillingSubscriptionResponseDataFromJSON,
    BillingSubscriptionResponseDataFromJSONTyped,
    BillingSubscriptionResponseDataToJSON,
} from './BillingSubscriptionResponseData';

/**
 * 
 * @export
 * @interface UpsertBillingSubscriptionResponse
 */
export interface UpsertBillingSubscriptionResponse {
    /**
     * 
     * @type {BillingSubscriptionResponseData}
     * @memberof UpsertBillingSubscriptionResponse
     */
    data: BillingSubscriptionResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof UpsertBillingSubscriptionResponse
     */
    params: object;
}

/**
 * Check if a given object implements the UpsertBillingSubscriptionResponse interface.
 */
export function instanceOfUpsertBillingSubscriptionResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function UpsertBillingSubscriptionResponseFromJSON(json: any): UpsertBillingSubscriptionResponse {
    return UpsertBillingSubscriptionResponseFromJSONTyped(json, false);
}

export function UpsertBillingSubscriptionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsertBillingSubscriptionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BillingSubscriptionResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function UpsertBillingSubscriptionResponseToJSON(value?: UpsertBillingSubscriptionResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': BillingSubscriptionResponseDataToJSON(value['data']),
        'params': value['params'],
    };
}

