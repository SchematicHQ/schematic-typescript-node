/* tslint:disable */
/* eslint-disable */
/**
 * Schematic API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface EventsIdGet200ResponseData
 */
export interface EventsIdGet200ResponseData {
    /**
     * 
     * @type {string}
     * @memberof EventsIdGet200ResponseData
     */
    accountId?: string;
    /**
     * 
     * @type {string}
     * @memberof EventsIdGet200ResponseData
     */
    apiKey?: string;
    /**
     * 
     * @type {object}
     * @memberof EventsIdGet200ResponseData
     */
    body?: object;
    /**
     * 
     * @type {Date}
     * @memberof EventsIdGet200ResponseData
     */
    capturedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof EventsIdGet200ResponseData
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof EventsIdGet200ResponseData
     */
    companyName?: string;
    /**
     * 
     * @type {Date}
     * @memberof EventsIdGet200ResponseData
     */
    enrichedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof EventsIdGet200ResponseData
     */
    featureId?: string;
    /**
     * 
     * @type {string}
     * @memberof EventsIdGet200ResponseData
     */
    featureName?: string;
    /**
     * 
     * @type {string}
     * @memberof EventsIdGet200ResponseData
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof EventsIdGet200ResponseData
     */
    loadedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof EventsIdGet200ResponseData
     */
    processedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof EventsIdGet200ResponseData
     */
    processingStatus?: string;
    /**
     * 
     * @type {Date}
     * @memberof EventsIdGet200ResponseData
     */
    sentAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof EventsIdGet200ResponseData
     */
    subtype?: string;
    /**
     * 
     * @type {string}
     * @memberof EventsIdGet200ResponseData
     */
    type?: string;
    /**
     * 
     * @type {Date}
     * @memberof EventsIdGet200ResponseData
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the EventsIdGet200ResponseData interface.
 */
export function instanceOfEventsIdGet200ResponseData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventsIdGet200ResponseDataFromJSON(json: any): EventsIdGet200ResponseData {
    return EventsIdGet200ResponseDataFromJSONTyped(json, false);
}

export function EventsIdGet200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsIdGet200ResponseData {
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

export function EventsIdGet200ResponseDataToJSON(value?: EventsIdGet200ResponseData | null): any {
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

