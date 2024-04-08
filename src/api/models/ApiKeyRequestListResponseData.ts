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
 * 
 * @export
 * @interface ApiKeyRequestListResponseData
 */
export interface ApiKeyRequestListResponseData {
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestListResponseData
     */
    apiKeyId: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiKeyRequestListResponseData
     */
    endedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestListResponseData
     */
    environmentId?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestListResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestListResponseData
     */
    method: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestListResponseData
     */
    reqBody?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestListResponseData
     */
    requestType?: string;
    /**
     * 
     * @type {number}
     * @memberof ApiKeyRequestListResponseData
     */
    resourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestListResponseData
     */
    resourceIdString?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestListResponseData
     */
    resourceName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestListResponseData
     */
    resourceType?: string;
    /**
     * 
     * @type {number}
     * @memberof ApiKeyRequestListResponseData
     */
    respCode?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestListResponseData
     */
    secondaryResource?: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiKeyRequestListResponseData
     */
    startedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestListResponseData
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyRequestListResponseData
     */
    userName?: string;
}

/**
 * Check if a given object implements the ApiKeyRequestListResponseData interface.
 */
export function instanceOfApiKeyRequestListResponseData(value: object): boolean {
    if (!('apiKeyId' in value)) return false;
    if (!('id' in value)) return false;
    if (!('method' in value)) return false;
    if (!('startedAt' in value)) return false;
    if (!('url' in value)) return false;
    return true;
}

export function ApiKeyRequestListResponseDataFromJSON(json: any): ApiKeyRequestListResponseData {
    return ApiKeyRequestListResponseDataFromJSONTyped(json, false);
}

export function ApiKeyRequestListResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiKeyRequestListResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'apiKeyId': json['api_key_id'],
        'endedAt': json['ended_at'] == null ? undefined : (new Date(json['ended_at'])),
        'environmentId': json['environment_id'] == null ? undefined : json['environment_id'],
        'id': json['id'],
        'method': json['method'],
        'reqBody': json['req_body'] == null ? undefined : json['req_body'],
        'requestType': json['request_type'] == null ? undefined : json['request_type'],
        'resourceId': json['resource_id'] == null ? undefined : json['resource_id'],
        'resourceIdString': json['resource_id_string'] == null ? undefined : json['resource_id_string'],
        'resourceName': json['resource_name'] == null ? undefined : json['resource_name'],
        'resourceType': json['resource_type'] == null ? undefined : json['resource_type'],
        'respCode': json['resp_code'] == null ? undefined : json['resp_code'],
        'secondaryResource': json['secondary_resource'] == null ? undefined : json['secondary_resource'],
        'startedAt': (new Date(json['started_at'])),
        'url': json['url'],
        'userName': json['user_name'] == null ? undefined : json['user_name'],
    };
}

export function ApiKeyRequestListResponseDataToJSON(value?: ApiKeyRequestListResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'api_key_id': value['apiKeyId'],
        'ended_at': value['endedAt'] == null ? undefined : ((value['endedAt'] as any).toISOString()),
        'environment_id': value['environmentId'],
        'id': value['id'],
        'method': value['method'],
        'req_body': value['reqBody'],
        'request_type': value['requestType'],
        'resource_id': value['resourceId'],
        'resource_id_string': value['resourceIdString'],
        'resource_name': value['resourceName'],
        'resource_type': value['resourceType'],
        'resp_code': value['respCode'],
        'secondary_resource': value['secondaryResource'],
        'started_at': ((value['startedAt']).toISOString()),
        'url': value['url'],
        'user_name': value['userName'],
    };
}

