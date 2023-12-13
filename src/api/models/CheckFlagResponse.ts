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
import type { CheckFlagResponseData } from './CheckFlagResponseData';
import {
    CheckFlagResponseDataFromJSON,
    CheckFlagResponseDataFromJSONTyped,
    CheckFlagResponseDataToJSON,
} from './CheckFlagResponseData';

/**
 * 
 * @export
 * @interface CheckFlagResponse
 */
export interface CheckFlagResponse {
    /**
     * 
     * @type {CheckFlagResponseData}
     * @memberof CheckFlagResponse
     */
    data: CheckFlagResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof CheckFlagResponse
     */
    params: object;
}

/**
 * Check if a given object implements the CheckFlagResponse interface.
 */
export function instanceOfCheckFlagResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function CheckFlagResponseFromJSON(json: any): CheckFlagResponse {
    return CheckFlagResponseFromJSONTyped(json, false);
}

export function CheckFlagResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckFlagResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CheckFlagResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function CheckFlagResponseToJSON(value?: CheckFlagResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CheckFlagResponseDataToJSON(value.data),
        'params': value.params,
    };
}

