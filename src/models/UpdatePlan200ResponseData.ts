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
 * The updated resource
 * @export
 * @interface UpdatePlan200ResponseData
 */
export interface UpdatePlan200ResponseData {
    /**
     * 
     * @type {string}
     * @memberof UpdatePlan200ResponseData
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof UpdatePlan200ResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UpdatePlan200ResponseData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UpdatePlan200ResponseData
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the UpdatePlan200ResponseData interface.
 */
export function instanceOfUpdatePlan200ResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function UpdatePlan200ResponseDataFromJSON(json: any): UpdatePlan200ResponseData {
    return UpdatePlan200ResponseDataFromJSONTyped(json, false);
}

export function UpdatePlan200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatePlan200ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': json['created_at'],
        'id': json['id'],
        'name': json['name'],
        'updatedAt': json['updated_at'],
    };
}

export function UpdatePlan200ResponseDataToJSON(value?: UpdatePlan200ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': value.createdAt,
        'id': value.id,
        'name': value.name,
        'updated_at': value.updatedAt,
    };
}

