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
 * @interface CheckFlagsRequest
 */
export interface CheckFlagsRequest {
    /**
     * 
     * @type {object}
     * @memberof CheckFlagsRequest
     */
    company?: object;
    /**
     * 
     * @type {Array<string>}
     * @memberof CheckFlagsRequest
     */
    flags?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof CheckFlagsRequest
     */
    user?: object;
}

/**
 * Check if a given object implements the CheckFlagsRequest interface.
 */
export function instanceOfCheckFlagsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CheckFlagsRequestFromJSON(json: any): CheckFlagsRequest {
    return CheckFlagsRequestFromJSONTyped(json, false);
}

export function CheckFlagsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckFlagsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': !exists(json, 'company') ? undefined : json['company'],
        'flags': !exists(json, 'flags') ? undefined : json['flags'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function CheckFlagsRequestToJSON(value?: CheckFlagsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company': value.company,
        'flags': value.flags,
        'user': value.user,
    };
}

