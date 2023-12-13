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
 * The created resource
 * @export
 * @interface EventResponseData
 */
export interface EventResponseData {
    /**
     * 
     * @type {string}
     * @memberof EventResponseData
     */
    apiKey?: string | null;
    /**
     * 
     * @type {object}
     * @memberof EventResponseData
     */
    body: object;
    /**
     * 
     * @type {Date}
     * @memberof EventResponseData
     */
    capturedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof EventResponseData
     */
    companyId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof EventResponseData
     */
    enrichedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof EventResponseData
     */
    environmentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventResponseData
     */
    featureId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventResponseData
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof EventResponseData
     */
    loadedAt?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof EventResponseData
     */
    processedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof EventResponseData
     */
    processingStatus: string;
    /**
     * 
     * @type {Date}
     * @memberof EventResponseData
     */
    sentAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof EventResponseData
     */
    subtype?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EventResponseData
     */
    type: string;
    /**
     * 
     * @type {Date}
     * @memberof EventResponseData
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof EventResponseData
     */
    userId?: string | null;
}

/**
 * Check if a given object implements the EventResponseData interface.
 */
export function instanceOfEventResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "body" in value;
    isInstance = isInstance && "capturedAt" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "processingStatus" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function EventResponseDataFromJSON(json: any): EventResponseData {
    return EventResponseDataFromJSONTyped(json, false);
}

export function EventResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiKey': !exists(json, 'api_key') ? undefined : json['api_key'],
        'body': json['body'],
        'capturedAt': (new Date(json['captured_at'])),
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'enrichedAt': !exists(json, 'enriched_at') ? undefined : (json['enriched_at'] === null ? null : new Date(json['enriched_at'])),
        'environmentId': !exists(json, 'environment_id') ? undefined : json['environment_id'],
        'featureId': !exists(json, 'feature_id') ? undefined : json['feature_id'],
        'id': json['id'],
        'loadedAt': !exists(json, 'loaded_at') ? undefined : (json['loaded_at'] === null ? null : new Date(json['loaded_at'])),
        'processedAt': !exists(json, 'processed_at') ? undefined : (json['processed_at'] === null ? null : new Date(json['processed_at'])),
        'processingStatus': json['processing_status'],
        'sentAt': !exists(json, 'sent_at') ? undefined : (json['sent_at'] === null ? null : new Date(json['sent_at'])),
        'subtype': !exists(json, 'subtype') ? undefined : json['subtype'],
        'type': json['type'],
        'updatedAt': (new Date(json['updated_at'])),
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
    };
}

export function EventResponseDataToJSON(value?: EventResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api_key': value.apiKey,
        'body': value.body,
        'captured_at': (value.capturedAt.toISOString()),
        'company_id': value.companyId,
        'enriched_at': value.enrichedAt === undefined ? undefined : (value.enrichedAt === null ? null : value.enrichedAt.toISOString()),
        'environment_id': value.environmentId,
        'feature_id': value.featureId,
        'id': value.id,
        'loaded_at': value.loadedAt === undefined ? undefined : (value.loadedAt === null ? null : value.loadedAt.toISOString()),
        'processed_at': value.processedAt === undefined ? undefined : (value.processedAt === null ? null : value.processedAt.toISOString()),
        'processing_status': value.processingStatus,
        'sent_at': value.sentAt === undefined ? undefined : (value.sentAt === null ? null : value.sentAt.toISOString()),
        'subtype': value.subtype,
        'type': value.type,
        'updated_at': (value.updatedAt.toISOString()),
        'user_id': value.userId,
    };
}

