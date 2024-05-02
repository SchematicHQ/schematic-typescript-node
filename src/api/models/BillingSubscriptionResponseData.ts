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
 * The created resource
 * @export
 * @interface BillingSubscriptionResponseData
 */
export interface BillingSubscriptionResponseData {
    /**
     * 
     * @type {Date}
     * @memberof BillingSubscriptionResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof BillingSubscriptionResponseData
     */
    deletedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BillingSubscriptionResponseData
     */
    expiredAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof BillingSubscriptionResponseData
     */
    externalId: string;
    /**
     * 
     * @type {number}
     * @memberof BillingSubscriptionResponseData
     */
    iD: number;
    /**
     * 
     * @type {Date}
     * @memberof BillingSubscriptionResponseData
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the BillingSubscriptionResponseData interface.
 */
export function instanceOfBillingSubscriptionResponseData(value: object): boolean {
    if (!('createdAt' in value)) return false;
    if (!('externalId' in value)) return false;
    if (!('iD' in value)) return false;
    if (!('updatedAt' in value)) return false;
    return true;
}

export function BillingSubscriptionResponseDataFromJSON(json: any): BillingSubscriptionResponseData {
    return BillingSubscriptionResponseDataFromJSONTyped(json, false);
}

export function BillingSubscriptionResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingSubscriptionResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['CreatedAt'])),
        'deletedAt': json['DeletedAt'] == null ? undefined : (new Date(json['DeletedAt'])),
        'expiredAt': json['ExpiredAt'] == null ? undefined : (new Date(json['ExpiredAt'])),
        'externalId': json['ExternalId'],
        'iD': json['ID'],
        'updatedAt': (new Date(json['UpdatedAt'])),
    };
}

export function BillingSubscriptionResponseDataToJSON(value?: BillingSubscriptionResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'CreatedAt': ((value['createdAt']).toISOString()),
        'DeletedAt': value['deletedAt'] == null ? undefined : ((value['deletedAt'] as any).toISOString()),
        'ExpiredAt': value['expiredAt'] == null ? undefined : ((value['expiredAt'] as any).toISOString()),
        'ExternalId': value['externalId'],
        'ID': value['iD'],
        'UpdatedAt': ((value['updatedAt']).toISOString()),
    };
}

