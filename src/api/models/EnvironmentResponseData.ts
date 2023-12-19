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
 * @interface EnvironmentResponseData
 */
export interface EnvironmentResponseData {
    /**
     * 
     * @type {Date}
     * @memberof EnvironmentResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentResponseData
     */
    environmentType: string;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentResponseData
     */
    name: string;
    /**
     * 
     * @type {Date}
     * @memberof EnvironmentResponseData
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the EnvironmentResponseData interface.
 */
export function instanceOfEnvironmentResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "environmentType" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function EnvironmentResponseDataFromJSON(json: any): EnvironmentResponseData {
    return EnvironmentResponseDataFromJSONTyped(json, false);
}

export function EnvironmentResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['created_at'])),
        'environmentType': json['environment_type'],
        'id': json['id'],
        'name': json['name'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function EnvironmentResponseDataToJSON(value?: EnvironmentResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': (value.createdAt.toISOString()),
        'environment_type': value.environmentType,
        'id': value.id,
        'name': value.name,
        'updated_at': (value.updatedAt.toISOString()),
    };
}

