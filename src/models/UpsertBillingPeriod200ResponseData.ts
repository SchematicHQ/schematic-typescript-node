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
 * @interface UpsertBillingPeriod200ResponseData
 */
export interface UpsertBillingPeriod200ResponseData {
    /**
     * 
     * @type {string}
     * @memberof UpsertBillingPeriod200ResponseData
     */
    companyId: string;
    /**
     * 
     * @type {string}
     * @memberof UpsertBillingPeriod200ResponseData
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof UpsertBillingPeriod200ResponseData
     */
    endedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpsertBillingPeriod200ResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof UpsertBillingPeriod200ResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UpsertBillingPeriod200ResponseData
     */
    startedAt: string;
    /**
     * 
     * @type {string}
     * @memberof UpsertBillingPeriod200ResponseData
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the UpsertBillingPeriod200ResponseData interface.
 */
export function instanceOfUpsertBillingPeriod200ResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "companyId" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "environmentId" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "startedAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function UpsertBillingPeriod200ResponseDataFromJSON(json: any): UpsertBillingPeriod200ResponseData {
    return UpsertBillingPeriod200ResponseDataFromJSONTyped(json, false);
}

export function UpsertBillingPeriod200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsertBillingPeriod200ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': json['company_id'],
        'createdAt': json['created_at'],
        'endedAt': !exists(json, 'ended_at') ? undefined : json['ended_at'],
        'environmentId': json['environment_id'],
        'id': json['id'],
        'startedAt': json['started_at'],
        'updatedAt': json['updated_at'],
    };
}

export function UpsertBillingPeriod200ResponseDataToJSON(value?: UpsertBillingPeriod200ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'created_at': value.createdAt,
        'ended_at': value.endedAt,
        'environment_id': value.environmentId,
        'id': value.id,
        'started_at': value.startedAt,
        'updated_at': value.updatedAt,
    };
}

