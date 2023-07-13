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
 * @interface MetricsGet200ResponseDataInner
 */
export interface MetricsGet200ResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof MetricsGet200ResponseDataInner
     */
    accountId?: string;
    /**
     * 
     * @type {Date}
     * @memberof MetricsGet200ResponseDataInner
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof MetricsGet200ResponseDataInner
     */
    eventSubtype?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricsGet200ResponseDataInner
     */
    eventType?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricsGet200ResponseDataInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricsGet200ResponseDataInner
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof MetricsGet200ResponseDataInner
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the MetricsGet200ResponseDataInner interface.
 */
export function instanceOfMetricsGet200ResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MetricsGet200ResponseDataInnerFromJSON(json: any): MetricsGet200ResponseDataInner {
    return MetricsGet200ResponseDataInnerFromJSONTyped(json, false);
}

export function MetricsGet200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsGet200ResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'eventSubtype': !exists(json, 'event_subtype') ? undefined : json['event_subtype'],
        'eventType': !exists(json, 'event_type') ? undefined : json['event_type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function MetricsGet200ResponseDataInnerToJSON(value?: MetricsGet200ResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'event_subtype': value.eventSubtype,
        'event_type': value.eventType,
        'id': value.id,
        'name': value.name,
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

