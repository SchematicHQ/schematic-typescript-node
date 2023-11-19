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
 * @interface EntityKeyResponseData
 */
export interface EntityKeyResponseData {
    /**
     * 
     * @type {Date}
     * @memberof EntityKeyResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof EntityKeyResponseData
     */
    definitionId: string;
    /**
     * 
     * @type {string}
     * @memberof EntityKeyResponseData
     */
    entityId: string;
    /**
     * 
     * @type {string}
     * @memberof EntityKeyResponseData
     */
    entityType: string;
    /**
     * 
     * @type {string}
     * @memberof EntityKeyResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof EntityKeyResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof EntityKeyResponseData
     */
    key: string;
    /**
     * 
     * @type {Date}
     * @memberof EntityKeyResponseData
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof EntityKeyResponseData
     */
    value: string;
}

/**
 * Check if a given object implements the EntityKeyResponseData interface.
 */
export function instanceOfEntityKeyResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "definitionId" in value;
    isInstance = isInstance && "entityId" in value;
    isInstance = isInstance && "entityType" in value;
    isInstance = isInstance && "environmentId" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function EntityKeyResponseDataFromJSON(json: any): EntityKeyResponseData {
    return EntityKeyResponseDataFromJSONTyped(json, false);
}

export function EntityKeyResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityKeyResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['created_at'])),
        'definitionId': json['definition_id'],
        'entityId': json['entity_id'],
        'entityType': json['entity_type'],
        'environmentId': json['environment_id'],
        'id': json['id'],
        'key': json['key'],
        'updatedAt': (new Date(json['updated_at'])),
        'value': json['value'],
    };
}

export function EntityKeyResponseDataToJSON(value?: EntityKeyResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': (value.createdAt.toISOString()),
        'definition_id': value.definitionId,
        'entity_id': value.entityId,
        'entity_type': value.entityType,
        'environment_id': value.environmentId,
        'id': value.id,
        'key': value.key,
        'updated_at': (value.updatedAt.toISOString()),
        'value': value.value,
    };
}
