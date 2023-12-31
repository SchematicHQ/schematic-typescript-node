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
 * @interface BillingPeriodResponseData
 */
export interface BillingPeriodResponseData {
    /**
     * 
     * @type {string}
     * @memberof BillingPeriodResponseData
     */
    companyId: string;
    /**
     * 
     * @type {Date}
     * @memberof BillingPeriodResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof BillingPeriodResponseData
     */
    endedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof BillingPeriodResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPeriodResponseData
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof BillingPeriodResponseData
     */
    startedAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof BillingPeriodResponseData
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the BillingPeriodResponseData interface.
 */
export function instanceOfBillingPeriodResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "companyId" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "environmentId" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "startedAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function BillingPeriodResponseDataFromJSON(json: any): BillingPeriodResponseData {
    return BillingPeriodResponseDataFromJSONTyped(json, false);
}

export function BillingPeriodResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingPeriodResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': json['company_id'],
        'createdAt': (new Date(json['created_at'])),
        'endedAt': !exists(json, 'ended_at') ? undefined : (json['ended_at'] === null ? null : new Date(json['ended_at'])),
        'environmentId': json['environment_id'],
        'id': json['id'],
        'startedAt': (new Date(json['started_at'])),
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function BillingPeriodResponseDataToJSON(value?: BillingPeriodResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'created_at': (value.createdAt.toISOString()),
        'ended_at': value.endedAt === undefined ? undefined : (value.endedAt === null ? null : value.endedAt.toISOString()),
        'environment_id': value.environmentId,
        'id': value.id,
        'started_at': (value.startedAt.toISOString()),
        'updated_at': (value.updatedAt.toISOString()),
    };
}

