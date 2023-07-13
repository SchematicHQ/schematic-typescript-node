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
 * @interface EventsGet200ResponseDataInner
 */
export interface EventsGet200ResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof EventsGet200ResponseDataInner
     */
    accountId?: string;
    /**
     * 
     * @type {string}
     * @memberof EventsGet200ResponseDataInner
     */
    apiKey?: string;
    /**
     * 
     * @type {object}
     * @memberof EventsGet200ResponseDataInner
     */
    body?: object;
    /**
     * 
     * @type {Date}
     * @memberof EventsGet200ResponseDataInner
     */
    capturedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof EventsGet200ResponseDataInner
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof EventsGet200ResponseDataInner
     */
    companyName?: string;
    /**
     * 
     * @type {Date}
     * @memberof EventsGet200ResponseDataInner
     */
    enrichedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof EventsGet200ResponseDataInner
     */
    featureId?: string;
    /**
     * 
     * @type {string}
     * @memberof EventsGet200ResponseDataInner
     */
    featureName?: string;
    /**
     * 
     * @type {string}
     * @memberof EventsGet200ResponseDataInner
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof EventsGet200ResponseDataInner
     */
    loadedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof EventsGet200ResponseDataInner
     */
    processedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof EventsGet200ResponseDataInner
     */
    processingStatus?: string;
    /**
     * 
     * @type {Date}
     * @memberof EventsGet200ResponseDataInner
     */
    sentAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof EventsGet200ResponseDataInner
     */
    subtype?: string;
    /**
     * 
     * @type {string}
     * @memberof EventsGet200ResponseDataInner
     */
    type?: string;
    /**
     * 
     * @type {Date}
     * @memberof EventsGet200ResponseDataInner
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the EventsGet200ResponseDataInner interface.
 */
export function instanceOfEventsGet200ResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventsGet200ResponseDataInnerFromJSON(json: any): EventsGet200ResponseDataInner {
    return EventsGet200ResponseDataInnerFromJSONTyped(json, false);
}

export function EventsGet200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsGet200ResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'apiKey': !exists(json, 'api_key') ? undefined : json['api_key'],
        'body': !exists(json, 'body') ? undefined : json['body'],
        'capturedAt': !exists(json, 'captured_at') ? undefined : (new Date(json['captured_at'])),
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'companyName': !exists(json, 'company_name') ? undefined : json['company_name'],
        'enrichedAt': !exists(json, 'enriched_at') ? undefined : (new Date(json['enriched_at'])),
        'featureId': !exists(json, 'feature_id') ? undefined : json['feature_id'],
        'featureName': !exists(json, 'feature_name') ? undefined : json['feature_name'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'loadedAt': !exists(json, 'loaded_at') ? undefined : (new Date(json['loaded_at'])),
        'processedAt': !exists(json, 'processed_at') ? undefined : (new Date(json['processed_at'])),
        'processingStatus': !exists(json, 'processing_status') ? undefined : json['processing_status'],
        'sentAt': !exists(json, 'sent_at') ? undefined : (new Date(json['sent_at'])),
        'subtype': !exists(json, 'subtype') ? undefined : json['subtype'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function EventsGet200ResponseDataInnerToJSON(value?: EventsGet200ResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'api_key': value.apiKey,
        'body': value.body,
        'captured_at': value.capturedAt === undefined ? undefined : (value.capturedAt.toISOString()),
        'company_id': value.companyId,
        'company_name': value.companyName,
        'enriched_at': value.enrichedAt === undefined ? undefined : (value.enrichedAt.toISOString()),
        'feature_id': value.featureId,
        'feature_name': value.featureName,
        'id': value.id,
        'loaded_at': value.loadedAt === undefined ? undefined : (value.loadedAt.toISOString()),
        'processed_at': value.processedAt === undefined ? undefined : (value.processedAt.toISOString()),
        'processing_status': value.processingStatus,
        'sent_at': value.sentAt === undefined ? undefined : (value.sentAt.toISOString()),
        'subtype': value.subtype,
        'type': value.type,
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

