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
 * @interface ApiKeyRequestResponseData
 */
export interface ApiKeyRequestResponseData {
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestResponseData
     */
    apiKeyId: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiKeyRequestResponseData
     */
    endedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestResponseData
     */
    environmentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestResponseData
     */
    method: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestResponseData
     */
    reqBody?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestResponseData
     */
    respBody?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApiKeyRequestResponseData
     */
    respCode?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof ApiKeyRequestResponseData
     */
    startedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestResponseData
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestResponseData
     */
    userAgent?: string | null;
}

/**
 * Check if a given object implements the ApiKeyRequestResponseData interface.
 */
export function instanceOfApiKeyRequestResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "apiKeyId" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "method" in value;
    isInstance = isInstance && "startedAt" in value;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function ApiKeyRequestResponseDataFromJSON(json: any): ApiKeyRequestResponseData {
    return ApiKeyRequestResponseDataFromJSONTyped(json, false);
}

export function ApiKeyRequestResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiKeyRequestResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiKeyId': json['api_key_id'],
        'endedAt': !exists(json, 'ended_at') ? undefined : (json['ended_at'] === null ? null : new Date(json['ended_at'])),
        'environmentId': !exists(json, 'environment_id') ? undefined : json['environment_id'],
        'id': json['id'],
        'method': json['method'],
        'reqBody': !exists(json, 'req_body') ? undefined : json['req_body'],
        'respBody': !exists(json, 'resp_body') ? undefined : json['resp_body'],
        'respCode': !exists(json, 'resp_code') ? undefined : json['resp_code'],
        'startedAt': (new Date(json['started_at'])),
        'url': json['url'],
        'userAgent': !exists(json, 'user_agent') ? undefined : json['user_agent'],
    };
}

export function ApiKeyRequestResponseDataToJSON(value?: ApiKeyRequestResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api_key_id': value.apiKeyId,
        'ended_at': value.endedAt === undefined ? undefined : (value.endedAt === null ? null : value.endedAt.toISOString()),
        'environment_id': value.environmentId,
        'id': value.id,
        'method': value.method,
        'req_body': value.reqBody,
        'resp_body': value.respBody,
        'resp_code': value.respCode,
        'started_at': (value.startedAt.toISOString()),
        'url': value.url,
        'user_agent': value.userAgent,
    };
}

