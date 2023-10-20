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
 * @interface ListEvents200ResponseDataInner
 */
export interface ListEvents200ResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    apiKey: string;
    /**
     * 
     * @type {object}
     * @memberof ListEvents200ResponseDataInner
     */
    body: object;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    capturedAt: string;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    enrichedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    environmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    featureId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    loadedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    processedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    processingStatus: string;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    sentAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    subtype?: string;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseDataInner
     */
    userId?: string;
}

/**
 * Check if a given object implements the ListEvents200ResponseDataInner interface.
 */
export function instanceOfListEvents200ResponseDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "apiKey" in value;
    isInstance = isInstance && "body" in value;
    isInstance = isInstance && "capturedAt" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "processingStatus" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function ListEvents200ResponseDataInnerFromJSON(json: any): ListEvents200ResponseDataInner {
    return ListEvents200ResponseDataInnerFromJSONTyped(json, false);
}

export function ListEvents200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListEvents200ResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiKey': json['api_key'],
        'body': json['body'],
        'capturedAt': json['captured_at'],
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'enrichedAt': !exists(json, 'enriched_at') ? undefined : json['enriched_at'],
        'environmentId': !exists(json, 'environment_id') ? undefined : json['environment_id'],
        'featureId': !exists(json, 'feature_id') ? undefined : json['feature_id'],
        'id': json['id'],
        'loadedAt': !exists(json, 'loaded_at') ? undefined : json['loaded_at'],
        'processedAt': !exists(json, 'processed_at') ? undefined : json['processed_at'],
        'processingStatus': json['processing_status'],
        'sentAt': !exists(json, 'sent_at') ? undefined : json['sent_at'],
        'subtype': !exists(json, 'subtype') ? undefined : json['subtype'],
        'type': json['type'],
        'updatedAt': json['updated_at'],
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
    };
}

export function ListEvents200ResponseDataInnerToJSON(value?: ListEvents200ResponseDataInner | null): any {
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

