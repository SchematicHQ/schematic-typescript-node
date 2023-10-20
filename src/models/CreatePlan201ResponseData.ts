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
 * @interface CreatePlan201ResponseData
 */
export interface CreatePlan201ResponseData {
    /**
     * 
     * @type {string}
     * @memberof CreatePlan201ResponseData
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePlan201ResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePlan201ResponseData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePlan201ResponseData
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the CreatePlan201ResponseData interface.
 */
export function instanceOfCreatePlan201ResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function CreatePlan201ResponseDataFromJSON(json: any): CreatePlan201ResponseData {
    return CreatePlan201ResponseDataFromJSONTyped(json, false);
}

export function CreatePlan201ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePlan201ResponseData {
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

export function CreatePlan201ResponseDataToJSON(value?: CreatePlan201ResponseData | null): any {
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

