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
 * @interface UpdateApiKeyRequestBody
 */
export interface UpdateApiKeyRequestBody {
    /**
     * 
     * @type {string}
     * @memberof UpdateApiKeyRequestBody
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateApiKeyRequestBody
     */
    name?: string;
}

/**
 * Check if a given object implements the UpdateApiKeyRequestBody interface.
 */
export function instanceOfUpdateApiKeyRequestBody(value: object): boolean {
    return true;
}

export function UpdateApiKeyRequestBodyFromJSON(json: any): UpdateApiKeyRequestBody {
    return UpdateApiKeyRequestBodyFromJSONTyped(json, false);
}

export function UpdateApiKeyRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateApiKeyRequestBody {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function UpdateApiKeyRequestBodyToJSON(value?: UpdateApiKeyRequestBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'name': value['name'],
    };
}

