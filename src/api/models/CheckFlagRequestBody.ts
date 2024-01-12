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
 * @interface CheckFlagRequestBody
 */
export interface CheckFlagRequestBody {
    /**
     * 
     * @type {object}
     * @memberof CheckFlagRequestBody
     */
    company?: object | null;
    /**
     * 
     * @type {object}
     * @memberof CheckFlagRequestBody
     */
    user?: object | null;
}

/**
 * Check if a given object implements the CheckFlagRequestBody interface.
 */
export function instanceOfCheckFlagRequestBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CheckFlagRequestBodyFromJSON(json: any): CheckFlagRequestBody {
    return CheckFlagRequestBodyFromJSONTyped(json, false);
}

export function CheckFlagRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckFlagRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': !exists(json, 'company') ? undefined : json['company'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function CheckFlagRequestBodyToJSON(value?: CheckFlagRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company': value.company,
        'user': value.user,
    };
}

