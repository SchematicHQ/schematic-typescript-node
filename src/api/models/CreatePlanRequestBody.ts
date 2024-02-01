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
 * @interface CreatePlanRequestBody
 */
export interface CreatePlanRequestBody {
    /**
     * 
     * @type {string}
     * @memberof CreatePlanRequestBody
     */
    name: string;
}

/**
 * Check if a given object implements the CreatePlanRequestBody interface.
 */
export function instanceOfCreatePlanRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function CreatePlanRequestBodyFromJSON(json: any): CreatePlanRequestBody {
    return CreatePlanRequestBodyFromJSONTyped(json, false);
}

export function CreatePlanRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePlanRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function CreatePlanRequestBodyToJSON(value?: CreatePlanRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

