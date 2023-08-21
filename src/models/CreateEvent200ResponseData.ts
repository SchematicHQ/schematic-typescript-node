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
 * @interface CreateEvent200ResponseData
 */
export interface CreateEvent200ResponseData {
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    apiKey?: string;
    /**
     * 
     * @type {object}
     * @memberof CreateEvent200ResponseData
     */
    body?: object;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    capturedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    enrichedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    environmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    featureId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    loadedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    processedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    processingStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    sentAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    subtype?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvent200ResponseData
     */
    userId?: string;
}

/**
 * Check if a given object implements the CreateEvent200ResponseData interface.
 */
export function instanceOfCreateEvent200ResponseData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateEvent200ResponseDataFromJSON(json: any): CreateEvent200ResponseData {
    return CreateEvent200ResponseDataFromJSONTyped(json, false);
}

export function CreateEvent200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEvent200ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiKey': !exists(json, 'api_key') ? undefined : json['api_key'],
        'body': !exists(json, 'body') ? undefined : json['body'],
        'capturedAt': !exists(json, 'captured_at') ? undefined : json['captured_at'],
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'enrichedAt': !exists(json, 'enriched_at') ? undefined : json['enriched_at'],
        'environmentId': !exists(json, 'environment_id') ? undefined : json['environment_id'],
        'featureId': !exists(json, 'feature_id') ? undefined : json['feature_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'loadedAt': !exists(json, 'loaded_at') ? undefined : json['loaded_at'],
        'processedAt': !exists(json, 'processed_at') ? undefined : json['processed_at'],
        'processingStatus': !exists(json, 'processing_status') ? undefined : json['processing_status'],
        'sentAt': !exists(json, 'sent_at') ? undefined : json['sent_at'],
        'subtype': !exists(json, 'subtype') ? undefined : json['subtype'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
    };
}

export function CreateEvent200ResponseDataToJSON(value?: CreateEvent200ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api_key': value.apiKey,
        'body': value.body,
        'captured_at': value.capturedAt,
        'company_id': value.companyId,
        'enriched_at': value.enrichedAt,
        'environment_id': value.environmentId,
        'feature_id': value.featureId,
        'id': value.id,
        'loaded_at': value.loadedAt,
        'processed_at': value.processedAt,
        'processing_status': value.processingStatus,
        'sent_at': value.sentAt,
        'subtype': value.subtype,
        'type': value.type,
        'updated_at': value.updatedAt,
        'user_id': value.userId,
    };
}

