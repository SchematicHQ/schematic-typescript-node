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
import type { ApiKeyResponseData } from './ApiKeyResponseData';
import {
    ApiKeyResponseDataFromJSON,
    ApiKeyResponseDataFromJSONTyped,
    ApiKeyResponseDataToJSON,
} from './ApiKeyResponseData';

/**
 * The created resource
 * @export
 * @interface EnvironmentDetailResponseData
 */
export interface EnvironmentDetailResponseData {
    /**
     * 
     * @type {Array<ApiKeyResponseData>}
     * @memberof EnvironmentDetailResponseData
     */
    apiKeys: Array<ApiKeyResponseData>;
    /**
     * 
     * @type {Date}
     * @memberof EnvironmentDetailResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentDetailResponseData
     */
    environmentType: string;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentDetailResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentDetailResponseData
     */
    name: string;
    /**
     * 
     * @type {Date}
     * @memberof EnvironmentDetailResponseData
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the EnvironmentDetailResponseData interface.
 */
export function instanceOfEnvironmentDetailResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "apiKeys" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "environmentType" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function EnvironmentDetailResponseDataFromJSON(json: any): EnvironmentDetailResponseData {
    return EnvironmentDetailResponseDataFromJSONTyped(json, false);
}

export function EnvironmentDetailResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentDetailResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiKeys': ((json['api_keys'] as Array<any>).map(ApiKeyResponseDataFromJSON)),
        'createdAt': (new Date(json['created_at'])),
        'environmentType': json['environment_type'],
        'id': json['id'],
        'name': json['name'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function EnvironmentDetailResponseDataToJSON(value?: EnvironmentDetailResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api_keys': ((value.apiKeys as Array<any>).map(ApiKeyResponseDataToJSON)),
        'created_at': (value.createdAt.toISOString()),
        'environment_type': value.environmentType,
        'id': value.id,
        'name': value.name,
        'updated_at': (value.updatedAt.toISOString()),
    };
}

