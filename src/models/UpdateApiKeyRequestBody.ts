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
 * @interface UpdateApiKeyRequestBody
 */
export interface UpdateApiKeyRequestBody {
    /**
     * 
     * @type {string}
     * @memberof UpdateApiKeyRequestBody
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateApiKeyRequestBody
     */
    name?: string | null;
}

/**
 * Check if a given object implements the UpdateApiKeyRequestBody interface.
 */
export function instanceOfUpdateApiKeyRequestBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateApiKeyRequestBodyFromJSON(json: any): UpdateApiKeyRequestBody {
    return UpdateApiKeyRequestBodyFromJSONTyped(json, false);
}

export function UpdateApiKeyRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateApiKeyRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function UpdateApiKeyRequestBodyToJSON(value?: UpdateApiKeyRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'name': value.name,
    };
}
